# Shot map → Catalyst catalog

Maps Catalyst **feature groups** to Prism primary `ref` slugs (and secondary packs). Catalog source of truth:

[`design/!pricing/08-FEATURE-CATALOG.md`](../!pricing/08-FEATURE-CATALOG.md)

Capabilities keep Catalyst job lines + Free/Solo+/… takes. Prism only supplies six-frame packs keyed by `ref`. Group ledes (when landed) are Helvetia — see `design/!marketing/09-feature-group-ledes.md`.

| Catalyst group | Primary `ref` | Also map / pull from |
|----------------|---------------|----------------------|
| Contacts | `crm` | — |
| Leads | `list-building` | `enrichment`, `targets`, `pipeline`, `search` |
| Calling | `dialler` | `power-dialler`, `ai` |
| AI | `ai` | — |
| Pages | `pages` | `meetings`, `files` |
| Connectors | `integrations` | `inbox`, `meetings`, `admin` |
| Calendar | `meetings` | — |
| Email | `inbox` | `sequences`, `campaigns`, `campaign-approval` |
| Chat | `sms` | `inbox` |
| Research | `search` | `enrichment`, `list-building`, `targets` |
| Tasks | `todo` | — |
| Pricing | *(none)* | Catalyst Pricing page — no Prism shot pack |
| Project | `delivery` | — |

## Notes

- Features browser rows carry a `ref` field; load `design/shots/<ref>/` when present.
- Priority packs: inbox → campaigns → dialler → crm → pages → rest ([`IMAGE-SYSTEM.md`](IMAGE-SYSTEM.md)).
- Pricing group stays on the Catalyst Pricing page; do not invent a `pricing` shot folder.
