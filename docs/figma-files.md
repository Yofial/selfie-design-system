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
- Components (🧩 Primitives): Button (24 variants), Link button (12), Count badge (2), Tag (2), Field (6). Icons (🎨 Foundations): 6. All bound to variables; temporary font Assistant. See [components](components/README.md).
