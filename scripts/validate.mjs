import {CATEGORIES} from './categories.mjs';
import {secureURL} from './fetch.mjs';
export function validateSubmission(value,path){
 if(!/^submissions\/[a-z0-9]+(?:-[a-z0-9]+)*\.json$/.test(path)||path.length>100)throw Error('Use submissions/<slug>.json');
 if(!value||Array.isArray(value)||typeof value!=='object')throw Error('Expected an object');
 const keys=['name','url','category','site','auth','maintainer'];
 if(Object.keys(value).length!==keys.length||keys.some(k=>typeof value[k]!=='string'||!value[k].trim()||value[k].length>(['url','site'].includes(k)?2048:100)||/[\x00-\x1f<>]/.test(value[k])))throw Error('Provide exactly name, url, category, site, auth and maintainer as plain strings');
 if(!CATEGORIES.includes(value.category))throw Error('Unknown category');
 if(!['Open','OAuth','API Key','other'].includes(value.auth))throw Error('Unknown auth');
 return {...value,url:secureURL(value.url).href,site:secureURL(value.site).href,slug:path.slice(12,-5)};
}
export function validateFiles(files){
 if(files.length!==1||files[0].status!=='added')throw Error('Add exactly one new submission file; no other paths may change');
 if(!/^submissions\/[a-z0-9]+(?:-[a-z0-9]+)*\.json$/.test(files[0].filename))throw Error('Only submission JSON is allowed');
}
