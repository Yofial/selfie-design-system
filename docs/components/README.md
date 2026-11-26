# Components

Each component exists in the Figma library *Selfie DS* (page 🧩 Primitives), and later in `@selfie-ds/react`. Both expose **the same properties**, so a Figma frame and the code read the same way.

General rules:
- Use only library components. Don't detach instances or recolor them. If a component is missing, it's a request to the studio.
- All colors, spacing and radii are bound to tokens (see `packages/tokens`). There are no raw values inside components.
- Layout is RTL. Icons sit at the *end* of the text (on the left in Hebrew).
- **Temporary font:** the Figma components use *Assistant* until SimplerPro is available to the Figma file. A script swaps it; sizes and line heights are already the SimplerPro scale.

| Component | Figma set | Variants | Properties |
| --- | --- | --- | --- |
| [Button](#button) | `Button` (8:99) | Variant × Size × State = 24 | Label, Show icon, Icon |
| [Link button](#link-button) | `Link button` (8:161) | Size × State = 12 | Label, Show icon, Icon |
| [Count badge](#count-badge) | `Count badge` (8:167) | Size = 2 | Count |
| [Tag](#tag) | `Tag` (8:177) | Size = 2 | Label, Show count (nested Count badge is exposed) |
| [Field](#field) | `Field` (10:45) | State = 6 | Label, Value, Helper, Show label, Show helper, Show icon, Icon |
| Icons | `icon/*` on 🎨 Foundations (7:2) | — | chevron-down, chevron-left, close, search, calendar, external-link |

## Button

The main way to act.

| Property | Values | Notes |
| --- | --- | --- |
| Variant | `Primary` · `Secondary` | Primary is yellow, **one per view**: the main step forward. Secondary is outlined: every other action. |
| Size | `lg` 50 · `md` 40 · `sm` 28 | lg: page CTAs, modals. md: the default in cards and tables. sm: dense rows. |
| State | `Default` · `Hover` · `Focus` · `Disabled` | Focus = 2px `border/focus` ring (added for accessibility; the studio file had none). |
| Label | text | A verb that says what happens: "שמירה", "להמשך". Never "לחצו כאן". |
| Show icon / Icon | boolean / any `icon/*` | 16px, at the end of the label. |

Tokens: `bg/primary`, `bg/primary-hover`, `text/on-primary`, `shadow/primary`; `border/strong`, `bg/subtle` (secondary hover); `bg/disabled-strong` + `text/on-disabled`; `radius/pill`; padding `space/24` (lg) or `space/16`; gap `space/8`.

## Link button

A text action or navigation inside content. Purple means interactive.

| Property | Values |
| --- | --- |
| Size | `lg` 18 · `md` 14 · `sm` 12 (text size) |
| State | `Default` · `Hover` (darker, underlined) · `Focus` · `Disabled` |
| Show icon / Icon | `icon/external-link` for links that open a new tab |

Don't use it as the main CTA or for destructive actions.

## Count badge

A number on a tag or tab. Yellow, `radius/md`, bold. Use "99+" above two digits. It is not a status indicator (that is Badge, coming later).

## Tag

A category or product-line label (e.g. "ביטוח מקיף") on cards and lists. White, `shadow/sm`, pill-shaped. `Show count` reveals a Count badge. Not clickable by default; a selected/filter state can be added later if needed.

## Field

A single-line input in Selfie's **underline** style: label above, value, an optional icon at the end, helper text below.

| State | What changes |
| --- | --- |
| `Default` | Placeholder in `text/placeholder`, 1px `border/field` line |
| `Filled` | Value in `text/primary` |
| `Focus` | 2px `border/focus` line, label in `text/link` |
| `Error` | `border/error` line, error icon color; **the helper is always shown** in `text/error`, with a sentence that says how to fix it |
| `Disabled` | Dashed line, everything in `text/disabled` |
| `Read-only` | No line, no icon: displays data |

Icon by use: `chevron-down` for selects, `calendar` for dates, `search` for search, `close` to clear. Inputs use 16px text (it stops iOS zooming in). The field fills its column's width.

Known gap (flagged in ADR-010): `border/field` `#BBBBC3` has 1.9:1 contrast on white, below the WCAG 3:1 required for control edges. The studio should decide on a darker line.
