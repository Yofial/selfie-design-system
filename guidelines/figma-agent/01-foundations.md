# Foundations (variables)

Every visual value comes from a variable in the Selfie DS library. Pickers are scoped, so text colors appear only for text, fills only for fills, and so on. Primitives are hidden; don't look for them.

## Color roles (collection "Color", mode "Selfie")
| Need | Variable |
| --- | --- |
| Normal text | `color/text/primary` |
| Labels, meta, helper text | `color/text/secondary` |
| Placeholder | `color/text/placeholder` |
| Link, selected tab, interactive text | `color/text/link` (hover `color/text/link-hover`) |
| Text on yellow primary | `color/text/on-primary` |
| Text on dark/purple/nav | `color/text/inverse` |
| Error / success / warning text | `color/text/error` / `color/text/success` / `color/text/warning` |
| Page background | `color/bg/canvas` |
| Cards, fields, header, modals | `color/bg/surface` |
| Insets, table heads, hover rows | `color/bg/subtle` |
| Selected row/item | `color/bg/selected` |
| Primary button | `color/bg/primary` |
| Notices | `color/bg/error` / `color/bg/success` / `color/bg/warning` |
| Dividers between rows | `color/border/divider` |
| Container border | `color/border/default` |
| Focus | `color/border/focus` |
| Sidebar | `color/nav/*` |
| Chart series | `color/chart/1` … `color/chart/6`, in this order; `color/chart/track` for the empty part |

Rules:
- Text sits only on `bg/surface`, `bg/canvas`, `bg/subtle`, `bg/selected` or a status background with its matching status text. White text sits only on `nav/bg`, `bg/inverse` or `bg/accent`.
- Chart colors are **only** for charts. Never use them for buttons, links or text.
- Yellow (`bg/primary`) is never text on white.

## Typography
- Family **SimplerPro** only (Light, Regular, Bold). Assistant is a temporary stand-in until the font is shared; never use any other family.
- Sizes: use `font/size/*` with its line height: 10/18, 12/20, **14/24 (body)**, 16/24, 18/26, 20/28, 24/32, 32/40, 48/56.
- Page title 24 Bold. Card/section title 18 Bold. Body 14. Inputs and table cells 16. Meta 12. KPI numbers 32 Bold.
- Numbers, dates, IDs and phone numbers read left to right inside Hebrew text.

## Spacing (`space/*`): 0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64
- Gaps inside components: 4–8. Between fields: 16. Card padding: 24. Between cards/sections: 24–32. Page gutters: 24 (desktop), 16 (mobile).

## Radius (`radius/*`)
`xs` 4 (checkbox, small items) · `sm` 6 · `md` 8 (menus, tooltips, tables, filter bar) · `lg` 24 (cards, modals, sheets) · `pill` (buttons, tags, badges, search field)

## Effects
`shadow/sm` (fields, filter bar, header, small cards) · `shadow/lg` (cards, widgets, modals, sheets) · `shadow/primary` (primary button only)
