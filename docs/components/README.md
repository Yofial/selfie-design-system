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
| [Badge](#badge) | `Badge` (16:150) | Tone × Size = 15 | Label, Show icon, Icon |
| [Product badge](#badge) | `Product badge` (16:156) | Line = 2 | Label |
| [Tooltip](#tooltip) | `Tooltip` (16:166) | Placement = 2 | Label |
| [Pagination](#pagination) | `Pagination` (18:125) + `Page item` (18:111), `Page arrow` (18:124), `Page dots` (18:140) | — | pages and arrows exposed |
| [Card](#card) | `Card` (18:175) | Variant = 2 | Title, Show header, Show action, Content, Show footer |
| [Modal](#modal) | `Modal` (19:164) + `Close button` (19:123) | Size = 2 | Title, Body, Show illustration, Illustration, Show secondary, Show close |
| [Bottom sheet](#bottom-sheet) | `Bottom sheet` (20:139) + `Overlay` (20:137) | — | Title, Show header, Content, Show footer |
| [Search field](#search-field) | `Search field` (24:172) | State = 4 | Value |
| [Header](#header) | `Header` on 🧭 Layout (24:304) + `User menu` (24:240) | Size = 2 | User menu and Search exposed |
| [Footer](#footer) | `Footer` (25:104) | Size = 2 | — (fixed content) |
| [Sidebar](#sidebar) | `Sidebar` (26:317) + `Sidebar item` (26:108), `Sidebar icon item` (26:127) | State = Open / Collapsed | items exposed |
| [Mobile menu](#sidebar) | `Mobile menu` (26:318) | — | — |
| [Bottom navigation](#bottom-navigation) | `Bottom navigation` (27:267) + `Bottom nav item` (27:266) | — | Label, Icon |
| Logo / Selfie360 | `Logo` (23:41, Brand / White), `Selfie360 wordmark` (23:42) on 🎨 Foundations | Color = 2 | — |
| Slot | `Slot` on 🎨 Foundations › Utilities (15:13) | — | placeholder to swap for content |
| Icons | `icon/*` on 🎨 Foundations (7:2, 23:48) | — | chevron-down, chevron-left (points left = RTL forward), chevron-right, close, search, calendar, external-link, bell, actions, menu; sidebar 21px: nav/digital, nav/systems, nav/school, nav/forms, nav/support |

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

## Badge

The **status** of a record. Every tone has a word that says the status; color is never the only cue.

| Tone | Use | Background / text |
| --- | --- | --- |
| Warning | Pending, needs attention | `bg/warning` / `text/warning` |
| Error | Rejected, failed, debt | `bg/error` / `text/error` |
| Info | In process | `bg/selected` / `text/link` |
| Success | Approved, active | `bg/success` / `text/success` |
| Neutral | Closed, draft | `bg/muted` / `text/primary` |

Sizes: lg 14 · md 12 · sm 10. There is an optional icon (bell by default). The text uses the darker, accessible text shades (ADR-010). The studio's original colored text failed 4.5:1 on these backgrounds.

**Product badge**: the product line of a policy. Elementary is yellow (`bg/primary-hover`); Pension & Gemel is purple (`bg/accent` + `text/inverse`). The studio's 10px text is raised to 12px.

Not yet migrated: the studio's decorative ribbon badges ("badges *NEW*": קיימת הלוואה, שיעבוד, קיים חוב, עיקול). They are gradient shapes, so they're treated as a domain pattern for a later round.

## Tooltip

Dark (`bg/inverse`), `radius/xs`, 12px white text, with an arrow pointing at the trigger (`Top` points down, `Bottom` points up). One short line. It appears on hover and on keyboard focus. Never put actions or essential information in it. Quick-action and notification popovers are patterns (later).

## Pagination

Circles of 32px. The selected page is yellow (`bg/primary`). Others are white with `border/default`. In RTL, page 1 and **Previous** are on the right (pointing right), and **Next** is on the left (pointing left). Arrows are disabled on the first and last page. Show up to 5 numbers. `Page dots` is for mobile carousels only.

## Card

A container for one widget or block. **Elevated** (`shadow/lg`) sits on the canvas background; **Outlined** (`border/default`) sits inside other surfaces or in dense grids. Padding `space/24`, `radius/lg`. The header has a title (18 bold) and an optional link action. For the content, swap the **Slot** for a component. The footer is optional. Never put a card inside a card.

## Modal

A blocking message or short decision, shown on the **Overlay**. It has an illustration (from the studio set, swapped into the slot), a centered title (24/20) and body, and one primary action (plus an optional secondary). The **Close button** is top-left. Esc and a click on the overlay close non-critical modals. Desktop is 560 wide, mobile 343. Never stack modals.

## Bottom sheet

Mobile only: actions, filters, selection lists and notifications. It has a grabber, a title with a close button, content (swap the Slot) and an optional sticky primary action. Top corners are `radius/lg`, with `shadow/lg`, on the Overlay. Max height is 90% of the screen; the content scrolls. On desktop use a Dropdown or Modal instead.

## Slot

A dashed placeholder inside Card, Modal and Bottom sheet. Swap it (property "Content" or "Illustration") for a library component, or for a local component built only from library parts. A Slot must never reach a finished screen.

## Search field

A boxed, pill-shaped search used for global search (insured, policy, claim) in the Header and above lists. The search icon is at the start and a clear (×) appears at the end when it has a value. Edge: `border/input` (`#82828D`, 3.8:1, passes WCAG 3:1). Results open in a Dropdown menu. Use **Field** for form inputs.

# Layout (🧭 Layout page)

These are app-shell components. Their content is fixed by the product. PMs place them; only the studio changes them.

## Header

- **Desktop** (stretch to the page width): the brand (Menora logo + Selfie360) on the right; on the left the **Search field** and the **User menu** (agent name, opens a Dropdown with switch-agent/logout). White, `shadow/sm`.
- **Mobile** (375): the menu icon (opens **Mobile menu**) on the right, the brand in the middle, a search icon on the left.

## Footer

- **Desktop**: white, `border/default` top line, `shadow/sm`. Row 1 has the service links: contacts, user management, service charter, terms, accessibility (the accessibility statement link is mandatory). Row 2 has the help line and contact details.
- **Mobile**: dark (`nav/bg`) with the white logo, the links, "יש לך בעיה? אנחנו כאן לשירותך", and the contact details.

## Sidebar

Desktop main navigation on the right edge (RTL), on `nav/bg` with the Menora swoosh decoration.

| | |
| --- | --- |
| Open (176) | Level-1 items (icon + label + chevron), the current group expanded with Level-2 items |
| Collapsed (66) | Icon-only items; the toggle at the top switches between the two states |
| Level-1 states | Default; Hover `nav/item-hover`; Active (open/current group) `nav/item-active` with dark text and icon |
| Level-2 states | On the `nav/item-hover` band; Hover `nav/subitem-hover`; Active = bold |

New tokens `color/nav/*`. Studio's `#8C8CA9` sub-item hover was darkened to `#6E6E8C`, so white text reaches 4.9:1. Labels are one line and truncate. (With the temporary font, "תהליכים דיגיטליים" truncates; with SimplerPro it fits.)

**Mobile menu**: full screen on `nav/bg`, close top-left, the same Level-1 items.

## Bottom navigation

A sticky white bar at the bottom of mobile screens. Today it has one entry, "פעולות" (actions), which opens the actions Bottom sheet. Each entry is a label plus a 32px icon circle; Active is purple. More entries are a studio decision (max 4).
