# ADR-010: Consolidated foundation values for Selfie

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect
- Based on: [research 03](../research/03-style-guide-values.md)

## Context
The Style Guide uses 3 reds, 2 greens, about 30 text styles, 14 radii and spacing outliers. A guardrail needs one value per role. Contrast was checked against WCAG 2.1 AA (ADR-009): normal text needs 4.5:1, while large text and non-text elements need 3:1.

## Decision

### Status colors: one per role, taken from Selfie's own palette
The fill, border and icon colors are the Selfie hues. Disabled buttons follow the studio: `bg/disabled-strong` (`#BBBBC3`) with `text/on-disabled` (white).

A **text** variant, darkened just enough to reach 4.5:1, is used wherever status is written as small text.

| Role | Base (fill, border, icon; text at 18px+ or bold 14px+) | Text variant (small text) | Background |
| --- | --- | --- | --- |
| error | `#E03D2B` (4.31:1 on white) | `#CC2F1E` (5.26 on white, 4.65 on bg) | `#FFEDEB` |
| success | `#218F40` (4.14:1) | `#1D7C38` (5.26 on white, 4.70 on bg) | `#EAF5ED` |
| warning | `#D85E18` (3.79:1) | `#C15415` (4.62) | `#FFF9DF` (to confirm) |

Deprecated (snap to the role above): `#FF4A33` "red text", `#FD0505` "Error", `#2C9A4B` "Green".

### Secondary text
`#82828D` ("Field Title") is 3.8:1 on white, which fails for 14px labels. We introduce `text-secondary` = **`#6E6E78`** (5.04 on white, 4.64 on `#F5F5FA`). `#82828D` stays for placeholders and disabled-adjacent hints only, at 14px+ (to review with the studio).

### Not for text
`#968CFF` (2.8:1), `#BBBBC3` (1.91:1) and `#FFDB45` on light grounds are for decoration, borders, disabled states and fills only.

### Typography: Selfie base 14/24
- Family: **SimplerPro** only (Light 300, Regular 400, Bold 700). Almoni Neue and Open Sans are not allowed in UI.
- Scale (size/line height): 10/18, 12/20, **14/24 (body)**, 16/24, 18/26, 20/28, 24/32, 32/40, 48/56.
- The style names "Semibold" become **Bold** (the actual font weight). Field title (14/14) and Text (16/18) are reviewed as component-level styles, not foundation styles.
- Inputs are 16px on mobile (this stops iOS zooming in).

### Radii: 5 tokens
`radius-xs` 4 (checkbox) · `radius-sm` 6 (dropdown panels, small containers) · `radius-md` 8 (tooltips, menus, count badge) · `radius-lg` 24 (cards, modals, sheets) · `radius-pill` 999 (**buttons, tags, badges, search field**: the studio uses radius 90 for these). Text fields are underline-style and have no radius.

> Correction (2026-11-26): the first version of this ADR gave buttons `radius-sm` 6. The studio's buttons and tags are fully rounded, so they use `radius-pill`. Other values snap to the nearest: 2→4, 5→6, 10/12→8, 16/18/30/32/40→24 (each case checked during migration).

### Spacing: 4-based scale
`space-0` 0 · `space-2` 2 · `space-4` 4 · `space-8` 8 · `space-12` 12 · `space-16` 16 · `space-24` 24 · `space-32` 32 · `space-40` 40 · `space-48` 48 · `space-64` 64. Outliers snap: 6→8 (or 4), 10→8 or 12, 23→24.

### Effects (from the studio's styles)
`shadow-sm` = "dropshadow" (`0 0 1 rgba(12,26,75,.24), 0 3 8 -1 rgba(50,50,71,.05)`) · `shadow-lg` = "card shadow" (`0 0 54 rgba(59,59,77,.14)`) · `shadow-primary` = "button shadow" (`0 10 14 rgba(255,219,69,.30)`).

## Consequences
- The studio reviews the darkened text variants and the `#82828D` change. These are the only places where we change Selfie's visual values; the rest is consolidation.
- Migration snaps values. Visual diffs are expected to be small.
