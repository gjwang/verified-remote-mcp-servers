import https from 'node:https';
import {lookup} from 'node:dns/promises';
import {isIP} from 'node:net';

export function publicIP(ip) {
  // IPv4 transport only: reject IPv6 (including mapped IPv4) rather than risk transition tunnels.
  if(isIP(ip)!==4)return false;
  const [a,b,c]=ip.split('.').map(Number);
  return !(a===0||a===10||a===127||a>=224||a===169&&b===254||a===172&&b>=16&&b<=31||a===192&&(b===168||b===0||b===2||b===88&&c===99)||a===100&&b>=64&&b<=127||a===198&&(b===18||b===19||b===51&&c===100)||a===203&&b===0&&c===113);
}
export function secureURL(value) {
  let u;try{u=new URL(value);}catch{throw Error('Invalid HTTPS URL');}
  if(u.protocol!=='https:'||u.username||u.password||u.port&&u.port!=='443'||u.href.length>2048||u.hash)throw Error('Use HTTPS without credentials, fragments or custom ports');
  const h=u.hostname.replace(/\.$/,'');
  if(h!==u.hostname||h==='localhost'||h.endsWith('.localhost')||h.endsWith('.local')||h.endsWith('.internal')||!h.includes('.')||isIP(h)&&!publicIP(h)||h.startsWith('['))throw Error('Public domain required');
  return u;
}
function request(url,address,signal,maxBytes=65536,options={}) {
  return new Promise((resolve,reject)=>{
    const req=https.request(url,{method:options.method||'GET',agent:false,signal,lookup:(_h,opts,cb)=>opts.all?cb(null,[{address,family:4}]):cb(null,address,4),headers:{'User-Agent':'AppsideCatalog/0.2','Accept':'text/html,text/plain,application/json','Accept-Encoding':'identity',...options.headers}},res=>{
      if(res.headers['content-encoding']&&!/^identity$/i.test(res.headers['content-encoding'])){res.destroy();return reject(Error('Compressed response rejected'));}
      if(Number(res.headers['content-length'])>maxBytes){res.destroy();return reject(Error('Response exceeds byte limit'));}
      const chunks=[];let size=0;
      res.on('data',c=>{size+=c.length;if(size>maxBytes){res.destroy(Error('Response exceeds byte limit'));return;}chunks.push(c);if(options.completeBody?.(Buffer.concat(chunks).toString('utf8'),res.headers)){resolve({status:res.statusCode,headers:res.headers,body:Buffer.concat(chunks).toString('utf8'),bytes:Buffer.concat(chunks)});res.destroy();}});
      res.on('error',reject);
      res.on('end',()=>resolve({status:res.statusCode,headers:res.headers,body:Buffer.concat(chunks).toString('utf8'),bytes:Buffer.concat(chunks)}));
    });req.on('error',reject);req.end(options.body);
  });
}
export async function safeFetch(value,{resolveHost=lookup,transport=request,allowedHost,allowedPath,maxBytes=65536,timeout=5000,method='GET',headers={},body,acceptStatuses=[200],redirects=true,completeBody}={}) {
  if(!Number.isInteger(maxBytes)||maxBytes<1||maxBytes>524288)throw Error('Invalid byte limit');
  const controller=new AbortController();
  let timer;
  const deadline=new Promise((_,reject)=>{timer=setTimeout(()=>{controller.abort();reject(Error('Verification timed out'));},timeout);});
  const work=async()=>{
    let url=secureURL(value);
    for(let hop=0;hop<=3;hop++){
      if(allowedHost&&url.hostname!==allowedHost)throw Error('Verification must stay on the claimed host');
      if(allowedPath!==undefined&&url.pathname.replace(/\/$/,'')!==allowedPath)throw Error('Verification must stay on the claimed path');
      const addresses=await resolveHost(url.hostname,{family:4,all:true});
      if(!addresses.length||addresses.some(a=>!publicIP(a.address)))throw Error('Non-public destination rejected');
      const r=await transport(url,addresses[0].address,controller.signal,maxBytes,{method,headers,body,completeBody});
      if((r.bytes?.length??Buffer.byteLength(r.body))>maxBytes)throw Error('Response exceeds byte limit');
      if([301,302,303,307,308].includes(r.status)){if(!redirects)throw Error('Redirect rejected');if(!r.headers.location)throw Error('Missing redirect');url=secureURL(new URL(r.headers.location,url).href);continue;}
      if(!acceptStatuses.includes(r.status))throw Error('Verification page unavailable');
      return {...r,url:url.href};
    }throw Error('Too many redirects');
  };
  try{return await Promise.race([work(),deadline]);}finally{clearTimeout(timer);controller.abort();}
}
