# Forwardslash — Design System Starter (Prism SoT)

**Source:** fs-prism from live `forwardslash-product` `style.css` (23 Aug 2026).  
**Canonical home later:** `design/!system` in `glidaa/forwardslash-product` (write currently 403).

## Color tokens

| Token | Value | Use |
|-------|-------|-----|
| `--black` | `#080808` | Pure black bands, invert fills |
| `--ink` | `#151515` | Primary text |
| `--white` | `#fff` | Invert type, pure surfaces |
| `--paper` | `#f6f6f3` | Page / soft bands |
| `--line` | `#deded9` | Hairlines, frames |
| `--muted` | `#686864` | Secondary / captions |
| Accent | `#0a0a0a` near-black | **No chroma** |

Grey = hierarchy only, never decoration. One invert block (black fill / white type) per scroll beat max.

## Type

- **Display:** Space Grotesk 500/600 (h1–h3, brand, prices). Tracking ≈ −0.035em. h1 clamp ~43–76.
- **UI / body:** Inter 400/500/600. Body 14px / 1.55.
- Eyebrow: 9–10px, tracking ~0.14–0.17em, uppercase.
- One idea per headline; short ledes; no ornament fonts. Numbers in Space Grotesk.

## Structure & rhythm

- Max ~1280 · content wrap ~1100 · rail 232 · sticky top 64 · section pad ~65
- Cards radius **9** · buttons radius **6** · hairline 1px borders
- 12-col mental model; prefer 2/3 splits; 8px align; generous air
- Soft paper bands + pure black script bands
- Hover: border → `#111`, never glow / rainbow

## Do / Don’t

**Do:** craft, quiet confidence, Alpine precision (sharp edges, measured spacing).  
**Don’t:** gradients-as-brand, soft pastels, blob illustrations, glassmorphism, fake “AI purple”, warm cream kits.

## 3D (on-brand)

Treat 3D as a **machined object under hard light**, not cinema.

- Palette: greyscale only — matte black / brushed aluminium / chalk white. Speculars OK; colored lights no.
- Form: simple solids (block, rail, slash `/` as volume). Survey marker / piton / precise hardware — **not** mountains as scenery.
- Motion: slow orbit or single axis; ease-out; no bounce. Prefer still beauty + one controlled move.
- Integration: white or paper field + thin `#deded9` frame; never full-bleed neon void.
- Tech: low-poly / clear silhouette first; bake AO; avoid noisy PBR glitter.

## Marketing continuity

Landing / email / video end-cards share ink–paper–black, Space Grotesk + Inter, and the same CTA grammar (*Start free* · *Talk to us*). Email flattens to ink/paper + one button.
