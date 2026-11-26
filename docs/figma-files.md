# Figma files

| File | Key | Plan / owner | Role |
| --- | --- | --- | --- |
| **Selfie DS** (library) | `Cw9hFppHvySISBjlf6mPQ1` | Alex's team (Pro), Full seat | The governed library (ADR-003). [Open](https://www.figma.com/design/Cw9hFppHvySISBjlf6mPQ1) |
| Agents 2024 | `IRm41Dz9ZBJrreevPjOHft` | Studio org | Original studio file; Style Guide page `2795:37719` |
| **Agents 2024 – Style Guide reference** | `HkFARygJ81iAzHzgmociTj` | Alex's team (Pro), Full seat | The Style Guide page pasted in, readable through the MCP. See [research 03](research/03-style-guide-values.md). [Open](https://www.figma.com/design/HkFARygJ81iAzHzgmociTj) |
| Agents 2024 (Copy) | `SbfJlYYYcUeeVcuFYdSMMp` | Codeoasis org (View seat only) | Old copy (also `OQchmE4dnHADfK3JA8Z897`), not readable through the MCP |

## Library pages

Cover · Read me – guardrails · Foundations · Primitives · Layout · Patterns · Templates · Changelog · Archive

## Note on ownership

ADR-009 says Menora owns the library. The library was created in **Alex's team**, because that is where the architect has a Full seat. If that team is not Menora's, the file has to move to Menora's organization before it is published to PMs. To be confirmed.

## Library state (2026-11-26)

- Variables: Primitives 27 (hidden), Color 43 (mode "Selfie", all aliased to primitives), Spacing 11, Radius 5, Typography 21. All have scopes; all except raw sizes have `var(--sds-…)` code syntax.
- Effect styles: `shadow/sm`, `shadow/lg`, `shadow/primary`.
- Text styles: **not yet**, blocked on the SimplerPro font.
- Components (🧩 Primitives): Button (24 variants), Link button (12), Count badge (2), Tag (2), Field (6), Checkbox/Radio (16), Menu item (8), Dropdown menu, Tab (8), Tab bar, Segmented tab (6), Segmented control, Badge (15), Product badge (2), Tooltip (2), Pagination (+ Page item, Page arrow, Page dots), Card (2), Modal (2), Close button, Bottom sheet, Overlay. Utilities: Slot. Search field (4). Layout page: Header (2), User menu, Footer (2), Sidebar (Open/Collapsed) + Sidebar item (6) + Sidebar icon item (2), Mobile menu, Bottom navigation + Bottom nav item (2). Foundations: Logo (Brand/White), Selfie360 wordmark, nav icons, Nav swoosh. Icon button (8). Patterns page: Filter bar (3), Search results + item, Data table + header cell + cell (5 types) + row (3 states), Empty state, Skeleton (3), Legend item (6), Bar (30), Progress bar (10), Donut chart, KPI, Chart card, Recent actions + Activity item, Data field, Policy row (2). Icons (🎨 Foundations): 6. All bound to variables; temporary font Assistant. See [components](components/README.md).
