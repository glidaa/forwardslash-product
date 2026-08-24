# 06 — Free burn, COGS risk, Close package map

**fs-prism starter for Catalyst · 24 Aug 2026**  
Source commercial catalogue (full meters): email-manager `design/product/FEATURES-USAGE-AND-COSTS.md`  
(Copied beside this as `FEATURES-USAGE-AND-COSTS.md` when available; GitHub:
https://github.com/glidaa/email-manager/blob/main/design/product/FEATURES-USAGE-AND-COSTS.md)

Close seat stickers stay in `00-CLOSE-BASE.md` / `01-FORWARDSLASH-MODEL.md`.  
Free journey: `05-FREEMIUM-JOURNEY.md`.

This file = **what Free actually burns** + **risk** + which **Close-parity package** owns the paid unlock.

---

**Merged with Catalyst (24 Aug):** detailed unit COGS + package allowances → [06-FEATURE-UNIT-COSTS.md](./06-FEATURE-UNIT-COSTS.md); abuse controls + Free page hard caps → [07-FEATURE-RISK.md](./07-FEATURE-RISK.md). Keep this file as Free burn + risk scores 1–5 map.

## 1. Metering principles (from catalogue — keep)

1. Do not meter ordinary reading, notes, tasks, exports, or invited collaborators.  
2. Meter supplier cost, abuse, exceptional load, specialist value.  
3. Show units before use; warn 50/80/100%; budgets; no surprise bills.  
4. Queue/pause at limit — never silent drop.  
5. BYO mailbox/API/DB → customer pays provider.  
6. “Unlimited” = fair use + anti-abuse.

---

## 2. Free (Michael 24 Aug) — burn profile

| Surface (feature slug) | Free / anonymous | What burns $ | Abuse / risk | Paid unlock (Close ladder) |
|---|---|---|---|---|
| `todo` tasks | Unlimited light | Near $0 compute | Scripted spam tasks | — (keep free) |
| `pages` | 1 public page | CDN/Blob tiny | Phishing pages | Solo+ remove ads; Pages pack later |
| `search` name search | Soft rate limit | Query compute | Scraping | Soft → Solo rate |
| `list-building` / CRM import | **1 list ≤500 rows**, link share | Storage tiny | List bombing | **Files / big CSV → Solo+** |
| `crm` records | Soft (e.g. 500 on old Free) | DB | Fake accounts | Solo 10k / Essentials unlimited |
| `meetings` booking | 1 calendar/page | Reminder email cost | Spam invites | Team bookings Essentials+ |
| Link share | Yes | $0 | Leaked lists | — |
| `inbox` / email send | Add email → **ads on** or block clean send | ESP / reputation | Spam from Free | **Solo ads off**; **Growth** bulk/sequences (`operator_outbound`) |
| `files` attachments | **Paywall** | GB-month + egress | Storage abuse | Solo+ / storage packs |
| `dialler` / phone bot | Taste only or BYO | **Twilio minutes + numbers** | Toll fraud | **Dialler licence** + minutes PAYG (Growth/Scale for Power/Predictive) |
| `sms` | History only or tiny | Segments + number | Spam | Messaging add-on |
| `sequences` / campaigns | 1 small taste | Sends + enrolments | Outbound abuse | Growth (`operator_outbound`) |
| `ai` / phone bot LLM | Tiny credits or BYOK | Model $ | Cost runaway | AI pack / PAYG |
| `enrichment` | Tiny sample / BYOK | Vendor credits | Credit drain | Intelligence pack |
| `reporting` | Basic | Query | — | Scale / explorer later |
| `admin` | Owner only | — | — | Enterprise SSO |

**Rule of thumb Free COGS/user/month (organic, capped):** aim **&lt; $0.50–2** variable if dial/AI stay gated.  
If Free can burn Twilio + AI without card → **risk = high**; require spend cap or card for voice/AI.

---

## 3. External unit costs (catalogue list prices — not our retail)

| Driver | Reference | Notes |
|---|---|---|
| Voice AU local | ~US$0.0252/min | Twilio AU |
| Voice AU mobile | ~US$0.075/min | |
| Number | ~US$3/mo local | + admin margin |
| Recording | ~US$0.0025/min | storage extra |
| Transcription | ~US$0.024/min | |
| Email ESP | SendGrid tiers (50k @ ~$20 …) | Own-mailbox Free = customer SMTP cost ≈ $0 to us |
| Enrichment | Apollo credits (email 1 / phone 8) | BYOK preferred on Free |
| Close calling passthrough | ~$0.02/min typical | Parity narrative |

Retail needs FX buffer 15–25%, failed calls, fraud, support — not cost+20%.

---

## 4. Close-parity package ↔ cost risk

| Package | Seat sticker | What they buy (value) | High-COGS features included? | Meter still on top |
|---|---:|---|---|---|
| **Free** | $0 | Craft + endowment | No dialler Pro, no bulk, no files | Soft caps only |
| **Solo** $19/$9 | Clean send, uploads, 10k leads | Low — own mailbox + light click-to-call | Minutes, AI, numbers |
| **Essentials** $49/$35 | Team CRM | Still no bulk/Power Dialer | Same meters |
| **Growth** $109/$99 | Sequences + Power Dialer + bulk | **High** voice + send volume | Minutes, enrolments, AI pool |
| **Scale** $149/$139 | Predictive + retention | **Highest** voice/storage | Minutes, recording retention |
| **Enterprise** $5–20k/yr | Procurement / SSO / volume | Negotiated pools | Custom |

**Bootstrap:** paid CAC only if day-one cash clears $1–2k → Essentials/Growth **annual teams** or Enterprise — not Free/Solo monthly burners.

---

## 5. Risk scores (1–5) for Free → pay design

| Risk | Score | Why | Mitigation |
|---|---:|---|---|
| Email reputation from Free sends | 5 | Burns domain + ESP | Ads + low daily cap or block managed send until Solo |
| Twilio toll fraud on Free dial | 5 | Real $ | No Free dial without card + hard $ cap; or click-to-call BYO only |
| AI credit drain | 4 | Model $ | Tiny Free pool + kill switch; BYOK |
| Storage / file upload | 4 | GB abuse | Paywall files (Michael) |
| List scrape via search | 3 | Compute + ToS | Rate limit anonymous search |
| Phishing via Free pages | 3 | Brand/legal | Report abuse, 1 page, ads watermark |
| Tasks / page / link share | 1 | Near free | Keep open — acquisition |

---

## 6. What Catalyst should fill next

1. Exact Free caps table (numbers): list rows, page views, search/day, reminder emails/day.  
2. Retail margin on `voice_minutes` / `sms_segments` / `ai_credits`.  
3. Which Free first doors (list+call, booking page, event email, phone bot, investor tracker) map to which meters.  
4. Sync Helvetia hero: not “ads, no uploads” only — use journey Free definition.

## Feature research index (design)

23 surfaces: `design/!reference/features.md` on shared box (not on GitHub yet).
