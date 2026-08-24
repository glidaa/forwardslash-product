# Features — design reference index
Master list of product surfaces to collect inspiration for.
Commercial source: [`design/product/FEATURES-USAGE-AND-COSTS.md`](../product/FEATURES-USAGE-AND-COSTS.md).
App nav source: `src/components/shell/navConfig.ts`.

Each feature has a folder under this directory with `README.md` and `refs.md`.

| Slug | Feature | Routes / surface | Folder |
|---|---|---|---|
| `overview` | Overview / Today | /overview | [`overview/`](overview/) |
| `inbox` | Shared inbox | /inbox | [`inbox/`](inbox/) |
| `crm` | Companies & contacts | /companies, /contacts | [`crm/`](crm/) |
| `campaigns` | Campaigns | /campaigns | [`campaigns/`](campaigns/) |
| `campaign-approval` | Campaign approval desk | campaign detail / approval UI | [`campaign-approval/`](campaign-approval/) |
| `sequences` | Sequences | /sequences | [`sequences/`](sequences/) |
| `pipeline` | Pipeline | /opportunities | [`pipeline/`](pipeline/) |
| `targets` | Targets | /targets | [`targets/`](targets/) |
| `todo` | To-do / work | /todo | [`todo/`](todo/) |
| `pages` | Pages | /pages | [`pages/`](pages/) |
| `meetings` | Meetings & booking | meetings / booking pages | [`meetings/`](meetings/) |
| `dialler` | Voice / dialler | dialler | [`dialler/`](dialler/) |
| `power-dialler` | Power dialler | power dialler | [`power-dialler/`](power-dialler/) |
| `sms` | SMS | SMS | [`sms/`](sms/) |
| `reporting` | Reports | /reports | [`reporting/`](reporting/) |
| `search` | Search & smart views | ⌘K / smart views | [`search/`](search/) |
| `enrichment` | Enrichment | Intelligence | [`enrichment/`](enrichment/) |
| `list-building` | List building | lists | [`list-building/`](list-building/) |
| `ai` | AI assistant | AI / MCP | [`ai/`](ai/) |
| `delivery` | Projects / delivery | projects in To-do | [`delivery/`](delivery/) |
| `integrations` | Integrations | settings / integrations | [`integrations/`](integrations/) |
| `files` | Files | files | [`files/`](files/) |
| `admin` | Admin & settings | settings | [`admin/`](admin/) |

## Gathering order (priority)

1. inbox, campaigns, campaign-approval, sequences
2. dialler, power-dialler, crm, pipeline
3. pages, meetings, reporting, todo
4. enrichment, list-building, ai, search, targets
5. delivery, integrations, files, admin, overview, sms
