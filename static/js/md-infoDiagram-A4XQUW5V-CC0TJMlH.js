import{_ as e,l as s,G as n,k as i,H as p}from"./md-index-BMmaphA0.js";import{p as g}from"./md-gitGraph-YCYPL57B-Cfu-4Os1.js";import"./md-_baseUniq-sba_2Dul.js";import"./md-_basePickBy-1-4PE48j.js";import"./md-clone-B-cdivvI.js";var v={parse:e(async r=>{const a=await g("info",r);s.debug(a)},"parse")},d={version:p},m=e(()=>d.version,"getVersion"),c={getVersion:m},l=e((r,a,o)=>{s.debug(`rendering info diagram
`+r);const t=n(a);i(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`)},"draw"),f={draw:l},S={parser:v,db:c,renderer:f};export{S as diagram};
