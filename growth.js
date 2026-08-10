/* growth.js — Go-to-market section of the product book. */
const growthChecked="August 2026";
const gtmMarkets=[
{m:"Australia",who:"Recruiters, agencies, brokers and consultancies of 2–15 people; sales teams inside 20–200 person companies.",motion:"LinkedIn, webinars, referrals and 1:1 demos. Cold email only with consent or to conspicuously published work addresses relevant to the person's role (Spam Act 2003) — a narrow lane, not a channel.",local:"None. AUD pricing is already native. Local numbers and business-hours support close deals.",pr:"Launch now"},
{m:"United Kingdom",who:"Same profile, several times the volume. A dense consultant and agency market with strong self-serve habits.",motion:"The primary cold-email market: B2B email to corporate addresses is workable with clear identification and a working opt-out (PECR corporate-subscriber rule). Add webinars and partners. The DMCC Act 2024 makes false urgency and pressure selling unlawful — every countdown must be real.",local:"Display GBP. UK case studies.",pr:"Launch now"},
{m:"Ireland",who:"Agencies, recruiters and consultancies — and the natural first EU base for entity, VAT and hiring.",motion:"Runs on the UK playbook. B2B outbound is generally workable with an opt-out; confirm current ePrivacy rules before scaling volume.",local:"EUR display. An Irish entity later strengthens every EU sale.",pr:"Launch with UK"},
{m:"Netherlands & Nordics",who:"High English proficiency and high software spend; privacy-literate buyers who read the data page first.",motion:"Do not cold email — consent rules are strict even for B2B (the Netherlands and Denmark especially). Enter through webinars, content, LinkedIn and partners, and lead with the European-control landing page.",local:"English works. EUR, SEK and DKK display helps.",pr:"Second wave"},
{m:"France",who:"Agencies and mid-market sales teams. Strong local vendors — Brevo, lemlist, Ringover — prove willingness to pay.",motion:"B2B email is generally accepted when relevant to the recipient's professional role and carrying an opt-out (CNIL doctrine). Needs French UI, French support and French proof.",local:"Full French localisation before paid spend.",pr:"After localisation"},
{m:"DACH & Switzerland",who:"The richest market and the strictest. The .ch domain is an asset in Switzerland.",motion:"Cold email requires prior opt-in even for B2B (UWG; Swiss law is similar). Enter through agencies and consultants who resell, plus events and content. German localisation and residency clarity are preconditions.",local:"German UI, EU/CH residency statements, references.",pr:"Partner-led, third wave"}
];
const gtmPersonas=[
{t:"The solo operator",s:"A consultant, fractional executive or founder doing their own selling.",trigger:"A revenue push they must run alone, this month.",tries:"Uploads one list. Sends a 50-contact campaign from their own mailbox. Puts a booking page in their email signature.",upgrades:"Business, for records, projects and the shared inbox; a Campaign licence when volume grows.",stays:"Booking links already in circulation, the history of every client conversation, and templates that took evenings to write.",leaves:"Between projects, to save money. Answer with the pause plan and a free Personal downgrade that keeps their data — most return with the next project.",offer:"Annual with two months free, plus the Launch service."},
{t:"The five-person firm",s:"An agency, recruiter, MSP or brokerage. The centre of the market and the best unit economics.",trigger:"Outreach, replies, calls and client delivery live in five disconnected tools and one spreadsheet.",tries:"The shared CRM, the approval flow on one live client campaign, one project handover.",upgrades:"Campaign and Calling licences, record tiers, and later the agency master account.",stays:"No seat tax means the whole firm is inside within a month. Client work and client history sit in the same place; leaving means re-explaining every account.",leaves:"When only one person adopted it. Counter with the 30-day activation programme and a weekly usage digest to the owner.",offer:"The founding offer. This persona is who it is designed for."},
{t:"The champion inside a company",s:"A sales lead or ops manager in a 20–200 person company, tired of the stitched stack or the dialler bill.",trigger:"A renewal notice from an incumbent, or a new outbound target from above.",tries:"A one-team calling pilot. Replaces one seam — usually the dialler or the outbound tool — not the whole stack.",upgrades:"Licences across further teams, API access, admin controls, reporting.",stays:"Ported numbers, months of call outcomes, and manager dashboards the team runs on.",leaves:"When IT or procurement vetoes, or the incumbent discounts at renewal. Counter with the security page, a paid pilot whose fee credits the annual plan, and landing small enough to sit under approval thresholds.",offer:"A$990 four-week paid pilot, fully credited against the annual plan."},
{t:"Agencies and consultants as a channel",s:"The same firms as the five-person buyer — but selling for you, not only buying.",trigger:"They already run campaigns for clients and resell tooling today.",tries:"One client workspace under their own account.",upgrades:"The agency master account: separated client workspaces, pooled licences, client approvers.",stays:"Their margin and their client relationships now run on the platform.",leaves:"If a competitor pays a better margin. Counter with real economics: 20–30% first-year revenue share and co-marketing.",offer:"Partner terms. Every referred customer arrives at a fraction of paid CAC — the cheapest acquisition in this plan."}
];
const gtmFunnel=[
{s:"Get the email",m:"Webinars (“a compliant outbound campaign in 45 minutes”), the list sample — research 100 accounts in their niche and send it, so the product itself is the lead magnet — the interactive pricing comparison, the editorial library, and cold outbound where lawful.",t:"Cost per new marketing email A$15–40. Webinar registration to attendance above 40%."},
{s:"Get the card",m:"A 14-day Business trial with a card. The copy explains why, honestly: numbers, sending domains and the workspace stay live at day 15. The no-card path exists only as a webinar attendee code.",t:"Visitor to trial 3–6% from cold traffic, 15–30% from webinar attendees. Card-up-front trials converting at 40–60% — fewer trials, better trials, the right trade at this CAC."},
{s:"First value inside 72 hours",m:"An activation checklist stands in for onboarding: one list uploaded, ten sends or ten dials, one booking page live. At A$1,000–2,000 CAC, every trial has earned a 20-minute human setup call.",t:"60% of trials reach all three marks by day three. Activation, not signup, predicts payment."},
{s:"First spend",m:"Either the trial converts at day 14, or the founding offer fires at the activation moment — whichever comes first. The offer ladder holds every path from there.",t:"Median days from first email to first payment under 21."},
{s:"The assisted lane",m:"For the champion inside a company: outreach or webinar, then a 1:1 demo, then the paid pilot, then annual. Slower and larger — the only lane where a A$2,000 CAC is routinely comfortable.",t:"Demo to pilot 30–40%. Pilot to annual above 60%."},
{s:"If they stall",m:"The fallback ladder on the offers page, nine nurture touches over 30 days, the next webinar, retargeting, then a single 60-day win-back. No lead is closed-lost before day 60.",t:"5–10% of stalled trials recovered inside 90 days."}
];
const gtmLadder=[
{n:"1",t:"The founding offer",d:"Shown once per workspace, at the activation moment inside the trial — never at signup, never twice. Twenty-four months for the price of fourteen (about 42% off), the Launch service included, and the founding rate locked at renewal. A genuine 72-hour expiry enforced in billing, and a genuine cap — the first 100 Business workspaces — retired publicly when reached.",v:"Day-one cash A$3,500–6,200 on typical workspaces. This one decision funds the growth plan."},
{n:"2",t:"The order bump",d:"For everyone else, the Launch service on its own at checkout: lists imported, sending domains warmed, the first campaign live, the team walked through it. A$990, one time.",v:"At a 20–30% attach rate this returns A$200–300 of CAC per customer on day one."},
{n:"3",t:"First fallback — annual",d:"Declined the founding offer? A seven-day window for annual at two months free. After the window, the standard annual price stands.",v:"Day-one cash of 100%+ of a A$2,000 CAC on team workspaces."},
{n:"4",t:"Second fallback — quarterly",d:"Three months up front at a 5% courtesy. For genuine cash-flow objections, not price objections.",v:"Roughly two-thirds of a solo CAC covered inside 90 days."},
{n:"5",t:"The floor — monthly",d:"Full price, no discount. Monthly is the price of flexibility; discounting it teaches customers to wait.",v:"Payback in 8–12 months. Acceptable only as a minority of the mix."},
{n:"6",t:"No sale yet",d:"Downgrade to free Personal — they keep their data and their booking page. Nine nurture touches, the next webinar invitation, retargeting, then one 60-day win-back built on a fresh reason — a new feature, a new case study — rather than a deeper discount.",v:"The free tier is not lost revenue. It is the waiting room."}
];
const gtmUpsells=[
["Campaign licences","The workspace measures sends and sequences; the moment volume justifies it, the licence is the obvious next purchase."],
["Calling licences","The same motion: click-to-call activity surfaces exactly who needs queues, dispositions and reporting."],
["Record tiers","Growth in stored contacts is visible and predictable. Price steps are announced 30 days ahead, never sprung."],
["The agency master account","Option F from the pricing page: separated client workspaces, pooled licences, client approvers, from A$399."],
["Multi-year renewal","Founding customers renew on founding terms. Everyone else is offered two years at the then-current annual rate ahead of each renewal."],
["Managed campaign packs","A productised service tier — the campaign run for them — for customers with budget but no operator."]
];
const gtmBaseline=[
["Solo operator · Business","A$249","A$249 · 12%","A$2,490 · 125%","A$3,486 · 174%"],
["Five-person firm · Business + 2 Campaign + 1 Calling","A$446","A$446 · 22%","A$4,460 · 223%","A$6,244 · 312%"],
["Sales team · Business + 6 licences","A$800","A$800 · 40%","A$8,000 · 400%","A$11,200 · 560%"]
];
function fsCalc(){
  const g=id=>parseFloat(document.getElementById(id).value)||0;
  const cac=g("c_cac"),m=g("c_arpu"),gm=Math.min(Math.max(g("c_gm"),1),100)/100,ch=Math.min(Math.max(g("c_churn"),0),50)/100;
  let fF=Math.max(g("c_f"),0)/100,fA=Math.max(g("c_a"),0)/100;
  if(fF+fA>1){const s=fF+fA;fF/=s;fA/=s}
  const fM=1-fF-fA;
  const cash=new Array(61).fill(0);
  cash[0]=fF*14*m+fA*10*m+fM*m;
  for(let t=1;t<=60;t++){
    cash[t]+=fM*m*Math.pow(1-ch,t);
    if(t%12===0&&t<60)cash[t]+=fA*Math.pow(.75,t/12)*10*m;
    if(t%24===0&&t<60)cash[t]+=fF*Math.pow(.70,t/24)*14*m;
  }
  let cum=0,payback=-1,ltv=0;
  for(let t=0;t<=60;t++){const c=cash[t]*gm;ltv+=c;cum+=c;if(payback<0&&cum>=cac)payback=t}
  const day1=cash[0],pct=cac>0?Math.round(day1*100/cac):0;
  const set=(id,v)=>{document.getElementById(id).textContent=v};
  set("o_day1","A$"+Math.round(day1).toLocaleString());
  set("o_pct",pct+"%");
  set("o_pay",payback===0?"Day one":payback<0?"Over 60 mo":payback+" months");
  set("o_ltv","A$"+Math.round(ltv).toLocaleString());
  set("o_ratio",cac>0?(ltv/cac).toFixed(1)+" : 1":"—");
  set("o_verdict",(pct>=60&&payback>=0&&payback<=6)?"On target. Day-one cash covers at least 60% of CAC and full payback lands inside six months — advertising spend can compound.":"Off target. Move the mix toward the founding and annual offers, raise workspace value, or lower CAC until day-one cash reaches 60% and payback fits inside six months.");
}
const gtmTable=(cols,rows)=>`<div class="tablewrap"><table class="comparison"><thead><tr>${cols.map(c=>`<th>${c}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td>${i===0?"<strong>"+c+"</strong>":c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
function renderBuyers(){return`${header("Go-to-market · reviewed "+growthChecked,"Where the first customers are.","English first: Australia, the United Kingdom and Ireland now. The Netherlands and the Nordics through webinars. France after localisation. DACH through partners. Each market gets the motion its law and language allow.")}
<section class="section"><div class="wrap">
${gtmTable(["Market","Who buys first","Entry motion and outreach rules","Localisation and trust","Priority"],gtmMarkets.map(x=>[x.m,x.who,x.motion,x.local,x.pr]))}
<div class="note"><strong>Operating guidance, not legal advice.</strong> Electronic-marketing rules differ by country and change. Confirm each market's current rules with counsel before scaling outbound volume — the same evidence discipline this book applies to market-share claims.</div>
<div class="grid2">
<article class="card"><h3>What “solid EU status” requires</h3><p>EU data residency for workspace content. A signable DPA with standard contractual clauses. Self-serve export and deletion. A public sub-processor list. Support hours covering CET. When revenue justifies it, an Irish entity for EUR invoicing and VAT.</p></article>
<article class="card"><h3>The sequence</h3><p>Launch Australia, the UK and Ireland in English with one playbook. Open the Netherlands and the Nordics through webinars and the European-control page. Localise for France. Enter DACH last, through partners, in German. Depth in three markets beats presence in ten.</p></article>
</div></div></section>`}
function renderPersonas(){return`${header("Four buyers, four motions","Who is buying, trying, upgrading and staying.","Each buyer gets a first action to try, an upgrade path that follows their own usage, a reason to stay that is earned rather than enforced, and one offer.")}
<section class="section"><div class="wrap">
${gtmPersonas.map(p=>`<div class="option"><div><span class="tag">${p.t}</span><h3>${p.s}</h3></div><p><strong>Trigger.</strong> ${p.trigger}<br><strong>Tries first.</strong> ${p.tries}<br><strong>Pays more for.</strong> ${p.upgrades}<br><strong>Stays because.</strong> ${p.stays}<br><strong>Leaves when.</strong> ${p.leaves}</p><strong>${p.offer}</strong></div>`).join("")}
</div></section>`}
function renderFunnel(){return`${header("The acquisition machine","Email, card, first spend.","Six stages from stranger to paying workspace, each with a mechanism and a planning target to beat. The targets are assumptions to test in the first 90 days, not reported results.")}
<section class="section"><div class="wrap">
${gtmTable(["Stage","Mechanism","Planning target"],gtmFunnel.map(x=>[x.s,x.m,x.t]))}
<div class="grid2">
<article class="card"><h3>Channel order at A$1,000–2,000 CAC</h3><p>Partners first — referred customers arrive near free. Webinars second — one session feeds every market at once. Cold outbound third, in the UK and Ireland where the law allows scale. Paid search last, capped by the payback model, on competitor and category terms only.</p></article>
<article class="card"><h3>Why the card comes early</h3><p>A card at trial start filters for intent and doubles or triples trial-to-paid conversion. The honest justification is continuity: numbers, domains and the workspace survive day 15 without interruption. Volume falls; quality and payback rise.</p></article>
</div></div></section>`}
function renderOffers(){return`${header("One irresistible moment, then a ladder","The offer ladder.","One founding offer at the moment of activation, one bump at checkout, two fallbacks, a floor, and a waiting room. Every rejection has a next step; no step depends on pressure.")}
<section class="section"><div class="wrap">
${gtmLadder.map(o=>`<div class="option"><div><span class="tag">Step ${o.n}</span><h3>${o.t}</h3></div><p>${o.d}</p><strong>${o.v}</strong></div>`).join("")}
<div class="note"><strong>One-time must mean one-time.</strong> Under the UK's DMCC Act 2024, the Australian Consumer Law and the EU's unfair commercial practices rules, invented countdowns and false scarcity are unlawful. They are also bad economics: the founding offer converts at speed only while declining it is known to be real. Real deadline, enforced in billing. Real cap, retired publicly. Never re-offered to the same workspace. Standard prices never discounted for complaint — discounts exist only for prepay length, partner volume or case-study rights.</div>
<h2 class="pricing-heading">After the sale: the upgrade path</h2>
<div class="grid2">${gtmUpsells.map(u=>`<article class="card"><h3>${u[0]}</h3><p>${u[1]}</p></article>`).join("")}</div>
</div></section>`}
function renderPayback(){setTimeout(fsCalc,0);return`${header("CAC of A$1,000–2,000, recovered fast","The payback model.","The rule this plan runs on: day-one cash should cover at least 60% of acquisition cost, and full payback should land inside six months. Prepaid terms, not discounts, are what make advertising spend compound.")}
<section class="section"><div class="wrap">
<h2 class="pricing-heading">Day-one cash by customer and term · CAC A$2,000</h2>
${gtmTable(["Workspace","Monthly value","Monthly · % of CAC","Annual, 2 months free · % of CAC","Founding, 24 for 14 · % of CAC"],gtmBaseline)}
<h2 class="pricing-heading">Try the mix</h2>
<div class="calc">
<label>CAC (A$)<input id="c_cac" type="number" value="2000" oninput="fsCalc()"></label>
<label>Avg monthly workspace value (A$)<input id="c_arpu" type="number" value="330" oninput="fsCalc()"></label>
<label>% taking founding (24 for 14)<input id="c_f" type="number" value="15" oninput="fsCalc()"></label>
<label>% taking annual (2 free)<input id="c_a" type="number" value="30" oninput="fsCalc()"></label>
<label>Gross margin %<input id="c_gm" type="number" value="80" oninput="fsCalc()"></label>
<label>Monthly churn % (monthly plans)<input id="c_churn" type="number" value="3" oninput="fsCalc()"></label>
</div>
<div class="calc-out">
<div><span>Day-one cash / customer</span><strong id="o_day1"></strong></div>
<div><span>Share of CAC on day one</span><strong id="o_pct"></strong></div>
<div><span>Full payback</span><strong id="o_pay"></strong></div>
<div><span>5-year contribution</span><strong id="o_ltv"></strong></div>
<div><span>Return on CAC</span><strong id="o_ratio"></strong></div>
</div>
<p id="o_verdict" class="small"></p>
<div class="grid2">
<article class="card"><h3>How the model works</h3><p>Customers split across founding (fourteen months' value up front for a 24-month term), annual (ten months' value up front) and monthly. Monthly cohorts decay at the churn rate; annual cohorts renew at 75%; founding cohorts renew at 70% on founding terms. Contribution is cash times gross margin; payback is the month cumulative contribution passes CAC.</p></article>
<article class="card"><h3>What moves the number</h3><p>Mix beats price. Shifting fifteen points of customers from monthly to annual does more for payback than any discount, and costs nothing at the standard rate. The founding offer exists to move that mix in the first 100 sales while proof is thin.</p></article>
</div></div></section>`}
function renderRetention(){return`${header("Churn is decided in the first 90 days","Why they stay.","The honest version of “they cannot leave”: leaving costs real work they would rather not redo — while the data itself was always theirs to take.")}
<section class="section"><div class="wrap">
<div class="note"><strong>Exit friction is the wrong tool.</strong> The tempting answer is to make leaving mean losing the data. This book already rejects it: landing page 05 sells privacy, portability and restraint, and that promise is the sharpest edge this product has against the American incumbents. It is also the law in the chosen markets — GDPR and UK GDPR give customers a right to their data, and the DMCC Act and Australian Consumer Law now police cancellation traps directly. Hostage tactics convert quiet churn into chargebacks, one-star reviews and regulator complaints in precisely the countries this plan targets. Portability handled generously is a reason to stay.</div>
<div class="grid2">
<article class="card"><h3>Live assets</h3><p>Ported phone numbers, warmed sending domains, booking links in circulation, tracked links in old emails. Real switching costs, legitimately earned — rebuilding them elsewhere takes weeks of work and deliverability risk.</p></article>
<article class="card"><h3>The compounding record</h3><p>Every call outcome, reply and delivery note makes the workspace the only complete memory of the customer base. Exportable, yes. Reconstructable elsewhere, no.</p></article>
<article class="card"><h3>Breadth beats depth</h3><p>No seat tax means finance, delivery and even the client can be invited free. Workspaces with five or more weekly active members rarely leave; the invite prompt is a retention feature.</p></article>
<article class="card"><h3>Prepay is retention</h3><p>Annual and founding terms turn twelve monthly churn decisions into one renewal conversation on a known date, with a renewal offer prepared ahead of it.</p></article>
</div>
<h2 class="pricing-heading">The cancellation ladder</h2>
${gtmTable(["Moment","Response"],[
["They select cancel","One honest question — what changed? — with a visible skip. The answer routes the save. The cancel control is never hidden."],
["A pause in work or cash","Pause at A$29/month: workspace read-only, data kept, booking pages parked, resume in one click."],
["Price above current usage","Downgrade to free Personal. Data kept within limits, export always available. The relationship survives the invoice."],
["A wobble, not a decision","One save offer, once ever: two months at half price. Recorded so it is never repeated."],
["A real decision","A clean cancel, a full export without friction, and a 60-day reactivation window with everything intact. Record the reason; tag for the quarterly win-back."]])}
<h2 class="pricing-heading">Health signals and plays</h2>
${gtmTable(["Signal","Risk","Play"],[
["Weekly active members falling","Adoption decay","Usage digest to the owner plus a 20-minute working session."],
["No campaign sent in 21 days","Value lapse","The second-campaign play: a pre-built sequence for their niche, ready to review."],
["Card due to expire","Involuntary churn","Pre-expiry emails and a retry ladder. Failed payments are commonly 20–40% of all churn; recovering half is a normal result."],
["Owner is the only active user","Champion risk","Invite-three-colleagues prompt — free under no-seat-tax pricing."],
["A support ticket about export","Exit signal","Answer fast and completely. Portability handled well converts leavers into referrers, and it is the promise on landing page 05."]])}
</div></section>`}
const growthPages=[
{id:"buyers",title:"Countries and buyers",group:"Go-to-market"},
{id:"personas",title:"The four buyers",group:"Go-to-market"},
{id:"funnel",title:"Email, card, first spend",group:"Go-to-market"},
{id:"payback",title:"The payback model",group:"Go-to-market"},
{id:"offers",title:"The offer ladder",group:"Go-to-market"},
{id:"retention",title:"Why they stay",group:"Go-to-market"}
];
const growthRenderers={buyers:renderBuyers,personas:renderPersonas,funnel:renderFunnel,offers:renderOffers,payback:renderPayback,retention:renderRetention};