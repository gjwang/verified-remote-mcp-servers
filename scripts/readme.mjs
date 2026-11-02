import {readFileSync,writeFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {CATEGORIES} from './categories.mjs';
const escape=s=>String(s).replace(/[&<>|`\[\]\\*\r\n]/g,c=>'&#'+c.charCodeAt(0)+';');
const link=u=>encodeURI(u).replace(/[()]/g,c=>'%'+c.charCodeAt(0).toString(16));
const anchor=s=>s.toLowerCase().replace(/[^a-z0-9 -]/g,'').replaceAll(' ','-');
export function render(entries){
 const rows=entries.filter(e=>['passed','auth_required'].includes(e.check?.status));
 let out='# Verified Remote MCP Servers\n\nEvery server is checked with a real MCP handshake: initialize + tools/list for open servers, and a 401 auth challenge for protected ones. Failures are removed. PRs are checked automatically and merged within a day — no waiting months. Checks are dated observations; auth challenges establish reachability, and we never invoke tools.\n\n';
 out+=`${rows.length} servers · ${rows.filter(e=>e.check.status==='passed').length} handshakes passed · ${rows.filter(e=>e.check.status==='auth_required').length} require authentication · ${CATEGORIES.length} categories\n\n[Add a server](CONTRIBUTING.md) · [Data license: CC BY 4.0](LICENSE-DATA) · [Code license: MIT](LICENSE)\n\n## Contents\n\n`;
 for(const c of CATEGORIES)out+=`- [${c}](#${anchor(c)})\n`;
 for(const c of CATEGORIES){out+=`\n## ${c}\n\n| Server | Endpoint | Auth | Check | Maintainer |\n| --- | --- | --- | --- | --- |\n`;for(const e of rows.filter(e=>e.category===c).sort((a,b)=>a.name.localeCompare(b.name)||a.slug.localeCompare(b.slug)))out+=`| [${escape(e.name)}](https://appside.build/mcp-servers/${encodeURIComponent(e.slug)}/) | <code>${escape(e.url)}</code> | ${escape(e.auth)} | ${e.check.status==='passed'?`✅ handshake · ${e.check.toolCount} tools`:'🔐 auth required'} | [${escape(e.maintainer)}](${link(e.site)}) |\n`;}
 return out+'\nMaintained by Appside (https://appside.build). Data: https://appside.build/mcp-servers.json. Agents can submit and claim listings over MCP: https://appside.build/docs/agent-accounts/.\n';
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)writeFileSync('README.md',render(JSON.parse(readFileSync('servers.json','utf8'))));
