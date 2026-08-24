/* marketing-pages.js — Brand scent, Free doors, ads, scripts in the product-book rail. */
const marketingPages=[
  {id:"scent",title:"Brand scent",group:"Marketing"},
  {id:"doors",title:"Free doors",group:"Marketing"},
  {id:"ads-pack",title:"Ads pack",group:"Marketing"},
  {id:"scripts-v2",title:"Scripts v2",group:"Marketing"}
];
function renderScent(){
  return `${header("Marketing · locked voice","Outbound from your mailbox and phone.","One system from first touch to booked meeting. Swiss care, not CRM theatre.")}
<section class="section"><div class="wrap">
<p class="lede">Hang line: <strong>Start free. Do one job.</strong> CTAs: Start free · Talk to us. Pricing stickers live in design/!pricing — not here.</p>
<div class="grid2">
<article class="card"><h3>Own-channel</h3><p>Send from your mailbox. Dial from your numbers. No black-box send farm.</p></article>
<article class="card"><h3>Close-parity honesty</h3><p>Win with Free + product depth. Never undercut stickers. Never cheaper-than-Close as a hero.</p></article>
<article class="card"><h3>Bootstrap-real</h3><p>Paid CAC only for annual teams or enterprise. Do not buy traffic just for Free.</p></article>
<article class="card"><h3>Visual</h3><p>Ink and paper. Space Grotesk + Inter. Machined slash — not stock forests, not postcard Alps.</p></article>
</div>
<div class="actions"><a class="btn dark" href="#doors">Free doors →</a><a class="btn" href="https://github.com/glidaa/forwardslash-product/tree/fs-adman/marketing-pack/design/%21marketing" target="_blank">Source in git ↗</a></div>
</div></section>`;
}
function renderDoors(){
  const doors=[
    ["1","Load a list","Email and call from your phone. Live list + first send or dial."],
    ["2","Booking page","A shareable calendar page. Copy the link. No signup to start."],
    ["3","Event + signup","Event list. First confirmation when someone signs up."],
    ["4","Booking that emails","A booked slot that fires an email. First touch → meeting."],
    ["5","Phone bot","One number. One scripted attempt. Own-channel, not a demo farm."],
    ["6","Investors / clients","Named list + tasks. Share a link with a partner."]
  ];
  return `${header("Free membership","Start free. Do one job.","No signup. One job in about ten minutes is the free membership. Link-share stays free. Pay later for email-send polish and serious uploads.")}
<section class="section"><div class="wrap">
<div class="grid2">${doors.map(d=>`<article class="card"><span class="tag">Door ${d[0]}</span><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join("")}</div>
<p class="note"><strong>Stay free:</strong> tasks, name search, build a page, link-share. <strong>Pay:</strong> clean send and file uploads. Full journey in design/!pricing/05-FREEMIUM-JOURNEY.md.</p>
<div class="actions"><a class="btn dark" href="#ads-pack">Ads pack →</a><a class="btn" href="#scent">Brand scent</a></div>
</div></section>`;
}
function renderAdsPack(){
  const heads=["Outbound from your mailbox","Start free. Do one job.","Your mailbox. Your phone.","Load a list. Call from it.","Booked meetings. One system.","No black-box send farm","Swiss care, not CRM theatre","Booking page in ten minutes"];
  return `${header("Ads pack v0.2","Same scent as the hero.","Pin H1 or H2. Do not buy traffic only for Free. Destination must match this book — not the blue app shell.")}
<section class="section"><div class="wrap">
<h2>Google RSA — pin one of these</h2>
<div class="grid2">${heads.map(h=>`<article class="card"><h3>${h}</h3></article>`).join("")}</div>
<p>Full 15 headlines, descriptions, sitelinks, LinkedIn, 15s cutdown: <code>design/!marketing/05-ads.md</code></p>
<div class="note"><strong>Ship blocker:</strong> invisible white-on-white H1 on email-manager-gamma. Kill that before paid clicks. Do not send spend to forwardslash.ch empty-state.</div>
<div class="actions"><a class="btn dark" href="#scripts-v2">Scripts v2 →</a></div>
</div></section>`;
}
function renderScriptsV2(){
  const rows=[
    ["1","The list, / , share","Write names. Type / then the person. Share the link. No signup."],
    ["2","Outside the firm","Client or Upwork. Copy-paste share. They do not register."],
    ["3","Less is more","Get the open loops out of your head. Swiss calm, not spa zen."],
    ["4","Once a day","Open loops live on the list. Look once. Then work."],
    ["5","Twenty and twenty","Last 20 minutes plan tomorrow. First 20 review. Assign."],
    ["6","Craft","Swiss precision. German order. Japanese craft. Not postcard mountains."],
    ["7","Events are people","Composite organiser. Starts as a list. Then tasks, email, the room."],
    ["8","The pile","Quieter than the horror draft. One list. Own channels."],
    ["9","Horizon","Lists, estimates, a deadline — without an IT project."],
    ["10","One seam","Replace one job. Not a jungle. Not a machete ad."],
    ["11","Second home","Huge work becomes small steps. The list is the quiet place."],
    ["12","A time to be heard","Each name has a moment. Headphones on the street."],
    ["13","Uncluttered","Enemy: no shared list. Public link. Write it today."]
  ];
  return `${header("Scripts v2","Same connection, current product.","Thirteen angles from the task-app era, rewritten. Archive stays in git. Do not ship Envato stock.")}
<section class="section"><div class="wrap">
<div class="tablewrap"><table><thead><tr><th>No.</th><th>Angle</th><th>Hang</th></tr></thead><tbody>
${rows.map(r=>`<tr><td>${r[0]}</td><td><strong>${r[1]}</strong></td><td>${r[2]}</td></tr>`).join("")}
</tbody></table></div>
<p>Full VO in <code>design/!marketing/08-scripts-v2.md</code>. Originals archived in <code>07-scripts-v1-archive.md</code>.</p>
<div class="actions"><a class="btn dark" href="#story">Product overview</a></div>
</div></section>`;
}
Object.assign(renderer,{
  scent:renderScent,
  doors:renderDoors,
  "ads-pack":renderAdsPack,
  "scripts-v2":renderScriptsV2
});
(function(){
  const at=sequence.findIndex(p=>p.id==="landings");
  sequence.splice(at<0?1:at,0,...marketingPages);
})();
