// Run only from the trusted base revision; submission JSON is never executed.
import {execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync} from 'node:fs';
import {validateFiles,validateSubmission} from './validate.mjs';
import {verifyServer} from './handshake.mjs';
import {pathToFileURL} from 'node:url';
export async function checkPR({event,repo,api,verify=verifyServer,existing}){
 const number=event.pull_request.number;
try{
 const pr=api(`repos/${repo}/pulls/${number}`);
 if(pr.state!=='open'||pr.head.sha!==event.pull_request.head.sha||pr.base.ref!=='main')throw Error('PR changed or does not target main; rerun on its latest revision');
 if(pr.changed_files!==1)throw Error('Add exactly one new submission JSON file');
 const files=api(`repos/${repo}/pulls/${number}/files?per_page=100`);validateFiles(files);
 const blob=api(`repos/${repo}/git/blobs/${files[0].sha}`);
 if(blob.encoding!=='base64'||blob.size>16384)throw Error('Submission must be at most 16 KiB');
 const entry=validateSubmission(JSON.parse(Buffer.from(blob.content,'base64').toString('utf8')),files[0].filename);
 if(existing.some(e=>e.slug===entry.slug||e.url===entry.url))throw Error('Slug or endpoint already listed');
 const check=await verify(entry);
 if(check.status==='failed')throw Error(check.reason);
 api(`repos/${repo}/issues/${number}/comments`,'-f',`body=MCP check: ${check.status}${check.toolCount===null?'':` · ${check.toolCount} tools`}. No tools invoked. Preparing automatic merge.`);
 const merged=api(`repos/${repo}/pulls/${number}/merge`,'-X','PUT','-f','merge_method=squash','-f',`sha=${pr.head.sha}`);
 if(!merged.merged)throw Error('Merge not completed');
 return true;
}catch(e){
 api(`repos/${repo}/issues/${number}/comments`,'-f',`body=MCP submission check did not complete: ${String(e.message).slice(0,600)}. The PR is left open if not already merged.`);
 return false;
}
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 const api=(path,...args)=>JSON.parse(execFileSync('gh',['api',path,...args],{encoding:'utf8',maxBuffer:2*1024*1024}));
 const passed=await checkPR({event:JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH,'utf8')),repo:process.env.GITHUB_REPOSITORY,api,existing:JSON.parse(readFileSync('servers.json','utf8'))});
 if(passed)writeFileSync(process.env.GITHUB_OUTPUT,'merged=true\n',{flag:'a'});else process.exitCode=1;
}
