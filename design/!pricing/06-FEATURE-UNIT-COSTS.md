# Feature unit costs → package economics

**Updated 24 Aug 2026.**  
Maps **metered COGS** to Free → Enterprise allowances. Aligns feature surfaces to `design/!reference/features.md`.

**Pointers:** [01-FORWARDSLASH-MODEL](./01-FORWARDSLASH-MODEL.md) · [03-BOOTSTRAP-UNIT-ECONOMICS](./03-BOOTSTRAP-UNIT-ECONOMICS.md) · [05-FREEMIUM-JOURNEY](./05-FREEMIUM-JOURNEY.md) · Free burn map [06-FREE-BURN-AND-COGS](./06-FREE-BURN-AND-COGS.md) · risk [07-FEATURE-RISK](./07-FEATURE-RISK.md)

**ASSUMPTIONS:** All $ figures are **directional 2026 vendor ballparks** (ESP, Twilio-class voice/SMS, object storage, CDN, LLM APIs, enrichment). **Not** from Michael’s invoices. Label every number as model input, not actuals. Revisit quarterly when vendors lock.

**Stickers (locked):** Free $0 · Solo $19/$9 · Essentials $49/$35 · Growth $109/$99 · Scale $149/$139 · Enterprise $5–20k/yr.  
**Bootstrap:** $1–2k CAC; paid CAC only for annual Essentials/Growth teams or Enterprise.

---

## 1. Unit COGS (variable / metered)

| Meter | Unit | Unit cost (USD) | Assumptions |
|---|---|---:|---|
| **Email — own mailbox** (Gmail/MS sync send) | 1 send | **~$0.00005–0.0002** | Infra + queue only; customer’s ESP/provider carries delivery. Deliverability tooling amortised ~$0.0001/send at volume. |
| **Email — product relay** (our ESP) | 1 send | **~$0.0003–0.001** | SES/Postmark/Mailgun class + bounce/complaint handling. Ads-on Free trial sends still burn this. |
| **Deliverability tooling** | 1 send (allocated) | **~$0.00005–0.0002** | Warmup, reputation, suppression lists — pool then allocate. |
| **SMS** | 1 msg | **~$0.01–0.05** | Regional (AU/US/EU). AU often toward high end. Passthrough + thin margin. |
| **Voice outbound** | 1 min | **~$0.01–0.03** | Twilio/Telnyx-class. Recording storage extra (~$0.0025/min-mo retained). |
| **Phone number** | 1 number / mo | **~$1** | Local; premium DIDs higher (Close-like $19 add-on if we sell them). |
| **AI tokens** | 1k tokens out (blended) | **~$0.002–0.02** | Mix of cheap + frontier models. Pool per seat then overage. |
| **Enrichment lookup** | 1 credit | **~$0.02–0.15** | Email/phone/company append vendors. Cache hits ≈ $0. |
| **Object storage** | 1 GB-mo | **~$0.02–0.03** | S3/R2 class. Egress often dominates. |
| **File upload egress** | 1 GB egress | **~$0.05–0.12** | CDN/origin. Abuse vector on Free → **paywall**. |
| **Public pages — bandwidth** | 1 GB | **~$0.01–0.08** | CDN. Heavy Free pages = runaway risk (see 07). |
| **Public pages — origin compute** | 1k page views | **~$0.001–0.01** | SSR/edge + form posts. |
| **List rows stored** | 1k rows / mo | **~$0.001–0.01** | DB + index. Cheap until search/enrichment piles on. |
| **Search query** (name / smart view) | 1 query | **~$0.0001–0.002** | Elasticsearch/OpenSearch. Scraping abuse → rate limit. |
| **Support load proxy** | 1 ticket | **~$5–25** | Founder/CS time. Free heavy-abusers destroy margin. |

### Non-metered surfaces (fixed / near-zero variable)

| Feature | Cost posture |
|---|---|
| overview, inbox, crm, pipeline, targets, todo, reporting, delivery, campaign-approval, admin | Mostly **fixed** product eng + shared infra. COGS ≈ $0 per action at Free scale. Risk = support + abuse of adjacent meters. |
| campaigns / sequences (UI only) | Near-zero until **sends** fire. |
| integrations | Webhook/API compute small; OAuth storage trivial. |
| meetings (booking on a page) | Tied to **pages** hosting + calendar sync; meter via pages + email. |

---

## 2. Included allowances by package

**Legend:** `—` = not included / paywall · `fair` = soft fair-use · numbers = hard include before overage or block.

| Feature | Unit | Unit cost | Free include | Solo | Essentials | Growth | Scale | Notes |
|---|---|---:|---|---|---|---|---|---|
| **pages** (public) | page | ~$0.01–0.10/mo idle + BW | **1** page · ads/watermark · **≤1–2k views/mo** soft · no custom domain · **no attachments** | 5 pages · ads off · 10k views | 15 · 50k views | 50 · 200k | 100+ / custom | Free = endowment only. Traffic/attachments → Solo+. See 07. |
| **pages bandwidth** | GB | $0.01–0.08 | Soft throttle after view cap | 5 GB/mo | 20 GB | 50 GB | 100 GB+ | Kill switch: hibernate / require email. |
| **files / uploads** | GB stored | $0.02–0.03 + egress | **0** attachments · 1 list CSV only (below) | 2 GB | 10 GB | 50 GB | 200 GB / custom | **Paywall** Free. Michael worry: uploads. |
| **list-building** | list / rows | ~$0.001–0.01/1k rows | **1 list ≤500 rows** · no file attach · no repeat big CSV | 5 lists · 10k rows | Unlimited lists · fair rows | + bulk import | + API import | Repeat/big CSV = Solo+. |
| **search** (name) | query / day | $0.0001–0.002 | Soft rate (e.g. 20–50/day anon) | 200/day | 1k/day | 5k/day | custom | Scraping → captcha + require email. |
| **email send** (own mailbox) | send | ~$0.0001 | — / trial w/ **ads** after email add | 1k/mo ads off | 5k/user | 20k/user bulk | high / custom | Clean send = paid. Relay dearer. |
| **email send** (product relay) | send | ~$0.0003–0.001 | Tiny trial w/ ads **or** blocked | 500/mo | 2k/user | 10k/user | custom | Prefer customer mailbox to cut COGS. |
| **sms** | msg | $0.01–0.05 | — | Metered | Metered | Metered | Metered + pool | Passthrough. |
| **dialler** voice | min | $0.01–0.03 | — / short trial? | Metered | Metered | Metered | Metered | Number ~$1/mo. |
| **power-dialler** | min + seats | same + product | — | — | — | Included capability | Included | Growth+ (Close parity). |
| **ai** | credit / 1k tok | $0.002–0.02 | Tiny anon demo | 500 credits | 1k | 1.5k | 2k+ | Pool then overage (Close-like). |
| **enrichment** | lookup | $0.02–0.15 | 0–5 demo | 50/mo | 200/mo | 500/mo | custom | Cache aggressively. |
| **crm / pipeline / targets** | records | ~$0 | 500 records | 10k leads | Unlimited fair | Unlimited | Unlimited | Close Solo = 10k. |
| **inbox** | mailbox sync | ~$0 | — or 1 soft | 1–3 accounts | 3 | 10 | 10 | |
| **campaigns / sequences** | active | ~$0 + sends | — | Light / templates | Campaigns UI | Sequences + bulk | + predictive path | COGS rides email/SMS/voice. |
| **campaign-approval** | desk | ~$0 | — | — | Soft | ✓ | ✓ | Process, not meter. |
| **todo / delivery / overview** | — | ~$0 | Unlimited light | ✓ | ✓ | ✓ | ✓ | Fair use. |
| **meetings** | booking page | via pages | Uses Free **1 page** slot | Separate booking OK | Team booking | ✓ | ✓ | |
| **reporting** | seats | ~$0 | Basic | ✓ | ✓ | ✓ | Advanced | |
| **integrations** | connectors | ~$0 | — | Core | Core | More | SSO path @ Ent | |
| **admin** | seats / SSO | support $ | — | Self | Team | Roles light | Roles + Ent SSO | Support load rises w/ Free abuse. |

**Enterprise ($5–20k/yr):** custom multiples of Scale allowances; quote floors per [04-ENTERPRISE-BAND](./04-ENTERPRISE-BAND.md). Usage still passthrough (SMS/voice/AI overage).

---

## 3. Contribution margin vignettes

### A) Typical **5-person Essentials annual** (bootstrap ICP)

| | |
|---|---|
| Revenue day-one | $35 × 5 × 12 = **$2,100** prepaid |
| Assumed software GM | ~80% on seats ≈ **$1,680** contribution before usage |
| Typical monthly usage COGS (ASSUMPTION) | Email own-mailbox 8k sends ≈ $1–8 · Voice 500 min ≈ $5–15 · SMS 200 ≈ $2–10 · AI/enrichment ≈ $10–40 · Storage 5 GB ≈ $0.15 · Pages negligible |
| Monthly variable | **~$20–70** (passthrough + thin margin on usage) |
| vs $1.5–2k CAC | Day-one cash **covers CAC** ([03](./03-BOOTSTRAP-UNIT-ECONOMICS.md)). Seat contribution stays healthy if Free abuse is capped. |

**Verdict:** Primary paid-CAC target. Feature COGS do **not** break the model if Free pages/uploads stay tight.

### B) **Free heavy-abuser** (Michael worry — pages + uploads)

| Abuse pattern | Monthly COGS (ASSUMPTION) | Without caps |
|---|---:|---|
| 50 public pages, 100k views, fat assets | Bandwidth 20–50 GB + origin | **$2–15+** / user |
| Repeat CSV + file attachments 20 GB | Storage + egress | **$1–5+** |
| Name-search scrape 50k queries | Search + possible enrichment | **$5–50** |
| Ads-on email blast via relay 10k | ESP | **$3–10** |
| Support tickets from spam/phishing reports | 2–5 tickets | **$10–100** founder time |

**With hard Free caps (07):** 1 page · ≤1–2k views · 1×500-row list · **0** file attachments · rate-limited search · ads/watermark → variable COGS stays **≪ $0.10–0.50 / free user / mo**. Acceptable for PLG.

**Verdict:** Uncapped Free pages/uploads can erase bootstrap margin on organic acquisition. Caps are **commercial**, not nice-to-have.

---

## 4. Cost → package design rules

1. **Passthrough** SMS, voice minutes, numbers, AI/enrichment overage on all paid plans — don’t bury in seat price.
2. **Prefer customer mailbox** over product-relay email to keep unit COGS in the $0.0001 class.
3. **Free earns endowment, not infrastructure gifts** — pages + lists capped; files paywalled ([05](./05-FREEMIUM-JOURNEY.md)).
4. **Never spend $1–2k CAC** to acquire Free/Solo monthly; Free COGS must stay near-zero so organic is free *to us*.
5. Support is a real COGS line — Free abusers get automated caps first, human support last.

---

## 5. Feature → meter map (quick)

| Surface | Primary meter |
|---|---|
| overview, todo, delivery, campaign-approval, reporting, admin | Fixed / support |
| inbox, crm, pipeline, targets | Records + sync |
| campaigns, sequences | Email / SMS / voice sends |
| pages, meetings | Hosting + bandwidth + (optional) email |
| dialler, power-dialler | Minutes + numbers |
| sms | Messages |
| search, list-building, enrichment | Queries / rows / lookups |
| ai | Tokens / credits |
| files | GB stored + egress |
| integrations | Negligible + Ent SSO support |

Next: risk & kill switches → [07-FEATURE-RISK.md](./07-FEATURE-RISK.md).
