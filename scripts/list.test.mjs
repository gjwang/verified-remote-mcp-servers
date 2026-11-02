import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {render} from './readme.mjs';
import {validateSubmission,validateFiles} from './validate.mjs';
import {verifyServer} from './handshake.mjs';
import {safeFetch} from './fetch.mjs';
import {CATEGORIES} from './categories.mjs';
const input={name:'Example',url:'https://example.com/mcp',category:'Developer Tools',site:'https://example.com/',auth:'Open',maintainer:'Team'};
const entry={...input,slug:'example',check:{status:'passed',toolCount:2}};
test('generated README matches committed data, 18 categories, counts and links',()=>{
 const entries=JSON.parse(readFileSync('servers.json','utf8'));const text=render(entries);assert.equal(readFileSync('README.md','utf8'),text);assert.equal(CATEGORIES.length,18);
 for(const c of CATEGORIES)assert.ok(text.includes('## '+c+'\n'));
 assert.ok(text.includes(`${entries.length} servers`));assert.ok(text.includes('https://appside.build/mcp-servers/'+entries[0].slug+'/'));
 assert.ok(text.includes('✅ handshake'));assert.ok(text.includes('🔐 auth required'));assert.doesNotMatch(text,/test.mode|sandbox/i);
});
test('README escapes table/HTML injection and hides failures',()=>{const text=render([{...entry,name:'[evil]|<script>`'}, {...entry,slug:'hidden',name:'hidden',check:{status:'failed'}}]);assert.doesNotMatch(text,/<script>|\[evil\]|\/hidden\//);assert.match(text,/&#124;/);});
test('accepts exactly six fields, canonical categories and auth',()=>{
 assert.equal(validateSubmission(input,'submissions/example.json').slug,'example');
 for(const auth of ['Open','OAuth','API Key','other'])assert.equal(validateSubmission({...input,auth},'submissions/example.json').auth,auth);
 for(const value of [null,[],{}, {...input,extra:'x'},{...input,auth:'None'},{...input,category:'Fake'},{...input,name:'x\ny'},{...input,maintainer:''}])assert.throws(()=>validateSubmission(value,'submissions/example.json'));
 for(const url of ['http://example.com','https://127.0.0.1','https://192.168.0.1','https://localhost','https://example.com:8443','https://user:pass@example.com','https://example.com/#x'])assert.throws(()=>validateSubmission({...input,url},'submissions/example.json'));
 for(const path of ['scripts/x.mjs','submissions/../x.json','submissions/x/y.json','submissions/X.json'])assert.throws(()=>validateSubmission(input,path));
});
test('rejects mixed, modified or renamed PR files',()=>{
 validateFiles([{filename:'submissions/example.json',status:'added'}]);
 for(const files of [[],[{filename:'scripts/check-pr.mjs',status:'added'}],[{filename:'submissions/x.json',status:'modified'}],[{filename:'submissions/x.json',status:'renamed'}],[{filename:'submissions/x.json',status:'added'},{filename:'README.md',status:'modified'}]])assert.throws(()=>validateFiles(files));
});
test('real lifecycle only lists tools, applies request limits and accepts challenged protected endpoints',async()=>{
 const calls=[];const result=await verifyServer(input,{fetchPage:async(_,o)=>{assert.equal(o.redirects,false);assert.equal(o.maxBytes,524288);assert.ok(o.timeout<=7000);const q=JSON.parse(o.body);calls.push(q.method);return {status:200,headers:{},body:JSON.stringify({jsonrpc:'2.0',id:q.id,result:q.method==='initialize'?{protocolVersion:'2025-03-26',capabilities:{tools:{}},serverInfo:{name:'Example'}}:{tools:[{name:'search'}]}})};}});
 assert.equal(result.status,'passed');assert.deepEqual(calls,['initialize','notifications/initialized','tools/list']);
 const fetchPage=async()=>({status:401,headers:{'www-authenticate':'Bearer'},body:''});assert.equal((await verifyServer({...input,auth:'OAuth'},{fetchPage})).status,'auth_required');assert.equal((await verifyServer(input,{fetchPage})).status,'failed');
});
test('DNS pinning rejects private addresses, redirects and oversized responses',async()=>{
 const opts={resolveHost:async()=>[{address:'127.0.0.1'}],transport:async()=>{throw Error('must not connect');}};await assert.rejects(()=>safeFetch(input.url,opts),/Non-public/);
 await assert.rejects(()=>safeFetch(input.url,{resolveHost:async()=>[{address:'8.8.8.8'}],redirects:false,transport:async()=>({status:302,headers:{location:'https://127.0.0.1'},body:''})}),/Redirect/);
 await assert.rejects(()=>safeFetch(input.url,{resolveHost:async()=>[{address:'8.8.8.8'}],maxBytes:3,transport:async()=>({status:200,headers:{},body:'1234'})}),/byte limit/);
});

test('PR orchestration reads blobs, comments and merges only verified immutable head',async()=>{
 const {checkPR}=await import('./check-pr.mjs');
 async function run({files=[{filename:'submissions/example.json',status:'added',sha:'blob'}],head='abc',status='passed',existing=[]}={}){
  const calls=[];let verified=0;
  const api=(path,...args)=>{calls.push([path,...args]);if(path.endsWith('/files?per_page=100'))return files;if(path.includes('/git/blobs/'))return {encoding:'base64',size:200,content:Buffer.from(JSON.stringify(input)).toString('base64')};if(path.endsWith('/merge'))return {merged:true};if(path.endsWith('/comments'))return {};return {state:'open',head:{sha:head},base:{ref:'main'},changed_files:files.length};};
  const passed=await checkPR({event:{pull_request:{number:1,head:{sha:'abc'}}},repo:'owner/repo',api,existing,verify:async()=>{verified++;return {status,toolCount:1,reason:'bad handshake'};}});return {passed,calls,verified};
 }
 const pass=await run();assert.equal(pass.passed,true);assert.ok(pass.calls.find(c=>c[0].endsWith('/merge')).includes('sha=abc'));
 assert.equal((await run({status:'auth_required'})).passed,true);
 for(const opts of [{head:'changed'},{status:'failed'},{existing:[entry]},{files:[{filename:'.github/workflows/evil.yml',status:'added'}]}]){const r=await run(opts);assert.equal(r.passed,false);assert.equal(r.calls.some(c=>c[0].endsWith('/merge')),false);assert.ok(r.calls.some(c=>c[0].endsWith('/comments')));}
});
