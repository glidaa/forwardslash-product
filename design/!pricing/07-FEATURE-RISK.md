# Feature risk model — Free pages & uploads first

**Updated 24 Aug 2026.**  
Risk per feature: abuse · cost runaway · spam · legal · deliverability · support.  
**Michael worry (24 Aug):** people uploading **or** using too many free pages — Free pages must be **tightly capped**.

**Pointers:** [01-FORWARDSLASH-MODEL](./01-FORWARDSLASH-MODEL.md) · [03-BOOTSTRAP](./03-BOOTSTRAP-UNIT-ECONOMICS.md) · [05-FREEMIUM-JOURNEY](./05-FREEMIUM-JOURNEY.md) · unit $ → [06-FEATURE-UNIT-COSTS](./06-FEATURE-UNIT-COSTS.md)

---

## HARD RECOMMENDATIONS — Free pages (lock these)

| # | Cap / control | Spec |
|---|---|---|
| **1** | **Page count** | Free anonymous: **1 public page max** (not unlimited). Beyond 1 → Solo+. |
| **2** | **Publish / edit rate** | Soft rate: e.g. **≤10 publish/edit events per day** per anon fingerprint/session. Burst → require email. |
| **3** | **Views / bandwidth** | Soft cap **1–2k views/mo** (or ~1–2 GB) then **throttle** (slow/404 interstitial) or **require email**; sustained traffic → Solo+. |
| **4** | **No Free polish** | **No custom domain** on Free. **No file attachments** on Free pages. **Ads + watermark** on every Free public page. |
| **5** | **Share gates** | **Link-share OK** (viral). **Email-share / remove ads** = paid (Solo+). |
| **+** | List (adjacent) | **1 list ≤500 rows**; no file attachments; repeat/big CSV = paywall. |
| **+** | Upgrade triggers | Pages beyond 1 **or** high traffic **or** attachments → **Solo+**. |
| **+** | Optional hygiene | Anonymous page **TTL** or **hibernate** inactive after **X days** (e.g. 30–90) — reclaim hosting; revive on visit + email. |

These five (+ list) are the commercial answer to Free page/upload abuse. Implement before wide Free launch.

---

## 1. Risk table by feature

Severity: **H** / **M** / **L**. Free exposure = what an anonymous or Free-account user can burn.

| Feature | Risk type | Sev | Free exposure | Control | Kill switch |
|---|---|---|---|---|---|
| **pages** | abuse · cost runaway · legal (phishing/malware pages) · support | **H** | Unlimited craft without caps = CDN + phishing magnet | **1 page** · rate edit/publish · **1–2k views/mo** soft · ads/watermark · no custom domain · no attachments · optional TTL/hibernate | Unpublish / hibernate domain-wide Free pages; force email; block anon publish |
| **files** | abuse · cost runaway · legal (CSAM/malware) · support | **H** | Attachments = storage + egress + liability | **Paywall Free** — 0 file attachments; Solo+ GB caps; AV scan; type allowlist | Disable uploads org-wide; quarantine bucket |
| **list-building** | abuse · cost runaway · spam feedstock | **H** | Big CSV / repeat import = free enrichment target | **1 list ≤500 rows** · no attachments · no repeat big CSV | Block import API; require Solo for 2nd list |
| **search** | abuse (scraping) · cost runaway · legal (ToS of sources) | **H** | Anon name search without rate = bot farm | Soft rate anon · captcha · require email after N · paid higher | Disable anon search; IP ban |
| **email / campaigns / sequences** | spam · deliverability · legal (CAN-SPAM/ACMA) · cost | **H** | Ads-on Free send still hits reputation | Clean send = **paid**; Free = blocked or tiny ads-on after email; suppression; domain auth on paid | Freeze sending; drop relay; revoke Free send |
| **sms** | spam · legal · cost runaway | **H** | Free SMS = instant loss | **No Free SMS**; paid metered; opt-in proof | Carrier block / disable SMS product flag |
| **dialler** | abuse · cost · legal (robocall) · support | **H** | Free trial minutes abuse | No Free dialler **or** card-hold micro-trial; paid metered; consent flags | Cut trunk; disable numbers |
| **power-dialler** | same + spam velocity | **H** | N/A on Free (Growth+) | Growth+ only; velocity caps; recording retention policy | Disable power mode |
| **enrichment** | cost runaway · legal (data broker ToS) | **M** | Demo lookups scraped | 0–5 Free demo · cache · paid pools | Kill vendor keys / zero credits |
| **ai** | cost runaway · abuse (prompt spam) · legal | **M** | Anon AI = token drain | Tiny demo · rate · Solo+ pools · overage | Model kill / zero credits |
| **inbox** | deliverability · legal · support | **M** | Free mailbox sync rare | Paid sync; OAuth only | Disconnect mailboxes |
| **crm / pipeline / targets** | abuse (dump) · support | **L–M** | 500-record Free cap | Record caps · export limits on Free | Read-only / purge inactive |
| **meetings** | abuse (spam booking) · pages bandwidth | **M** | Booking on Free page | Inherits **1-page** + view caps; captcha on book | Disable booking widget |
| **campaign-approval** | legal / process miss | **L** | — | Paid team feature | — |
| **todo / overview / delivery / reporting** | support load | **L** | Light fair use | Fair use; no heavy export on Free | — |
| **integrations** | abuse (webhook flood) · support | **M** | — on Free | Paid connectors; rate webhooks | Disable connector |
| **admin** | support · security | **M** | — | Paid seats; Ent SSO | Lock workspace |

---

## 2. Priority Free surfaces (deep dive)

### 2.1 Pages — **priority #1**

| Threat | What happens | Control (ship) |
|---|---|---|
| Page farm | Hundreds of Free landing pages for spam/SEO | **1 public page** hard cap |
| Asset host | Free CDN for images/PDFs | **No attachments** on Free pages |
| Traffic spike | One viral / bot page burns bandwidth | **1–2k views/mo** soft → throttle / email / Solo |
| Phishing / brand abuse | Fake login pages on our domain | Watermark + ads (“Built with Forwardslash”) · report URL · rapid unpublish |
| Custom domain laundering | Abuse looks “legit” | **No custom domain on Free** |
| Zombie pages | Forever hosting cost | Optional **TTL / hibernate** after inactivity |

**Upgrade copy (wall):** “Remove ads · custom domain · more pages · attachments — Solo from $9/mo annual.”

### 2.2 Uploads / files — **priority #1 (tied)**

| Threat | Control |
|---|---|
| Free file host | **Paywall** — no attachments Free |
| Malware / illegal content | AV + type allowlist + size caps on Solo+; ToS + report |
| Repeat CSV as “file” dodge | List import ≠ file library; **1×500 rows** only; 2nd/big → Solo |

### 2.3 List upload (free endowment — keep, but fenced)

| Allowed Free | Not allowed |
|---|---|
| 1 list · ≤500 rows · tidy in-product · **link-share** | File attachments · repeat import · >500 rows · enrichment bulk |

### 2.4 Name search scraping

| Control | Spec |
|---|---|
| Soft rate | 20–50 queries/day anon (ASSUMPTION — tune) |
| Escalate | Captcha → require email → Solo for volume |
| Kill | Disable anon search globally |

### 2.5 Email send with ads (Free after email add)

| Risk | Control |
|---|---|
| Still spam / reputation burn | Tiny daily cap **or** block Free send entirely until Solo; ads do **not** make spam OK |
| Deliverability | Prefer block Free relay; paid = own mailbox + auth |
| Legal | Unsubscribe + physical address requirements on any send |

**Product rule ([05](./05-FREEMIUM-JOURNEY.md)):** pay for **clean** email-send (ads off). Ads-on is a conversion lever, not a free ESP.

### 2.6 Phone / dialler free trial

| Risk | Control |
|---|---|
| Trial minute farming | Card on file **or** no Free voice; short credited trial on Solo+ only |
| Robocall / complaint | Consent, velocity caps, number reputation monitoring |
| Kill | Trunk cut + number reclaim |

---

## 3. Kill-switch registry (ops)

| Switch | Scope | Who can flip | When |
|---|---|---|---|
| `free.pages.publish` | Global / IP / workspace | Eng on-call | Phishing wave / BW spike |
| `free.pages.serve` | Hibernate all Free public pages | Eng | Cost emergency |
| `free.uploads` | Already off; confirm flag | Eng | — |
| `free.list.import` | Block CSV | Eng | Scrape/enrich abuse |
| `free.search` | Anon search off | Eng | Bot wave |
| `free.email.send` | Ads-on Free send off | Eng + GTM | Deliverability incident |
| `voice.trunk` / `sms.send` | Paid too if needed | Eng | Carrier / legal |
| `ai.credits` / `enrichment.credits` | Zero pools | Eng | Cost runaway |

Document flip runbook in ops wiki; link from admin.

---

## 4. Support & legal load (Free)

| Trigger | Severity | Response |
|---|---|---|
| “Why ads on my page?” | L | Upgrade CTA — expected |
| Phishing report on Free page | **H** | Unpublish ≤1h · kill switch if pattern |
| Copyright / illegal upload | **H** | Shouldn’t exist on Free (no uploads); Solo+ takedown process |
| Spam complaint from Free/ads email | **H** | Freeze send · review |
| “My Free page is slow” after view cap | L | Throttle working as designed → Solo |

**Bootstrap note:** founder support time is real COGS ([06](./06-FEATURE-UNIT-COSTS.md)). Automate caps before humans.

---

## 5. Alignment checklist

| Locked context | How risk model respects it |
|---|---|
| Freemium: no signup for tasks / page / name search | Keep craft free; **cap** page count & search rate — don’t force signup on first click |
| List + link-share free | 1×500 · link OK · email-share paid |
| Pay for clean email + file uploads | Explicit paywalls |
| Free pages tightly capped (Michael 24 Aug) | **1 page** + views + no attachments + ads + no custom domain |
| $1–2k CAC only Essentials+/Ent | Free must stay near-zero COGS so organic isn’t a liability |

---

## 6. One-line policy

**Free = 1 watermarked page, 1 small list, link-share, rate-limited search, no files, no clean email, no dialler/SMS. Everything that costs us bandwidth, storage, or reputation is Solo+ or metered paid.**
