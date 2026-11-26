# Research 01: Audit of the "Agents 2024" Figma file

- Source file: `Agents 2024` (studio file), key `IRm41Dz9ZBJrreevPjOHft`
- Working copy: `Agents 2024 (Copy)`, key `SbfJlYYYcUeeVcuFYdSMMp`. At the time of the audit it had the same page list as the source.
- Audited: 2026-11-26, from the node tree (structure, names, sizes) of the **Style Guide** page (`2795:37719`).

## Access blocker

Every seat on the account we used is a **View** seat: the personal starter team, and guest seats in two organizations. View seats get only a few Figma MCP calls a month, and that quota ran out partway through the audit. The consequences:

- Variables, text styles, effect styles and screenshots could **not** be read yet. This audit uses the node tree only.
- **Writing** to Figma (creating variables, components, a library) needs a **Full (Design) seat** with edit rights on the target file. A **Dev seat** at least lifts the read quota.

See [open questions](../open-questions.md) Q1.

## Pages in the file

| Page | Role |
| --- | --- |
| Intro, login | Cover, login screens |
| דוחות ואישורים דשבורד | Reports and certificates dashboard |
| *NEW* Customer Image 1920 / 1440 / Mobile | The current "customer image" (360° customer view) screens |
| PDF | PDF documents |
| Old, Customer Image 1440/1920/Mobile | Previous versions |
| Dashboard agent | Agent dashboard |
| **Style Guide** | Component and foundation library (the base for this system) |
| Customer Page / Dashboard – אפיון | Spec (wireframe) pages |

Breakpoints in use are **1920, 1440 and Mobile (375)**.

## Style Guide inventory

504 main components (symbols) in 23 sections.

| Section | Contents (variants) | Kind |
| --- | --- | --- |
| colors | 8 swatches (see below) | Foundation |
| Logo | Menora full logo (black, dark purple, white), symbol (black, dark purple, yellow), `selfie` wordmark | Foundation |
| Icons | ~35 64px illustrative icons (car, document, coins, umbrella…), `Documents` (polisa, close…) | Foundation |
| Illustrations | Empty-state, error and warning pop-up illustrations (desktop 300px, mobile 170px), 1080px desktop hero illustrations | Foundation |
| Buttons | `Button` (Hover, Secondary, Disabled, with icon); `Button main` (lg 50 / md 40 / sm 28); `Secondary` (lg/md/sm); `Button link` (lg/md/sm/with icon); `tag` (md, sm, with number) | Primitive |
| Fields | `Field` with 15 variants (Default, Search, search open, type, Full, no icon, Error, View, Boolean, Check Box, Full+comment, date, 3 unnamed); checkbox and radio; dropdown menu item; Dropdown; Dropdown multi-select; Dropdown multi-search; password requirement | Primitive |
| Label | `Label` (mobile, desktop, skeleton, with icon, with badge); `Label2`; `legend` | Primitive |
| Badges, badges *NEW* | Product-line badges (ביטוח אלמנטרי, פנסיה וגמל); status badges (קיימת הלוואה, שיעבוד, קיים חוב, עיקול) × lg/md/sm | Primitive |
| Tabs | Tab button (on/off, desktop and mobile), tabs desktop (on/off/soon/skeleton), tab bars (customer image, dashboard, mobile), count badge (md/sm) | Primitive |
| Tooltips | `tooltip`; quick-action, certificate and notification pop-overs; notification item (new/viewed) | Primitive / pattern |
| Pagination | page item, pagination bar, page dots | Primitive |
| Filter | Filter bar (desktop, filled, mobile, mobile filled) | Pattern |
| Search results | Result rows (number, policy number, car license, claim number), profile result | Pattern |
| Cards | `Card`, mobile content card | Primitive |
| Modal | Desktop success modals, error and warning modals (desktop/mobile) | Pattern |
| Bottom sheet | Actions, issuing certificates, notifications, select agent; mobile modal | Pattern |
| Background overlay | Scrim | Primitive |
| Header & footer | Header 1440 (default, search active), header 1920, mobile header, section header, welcome header, profile info (incl. skeleton), footer, mobile footer, bottom navigation | Layout |
| Side bar navigation | Menu item (10 states incl. 3 levels), sidebar (open, closed, dashboard), mobile menu | Layout |
| Chart | Line, bars, bars+lines, half pie, pie, vertical line, amount axis; desktop/mobile/skeleton/closed | Data viz |
| Table | Policy rows (pension, health, multiple, cancelled, expanded), Selfie 360 table, domain tabs (Quote, Preservation, Claims, Sales, Control, empty, skeleton), header cells, body cells, archive, sum | Domain pattern |
| Recent actions | Dashboard widgets: recent actions, updates, links, digital processes, important info (incl. empty, skeleton, mobile) | Domain pattern |

### Colors as documented

| Swatch | Label (Hebrew) | Meaning |
| --- | --- | --- |
| `#FFDB45` | ראשי | Primary (yellow) |
| `#3B3B4D` | טקסט | Text |
| `#6342F0` | לינק | Link (purple) |
| `#FCFCFE` | פוקוס על כארד | Card focus / highlight surface |
| `#F5F5FA` | רקע אייקונים | Icon background |
| `#968CFF` | — | Accent violet (no label) |
| `#EFEFF7` | רקע אילוסטרציה | Illustration background |
| `#D9D9EB` | רקע אילוסטרציה | Illustration background |

## What is good

- The library is broad. It covers the real product surface: navigation, data tables, charts, dashboard widgets, bottom sheets.
- Desktop and mobile variants exist for most components.
- **Skeleton** (loading) and **empty** states are designed for many components. That is unusually mature.
- Product-line and status badges already encode the domain vocabulary.

## Gaps (what is missing for a governed system)

| Gap | Why it matters for guardrails |
| --- | --- |
| **No typography scale** on the style guide | PMs and devs cannot choose "the right" text size; each screen drifts. |
| **No spacing, radius, elevation or grid** | Layouts can't be checked against rules; there are no tokens for code. |
| **No semantic status colors** (error, success, warning, info) on the color sheet, though error modals and status badges use them | Colors get picked by eye; code gets hex values. |
| Colors **are** variables and styles, but **remote, unstructured and duplicated** (see [research 03](03-style-guide-values.md)) | There are no semantic roles and no scopes, so a PM can still pick any color. |
| **78 variants are unnamed** (`Property 1=Variant3`…), and properties are all `Property 1` | PMs can't tell which variant to use; Code Connect mapping is impossible. |
| States are mixed into one property (`Hover`, `Disabled`, `with icon`, `md`) | Size, state and content should be separate properties so they can't be combined wrongly. |
| Typos in names (`Seconed`, `Defualt`, `passowed`, `erorr`, `Dekstop`, `linsk`) | Low trust; search in the assets panel fails. |
| **Primitives and domain patterns live together** (Button next to "Selfie 360 table") | A layered library (foundations → primitives → patterns → templates) is easier to guard and to reuse in other Menora products. |
| No **focus**, accessibility or contrast guidance | Israeli accessibility regulation (IS 5568, WCAG 2.0 AA) applies to the portal. |
| No **content / voice** guidance (button verbs, error wording, number and date formats) | PMs write copy; this is where screens drift most. |
| No **dark mode** | Possibly not needed. To decide. |
| No **page templates** with layout rules | Templates are the strongest guardrail for PMs. |
| No usage docs per component (when to use / not use) | Needed for PMs and for AI agents. |

## Next research steps (after access is restored)

1. Read local variables, text styles and effect styles (`get_variable_defs`, Plugin API).
2. Screenshot each section to extract type sizes, radii, shadows and spacing from the designs themselves.
3. Sample the *NEW* Customer Image and dashboard screens: how far do production screens follow the style guide? Which detached instances and hard-coded values are there?
