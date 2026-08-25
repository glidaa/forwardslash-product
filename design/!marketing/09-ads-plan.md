# Ads operating plan — v0.1

**Author:** fs-adman · **Copy SoT:** `05-ads.md` v0.2 · **Free SoT:** `design/!pricing/05-FREEMIUM-JOURNEY.md`
**ICP:** founder-operator, ~5-person firm, AU / UK / IE
**Date:** 25 Aug 2026

This is how the ads *run*. Headlines, RSA, LinkedIn intros, 15s cutdown stay in `05-ads.md`. Do not invent a second voice.

Hang: **Start free. Do one job.** CTAs: **Start free** · **Talk to us**.
Paid CAC only for annual Essentials / Growth / Enterprise. Do not buy traffic just to farm Free.

---

## 0. Ship gates (before any spend)

Fail any of these = no money.

1. Destination is this product book (or a landing in this repo), Swiss ink/paper, visible H1. **Not** forwardslash.ch empty-state. **Not** email-manager-gamma until the white-on-white H1 is dead.
2. Click language already exists on the page (ad nouns = hero nouns).
3. Negatives loaded (cheap CRM, cheaper than Close, jobs, enterprise IT theatre). See `05-ads.md` §5.
4. UTM on every URL. One campaign = one promise = one landing.

---

## 1. How the system works

```
Search / LinkedIn / 15s
        │
        ▼
  Matching landing in this book
        │
        ├── Start free  → one door (~10 min) → email seq A (activate)
        └── Talk to us  → calendar / reply   → email seq E (seat)
```

Two paid buckets only:

| Bucket | Job | CTA | Who pays |
|--------|-----|-----|----------|
| **Proof** | Show the door. Light budget. Product-led. | Start free | Not CAC-justified. Do not scale. |
| **Seat** | Annual team or enterprise. | Talk to us | This is the paid-CAC bucket. |

Proof may still say Start free. Seat may still *show* Start free as the product-led next step (L1/L2). High-intent search and LinkedIn L3 use Talk to us.

---

## 2. Campaigns (what we actually run)

Four live campaigns. Same scent, different promise. Do not stack offers.

### G1 — Own mailbox (Proof)

- **Promise:** Outbound from your mailbox. Not a send farm.
- **Channel:** Google RSA. Pin **H1** (Outbound from your mailbox) or **H2** (Start free. Do one job.).
- **Keywords:** own mailbox outbound, send from own mailbox, email and calling one system. Phrase / exact. No cheap-CRM conquest.
- **Landing:** [Upload a list](../../landing/02-upload-a-list.html) · sitelink also [Free doors](../../pages/doors.html)
- **Sitelinks:** Start free · Load a list · Booking page · Talk to us
- **Email after click:** seq A (post-visit) then B if they load a list
- **Kill if:** bounce to app shell, H1 invisible, or CPC hunting Free signups with no list loaded

### G2 — Booking page (Proof)

- **Promise:** A calendar page in about ten minutes.
- **Channel:** Google RSA. Pin **H13** (Booking page in ten minutes) or **H5** (Booked meetings. One system.).
- **Keywords:** booking page for meetings, calendar booking page, meeting booking link
- **Landing:** [One action](../../landing/03-start-with-one-action.html) or [Free doors](../../pages/doors.html) door 2
- **Email:** seq C (booking door)
- **Kill if:** the page asks for signup before a shareable link exists

### G3 — LinkedIn image (Proof + Seat)

- **Audience:** founder / owner / MD / principal / partner · 1–10 (L1, L2) · 11–50 (L3 only) · AU UK IE
- **Creative:** Prism machined `/` on paper. Greyscale. No Alps, no people stock.
- **L1** thesis → product-book Overview or [Brand scent](../../pages/scent.html) · button Start free · seq A
- **L2** hang + doors → [Free doors](../../pages/doors.html) · button Start free · seq A then B
- **L3** commercial honesty → [Pricing](../../pages/pricing.html) · button Talk to us · seq E
- **Do not** run L3 at company size 1–10. Do not run L1 at 200+.

### G4 — Talk to us (Seat)

- **Promise:** Seats, sequences, a five-person firm that is already buying.
- **Channel:** Google exact/phrase on high intent + LinkedIn L3. Pin **H12** (Swiss care, not CRM theatre) or **H11** (Built for a five-person firm).
- **Landing:** [Pricing](../../pages/pricing.html) with Talk to us as the primary button. Not Free doors.
- **Email:** seq E. Human reply inside one working day (Sydney).
- **This is the only campaign we scale on CAC.**

### Later (not this week)

- 15s cutdown (YouTube / Meta / LinkedIn) from `03-video-outline.md`. Same nouns. Same dest as G1.
- Event signup, phone bot, investors/clients sitelinks: only when those URLs exist as first-class landings.
- Retargeting: only people who hit a book page and did **not** load a list. Cap frequency. Same scent. No countdown.

---

## 3. Destinations (locked)

| Campaign | URL | Why |
|----------|-----|-----|
| G1 | `/landing/02-upload-a-list.html` | Matches “load a list” |
| G2 | `/landing/03-start-with-one-action.html` or `/pages/doors.html` | Booking / one job |
| G3 L1 | `/pages/home.html` or `/pages/scent.html` | Thesis |
| G3 L2 | `/pages/doors.html` | Six doors, hang line |
| G3 L3 / G4 | `/pages/pricing.html` | Close-parity, Talk to us |
| Never | `forwardslash.ch` signed-out shell | Blue/pink stock. Brand break. |
| Never until H1 fix | `email-manager-gamma.vercel.app` | Invisible H1. |

UTM pattern: `?utm_source=google|linkedin&utm_medium=cpc|paid-social&utm_campaign=g1-mailbox|g2-booking|g3-li|g4-seat&utm_content=h1|l1|…`

---

## 4. Geo, bid, hygiene

- Geo only: Australia · United Kingdom · Ireland.
- Language: English.
- Schedule: weekday business hours in the market (don’t burn nights on founders who aren’t searching).
- Proof budget: small, fixed, reviewed weekly. If a Proof campaign cannot show a loaded list or a live booking page as the conversion, pause it.
- Seat budget: the one that may grow. Conversion = Talk to us submitted, or a booked call.
- Negatives: see `05-ads.md` §2. Reload if Google auto-adds cheap-CRM close-variants.

---

## 5. Conversion events (honest)

Do **not** optimise Google to “signup” if signup is not the membership.

| Event | Counts as | Campaign |
|-------|-----------|----------|
| List loaded + first send or dial | Proof conversion | G1 |
| Booking page published (shareable link) | Proof conversion | G2 |
| Talk to us / booked call | Seat conversion | G3 L3, G4 |
| Page view of Free doors | Observation only | never bid to this |

---

## 6. Weekly loop

1. Open the four campaigns. Kill anything sending to the app shell.
2. Read search terms. Add negatives. Do not add cheap-CRM queries as positives.
3. Check landing H1 is still visible (gamma / .ch).
4. Proof: did anyone load a list or publish a booking page?
5. Seat: did anyone talk to us?
6. Email: seq A/B/C send, unsub, replies. Rewrite only if a letter fights the hang line.

Copy freeze: ads v0.2. Plan freeze: this file. Helvetia owns scent rewrites. Catalyst owns stickers. Prism owns the frame.
