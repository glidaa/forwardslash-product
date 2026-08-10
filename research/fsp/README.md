# forwardslash.ch — Product book

The complete product book: product overview, all landing pages, the whole-market pricing
research (28 competitors), the forwardslash.ch pricing recommendation — and a new
**Go-to-market** section covering countries, buyers, the funnel, the offer ladder,
the payback model and retention.

Static site. No build step. Open `index.html` or serve the folder.

## Structure

- `index.html`, `style.css`, `app.js` — the book shell, design system and router
- `data.js` — competitor dataset, pricing options, sources
- `growth.js` — **new**: the six Go-to-market pages (data + renderers + payback calculator)
- `landing/` — the ten landing pages, the pricing comparison and shared brand styles
- `blog/` — the editorial library (nine articles)
- `scripts/` — the script studio

## The new Go-to-market pages

| Hash | Page |
|---|---|
| `#buyers` | Countries and buyers — AU / UK / IE / NL & Nordics / FR / DACH, who buys, lawful outreach per market, priority order |
| `#personas` | The four buyers — solo operator, five-person firm, in-company champion, agencies as a channel |
| `#funnel` | Email, card, first spend — six stages with planning targets |
| `#offers` | The offer ladder — the founding offer, order bump, fallbacks, upsells, and the honest-urgency rules |
| `#payback` | The payback model — baseline table plus an interactive CAC-payback calculator |
| `#retention` | Why they stay — earned lock-in, the cancellation ladder, health signals |

Changes to existing files were minimal: `app.js` gained two one-line merges
(`...growthPages`, `...growthRenderers`), `index.html` gained one script tag and one
nav link, `style.css` gained the calculator styles at the end of the file.

## Publish

The GitHub repository exists but is empty. From this folder:

```bash
git remote add origin https://github.com/glidaa/forwardslash-product.git
git add -A
git commit -m "Product book + Go-to-market section"
git push -u origin main
```

To update the live Vercel site, either connect the Vercel project to this GitHub
repository (Vercel → Project → Settings → Git) so every push deploys, or drag this
folder onto vercel.com/new.
