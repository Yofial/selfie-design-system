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
| [Checkbox / Radio](#checkbox--radio) | `Checkbox` (11:65) | Type × Checked × State = 16 | Label, Show label |
| [Menu item](#dropdown) | `Menu item` (12:53) | Type × State = 8 | Label, Show icon, Icon |
| [Dropdown menu](#dropdown) | `Dropdown menu` (12:55) | — | Show search, Search placeholder, Show footer, Footer label; items exposed |
| [Tab](#tabs) | `Tab` (13:71) | Size × State = 8 | Label, Show badge |
| [Tab bar](#tabs) | `Tab bar` (13:72) | — | 6 Tabs, exposed |
| [Segmented tab](#tabs) | `Segmented tab` (13:124) | Size × State = 6 | Label, Show badge |
| [Segmented control](#tabs) | `Segmented control` (13:125) | — | 3 Segmented tabs, exposed |
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

## Checkbox / Radio

| Property | Values |
| --- | --- |
| Type | `Checkbox` (independent yes/no, consent) · `Radio` (one of 2–5 visible options; more than 5 → Dropdown) |
| Checked | `false` · `true`. The mark is a filled inner square or dot (studio style, not a tick) |
| State | `Default` · `Hover` (`border/strong`) · `Focus` (2px `border/focus`) · `Disabled` |
| Label / Show label | The label is clickable too. The control sits at the start of the label (right in RTL) |

Box 16px, `radius/xs` (radio `radius/pill`), `border/field` edge, mark `icon/default`.

## Dropdown

A **select** is a `Field` with `icon/chevron-down` that opens a **Dropdown menu** below it.

- **Menu item**: `Type=Text` for single choice and actions (Selected = `text/link` on `bg/selected`); `Type=Checkbox` for multi-select (the checkbox is at the start). States: Default, Hover (`bg/subtle`), Selected, Disabled. Optional leading icon.
- **Dropdown menu**: white, `radius/md`, `shadow/sm`, padding `space/8`. It has an optional **search row** (use it for lists over ~7 items), the items (all of one type), and an optional **footer action** (e.g. "התנתקות"). Its width matches the trigger. Show at most ~6 items, then scroll.

## Tabs

There are two kinds. Don't mix them on the same level.

| | Tab (underline) | Segmented tab |
| --- | --- | --- |
| Use for | Switching **views of a page** (customer image, dashboard) | Switching a **filter or sub-view inside a card/widget** |
| Container | `Tab bar`: full width, tabs share the width; scrolls on mobile | `Segmented control`: white pill group, `shadow/sm`, 2–4 options |
| Selected | Bold `text/link` + 3px `bg/accent` bar | `bg/inverse` (graphite) fill, bold `text/inverse` |
| Other states | Default (1px `border/default` line), Hover (`bg/subtle`), Disabled = "בקרוב" badge | Default (`bg/surface`), Hover (`bg/subtle`) |
| Sizes | Desktop 16 · Mobile 14 | md 16 · sm 14 |
| Badge | Optional Count badge (e.g. number of new items) | Optional Count badge (white on the selected tab) |

RTL: the first tab is on the right and is selected by default.
