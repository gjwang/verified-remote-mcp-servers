import {safeFetch,secureURL} from './fetch.mjs';
function rpc(response,id){
 let messages=[];
 if((response.headers['content-type']||'').includes('text/event-stream')){
  for(const event of response.body.split(/\r?\n\r?\n/)){const data=event.split(/\r?\n/).filter(l=>l.startsWith('data:')).map(l=>l.slice(5).trimStart()).join('\n');if(data)try{messages.push(JSON.parse(data));}catch{}}
 }else try{messages=[JSON.parse(response.body)];}catch{}
 const result=messages.find(m=>m?.jsonrpc==='2.0'&&m.id===id);
 if(!result||result.error||!result.result||typeof result.result!=='object')throw Error('Invalid MCP response');
 return result.result;
}
export async function verifyServer(entry,{fetchPage=safeFetch,now=Date.now,timeout=7000}={}){
 const checkedAt=new Date(now()).toISOString(),started=Date.now();
 try{
  secureURL(entry.url);
  let session,version='2025-03-26';
  const call=(method,params,id)=>{if(Date.now()-started>=20000)throw Error('Handshake timed out');return fetchPage(entry.url,{method:'POST',redirects:false,completeBody:(body,headers)=>{if(id===undefined)return false;try{rpc({body,headers},id);return true;}catch{return false;}},timeout:Math.min(timeout,20000-(Date.now()-started)),maxBytes:524288,acceptStatuses:[200,202,401],headers:{'Content-Type':'application/json',Accept:'application/json, text/event-stream',...(session?{'Mcp-Session-Id':session}:{}),'MCP-Protocol-Version':version},body:JSON.stringify({jsonrpc:'2.0',method,...(params?{params}:{}),...(id===undefined?{}:{id})})});};
  const initialized=await call('initialize',{protocolVersion:version,capabilities:{},clientInfo:{name:'AppsideDirectory',version:'1.0.0'}},1);
  if(initialized.status===401){
   if(entry.auth!=='Open'&&initialized.headers['www-authenticate']?.trim())return {status:'auth_required',checkedAt,toolCount:null,tools:[]};
   throw Error('Authentication challenge missing or server declared Open');
  }
  const result=rpc(initialized,1);
  if(!['2024-11-05','2025-03-26','2025-06-18','2025-11-25'].includes(result.protocolVersion)||!result.serverInfo?.name||!result.capabilities)throw Error('Invalid initialize result');
  version=result.protocolVersion;session=initialized.headers['mcp-session-id'];
  const notified=await call('notifications/initialized');
  if(![200,202].includes(notified.status))throw Error('Initialization notification rejected');
  const tools=[];let cursor;const cursors=new Set();
  if(result.capabilities.tools){
   do{
    const response=await call('tools/list',cursor?{cursor}:{},2+tools.length);
    if(response.status===401&&entry.auth!=='Open'&&response.headers['www-authenticate'])return {status:'auth_required',checkedAt,toolCount:null,tools:[]};
    const listed=rpc(response,2+tools.length);
    if(!Array.isArray(listed.tools)||listed.tools.some(t=>typeof t?.name!=='string'||!t.name||t.name.length>256))throw Error('Invalid tools list');
    tools.push(...listed.tools.map(t=>t.name));cursor=listed.nextCursor;
    if(cursor&&(typeof cursor!=='string'||cursors.has(cursor)||cursors.size>=9))throw Error('Invalid or excessive tools pagination');cursors.add(cursor);
   }while(cursor);
  }else if(entry.auth==='Open')throw Error('Server does not advertise tools');
  return {status:'passed',checkedAt,toolCount:tools.length,tools};
 }catch(e){return {status:'failed',checkedAt,toolCount:null,tools:[],reason:String(e.message).slice(0,200)};}
}
export const publishable=e=>['passed','auth_required'].includes(e.check?.status);
