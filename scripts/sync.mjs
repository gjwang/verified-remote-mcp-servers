import {readFileSync,writeFileSync,readdirSync,unlinkSync} from 'node:fs';
import {safeFetch} from './fetch.mjs';
import {verifyServer} from './handshake.mjs';
import {validateSubmission} from './validate.mjs';
import {render} from './readme.mjs';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const save=(p,v)=>writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const compact=e=>({...Object.fromEntries(['slug','name','url','category','auth','maintainer','site'].map(k=>[k,e[k]])),check:{status:e.check.status,checkedAt:e.check.checkedAt,toolCount:e.check.toolCount}});
let entries=read('servers.json');
if(process.argv.includes('--remote')){
 const remote=JSON.parse((await safeFetch('https://appside.build/mcp-servers.json',{maxBytes:8388608,timeout:20000,redirects:false})).body);
 if(!Array.isArray(remote)||remote.length===0)throw Error('Invalid upstream data');
 for(const e of remote){validateSubmission(Object.fromEntries(['name','url','category','site','auth','maintainer'].map(k=>[k,e[k]])),`submissions/${e.slug}.json`);if(!['passed','auth_required'].includes(e.check?.status))throw Error('Invalid upstream check');}
 const prior=new Set(read('scripts/appside-urls.json')),urls=new Set(remote.map(e=>e.url)),slugs=new Set(remote.map(e=>e.slug));
 const local=[];
 for(const e of entries.filter(e=>!prior.has(e.url)&&!urls.has(e.url)&&!slugs.has(e.slug))){const check=await verifyServer(e);if(check.status!=='failed')local.push({...e,check});}
 entries=[...remote,...local];save('scripts/appside-urls.json',[...urls]);
}
for(const file of readdirSync('submissions').filter(f=>f.endsWith('.json'))){
 const path='submissions/'+file,entry=validateSubmission(read(path),path);
 if(!entries.some(e=>e.slug===entry.slug||e.url===entry.url)){
  const check=await verifyServer(entry);
  if(check.status!=='failed')entries.push({...entry,check});
  else console.error(`${entry.slug}: ${check.reason}`);
 }
 unlinkSync(path);
}
entries=entries.map(compact).sort((a,b)=>a.slug.localeCompare(b.slug));
save('servers.json',entries);writeFileSync('README.md',render(entries));
