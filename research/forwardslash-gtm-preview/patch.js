/* Patch: splices the Go-to-market pages into the sequence loaded from the
   production app.js, points embedded pages at the production origin, rebuilds
   the rail and re-routes. In the repository this is done inside app.js itself
   (two one-line merges) and this file does not exist. */
landingPages.forEach(x=>{x[3]="https://forwardslash-product.vercel.app/"+x[3]});
sequence.splice(sequence.findIndex(p=>p.id==="sources"),0,...growthPages.map(p=>({...p})));
Object.assign(renderer,growthRenderers);
rail.innerHTML="";let previewGroup="";
sequence.forEach((p,i)=>{if(p.group!==previewGroup){const d=document.createElement("div");d.className="rail-label rail-group";d.textContent=p.group;rail.appendChild(d);previewGroup=p.group}const b=document.createElement("button");b.dataset.page=p.id;b.innerHTML=`<span>${String(i+1).padStart(2,"0")}</span><span>${p.title}</span>`;b.onclick=()=>location.hash="#"+p.id;rail.appendChild(b)});
route();