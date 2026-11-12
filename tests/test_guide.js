'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync('website/guide.js','utf8');
const end=source.indexOf('  const state=');
assert.ok(end>0,'Guide catalog must precede interactive state');
const definitions=source.slice(0,end)+'\n globalThis.catalogCheck=catalog; globalThis.refsCheck=refs;\n})();';
const ctx={};
vm.runInNewContext(definitions,ctx);
const d=ctx.catalogCheck,refs=ctx.refsCheck;
const issueIds=['limits','models','prompts','usage','tools','coding'];
const roleIds=['beginner','regular','maker','developer'];
const productIds=['unknown','chat','work','codex'];
for(const lang of ['ru','en']){
  const x=d[lang];
  assert.ok(x,lang+' language is missing');
  assert.equal(Object.keys(x.issues).length,6,lang+': 6 topics required');
  assert.equal(Object.keys(x.roles).length,4,lang+': 4 roles required');
  assert.equal(x.articles.length,7,lang+': 7 articles required');
  assert.equal(x.glossary.length,7,lang+': 7 glossary terms required');
  assert.equal(x.examples.length,5,lang+': 5 examples required');
  for(const id of roleIds){assert.ok(x.roles[id][0]&&x.roles[id][1],lang+': missing role '+id)}
  for(const id of productIds){assert.ok(x.products[id][0]&&x.products[id][1],lang+': missing product '+id)}
  for(const id of issueIds){
    const issue=x.issues[id];
    assert.ok(issue.title&&issue.short&&issue.intro,lang+': incomplete topic '+id);
    assert.ok(Array.isArray(issue.steps)&&issue.steps.length>=3,lang+': incomplete steps '+id);
    assert.ok(refs[issue.source],lang+': missing official reference '+id);
    for(const role of roleIds)assert.ok(issue.tip[role]&&issue.tip[role].length>35,lang+': missing '+role+' tip for '+id);
  }
  const articleIds=new Set();
  for(const article of x.articles){
    assert.ok(!articleIds.has(article.id),lang+': duplicate article id');
    articleIds.add(article.id);
    assert.ok(article.title&&article.intro&&article.points.length===3,lang+': incomplete article '+article.id);
    assert.ok(refs[article.source],lang+': missing source for '+article.id);
  }
  for(const entry of x.glossary)assert.ok(entry.length===3&&entry.every(Boolean),lang+': incomplete glossary');
  for(const entry of x.examples)assert.ok(entry.length===2&&entry[1].length>55,lang+': incomplete example');
}
for(const [key,url] of Object.entries(refs))assert.ok(/^https:\/\/(help\.openai\.com|developers\.openai\.com)\//.test(url),'Unexpected reference '+key);
console.log('PASS: 4 experience levels × 6 paths, 7 articles, 7 glossary entries and 5 prompts in RU/EN');
