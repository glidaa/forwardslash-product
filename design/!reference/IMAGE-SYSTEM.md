# Product-book image system

Prism owns shot packs and the greyscale plate language for Features. Catalyst owns the catalog (~117 caps). Helvetia owns group ledes. Adman owns ads. Do not invent catalog copy or stickers here.

## Tokens

| Role | Value |
|------|-------|
| Black | `#080808` |
| Ink | `#151515` |
| Paper | `#f6f6f3` |
| Line | `#deded9` |
| Muted | `#686864` |

Type: **Space Grotesk** (display) + **Inter** (body). **No chroma** — ink, paper, line only.

## Six frames per surface

Every `ref` slug gets the same six-frame pack:

| # | Frame | File |
|---|-------|------|
| 01 | Hero empty | `01-hero-empty.jpg` |
| 02 | Work primary | `02-work-primary.jpg` |
| 03 | Detail | `03-detail.jpg` |
| 04 | Job done | `04-job-done.jpg` |
| 05 | Comp A | `05-comp-a.jpg` |
| 06 | Comp B | `06-comp-b.jpg` |

## Plate

- Paper ground (`#f6f6f3`)
- 1px line (`#deded9`)
- Radius **9**
- Greyscale comps only (no colour product chrome)
- **Mobbin URLs required** on every comp frame (in `manifest.json` and the surface `SHOT-PACK.md`)

## Features rail

Large stack in the Features browser. Order on the rail:

1. Helvetia group lede (job + who)
2. Catalyst money / plan take (Free / Solo+ / …)
3. Prism shot pack for the row’s `ref` slug

Do not put stickers in voice. Do not invent Helvetia or Catalyst copy.

## Folder contract

```
design/shots/<slug>/
  01-hero-empty.jpg
  02-work-primary.jpg
  03-detail.jpg
  04-job-done.jpg
  05-comp-a.jpg
  06-comp-b.jpg
  manifest.json
```

`manifest.json` lists frame ids, local paths, and Mobbin URLs for comps. Slug = catalog `ref` (see [`SHOT-MAP-TO-CATALOG.md`](SHOT-MAP-TO-CATALOG.md)).

## Priority

1. **inbox**
2. **campaigns**
3. **dialler**
4. **crm**
5. **pages**
6. rest (per [`features.md`](features.md) gathering order)

Shot-pack specs live under `design/!reference/<slug>/SHOT-PACK.md` while frames land in `design/shots/<slug>/`.
