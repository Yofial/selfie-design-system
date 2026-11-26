# Research 02: Selfie compared with the "Menora Digital" design system

"Menora Digital" is an existing design-system artifact (created 2026-11-19). It covers Menora's public site, apps, flows and personal area. It has a full token set (light and dark), typography, radii, shadows, motion, voice and about 20 components.

Selfie is described as a **variant** of it for the agents portal. This file compares the two, so that we can decide how they relate (see [open questions](../open-questions.md) Q2).

## Colors

| Role | Selfie (Agents 2024) | Menora Digital | Note |
| --- | --- | --- | --- |
| Primary yellow | `#FFDB45` | `#ffc700` | Menora Digital lists `#ffdc65` as an "off-brand look-alike". Selfie's yellow is lighter and less saturated. |
| Text | `#3B3B4D` | `#343546` (graphite) | Very close |
| Link / purple | `#6342F0` | `#6436df` | Menora Digital lists `#684eed` as off-brand. Selfie's is close to that. |
| Accent violet | `#968CFF` | `#9766fd` (violet, icons) | Selfie's is softer |
| Light surfaces | `#FCFCFE`, `#F5F5FA`, `#EFEFF7` | `#ffffff`, `#f0f1f6` (ghost/canvas) | Selfie has more surface steps |
| Divider / lavender | `#D9D9EB` | `#dad9eb` | Practically the same |
| Status colors | Not documented | error `#c408a9`, success `#0f3b59`, warning `#faa21b` | Selfie must adopt or define them |

## Other foundations

| Foundation | Selfie | Menora Digital |
| --- | --- | --- |
| Typeface | Not documented (to verify; likely SimplerPro) | SimplerPro, 300/400/700/900 |
| Type scale | None | 13 named styles |
| Radii | None | 27 / 14 / 12 / 8 / pill |
| Spacing | None | 4 → 96 |
| Shadows | None | big / small / lift |
| Density | Visually dense (data tables, dashboards) | Comfortable (50px) and **Compact (40px), for internal systems** |
| Dark mode | None | Full |
| Motion, voice, a11y | None | Documented |

## Reading

- Selfie is the **same brand family with a product accent**: lighter yellow, a bluer purple, more surface steps. It is not a separate brand.
- Menora Digital's **Compact density** was written for "internal systems, data-heavy account screens". That is exactly Selfie.
- Menora Digital already solves most of Selfie's gaps (type, spacing, radius, motion, voice, accessibility).

## Options for the relationship

| Option | Description | Trade-off |
| --- | --- | --- |
| A. **Shared core + Selfie theme** | One token architecture (primitive → semantic → component). Menora Digital and Selfie are two *brand modes* of the same semantic tokens. Selfie keeps its own values where the studio designed them. | Best for reuse across Menora products; needs agreement on the semantic layer. More upfront structure. |
| B. Selfie adopts Menora Digital values | Selfie screens move to `#ffc700` / `#6436df` etc. | Simplest; visually changes the portal; needs the studio and brand owners to agree. |
| C. Independent Selfie system | Own tokens, no shared layer | Fastest start; duplicates work; drifts from the brand. |

Recommendation: **A**. Build Selfie's library with the same semantic token names as Menora Digital, put Selfie's values in a `selfie` mode, and fill the gaps from Menora Digital (in compact density) until the studio decides otherwise.
