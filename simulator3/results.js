import{COLORS,RUN,TOTAL_TICKS,STATES,COUNTERS,resetRun}from"./options.js";import{graphElement,replayElement}from"./dom.js";let graphPoint=0;const matchMedia=window.matchMedia("(min-width: 800px)");let isDesktop=matchMedia.matches;const domElements=Object.fromEntries(Object.keys(COUNTERS).map(e=>{const t=document.getElementById(e);return t&&(t.parentNode.style="color: "+COLORS[e]),[e,document.getElementById(e)]})),updateGraph=()=>{let e=0;const t=Object.entries(RUN.results).map(([t,n])=>{const r=COLORS[t];if(n>0){const t=n/200*50,s=`<rect height="${t}" y="${e}" width="1" fill="${r}"></rect>`;return e+=t,s}return""}).join(""),n=`<g transform="translate(${graphPoint},0)">${t}</g>`;graphPoint++,graphElement.insertAdjacentHTML("beforeend",n)};export const resetValues=(e=isDesktop)=>{graphElement.innerHTML="",replayElement.style.display="none",graphPoint=0,isDesktop=e,resetRun()};export const updateCount=()=>{RUN.tick<TOTAL_TICKS&&(RUN.results[STATES.infected]>RUN.results["max-concurrent-infected"]&&RUN.results["max-concurrent-infected"]++,Object.entries(domElements).forEach(([e,t])=>{t&&(t.innerText=RUN.results[e])}),isDesktop?RUN.tick%2==0&&updateGraph():RUN.tick%4==0&&updateGraph()),RUN.tick===TOTAL_TICKS?replayElement.style.display="flex":RUN.tick++};
