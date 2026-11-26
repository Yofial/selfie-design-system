# AGENTS.md: Selfie design system

Rules for AI coding agents building Selfie UI (Menora Mivtachim's agents portal). Follow them when asked to "build a screen like X". You don't need a designer's approval for screens built only within these rules (ADR-012).

## Setup
```tsx
import '@selfie-ds/tokens/css';            // --sds-* custom properties
import '@selfie-ds/tokens/dist/css/text.css'; // .sds-text-* classes
import '@selfie-ds/react/styles.css';
import { Button, Field, DataTable } from '@selfie-ds/react';
// Root: <html dir="rtl" lang="he">. Font: SimplerPro (licensed, from Menora's CDN).
```

## Hard rules
1. **Compose from `@selfie-ds/react` first.** If a component exists, use it; don't restyle it. If none fits, build from tokens and tell the user it needs a design-system review.
2. **Tokens only.** Colors `var(--sds-color-text-*|bg-*|border-*|icon-*|nav-*|chart-*)`, spacing `var(--sds-space-*)`, radius `var(--sds-radius-*)`, shadows `var(--sds-shadow-*)`, text `.sds-text-*` or `font: var(--sds-text-*)`. **Never** hex/rgb values, raw px for spacing or radius, primitive tokens (`--sds-color-ink-900`) or other fonts.
3. **RTL:** use logical CSS (`margin-inline-start`, `padding-inline`, `inset-inline-end`, `text-align: start`). Never `left`/`right`. The "forward" chevron is `Icons.ChevronLeft`.
4. **One `Button variant="primary"` per view.** Others are `secondary`, `LinkButton` or `IconButton`.
5. **Status = `Badge` with words** (`tone`: warning pending · error rejected/debt · info in process · success approved/active · neutral closed/draft).
6. **Numbers, dates and IDs** read LTR (`DataTable` `type: 'number'`; elsewhere `dir="ltr"` / `unicode-bidi: isolate`).
7. **Accessibility (WCAG 2.1 AA / IS 5568):** every control has a label (`IconButton label`), visible focus (built in), errors in words that say how to fix them (`Field error`). Don't put white text on light backgrounds or use yellow as text.
8. **Hebrew copy:** buttons are verbs ("שמירה", "להמשך"). No "לחצו כאן" (click here).

## Pick a component
| Need | Use |
| --- | --- |
| Main action / other actions | `Button` primary / secondary (size lg 50, md 40, sm 28) |
| Inline action, navigation | `LinkButton` |
| Icon-only action | `IconButton` (needs `label`) |
| Text, number, date, select input | `Field` (`icon`: `ChevronDown` select, `Calendar` date) |
| Consent / multi-choice / single choice | `Checkbox` / `Radio` |
| Record status | `Badge`; product line `ProductBadge`; count `CountBadge`; category `Tag` |
| Views of a page | `Tabs`; filter inside a card: `SegmentedControl` |
| Widget/block | `Card` (`elevated` on canvas, `outlined` inside surfaces; never nested) |
| List of records | `DataTable` + `Pagination`; no data: `EmptyState` |

## Page patterns
- **List page:** title (`.sds-text-title-bold`) → `Tabs` (optional) → filter bar (`Field`s in a row + `IconButton variant="primary"` search) → `DataTable` → `Pagination`.
- **Dashboard:** 2-column grid of `Card`s, gap `var(--sds-space-24)`, page padding `var(--sds-space-24)` on `var(--sds-color-bg-canvas)`.
- **Mobile (<768px):** one column, padding `var(--sds-space-16)`; tables become cards of label/value pairs.

The full component guidance lives in `docs/components/README.md` and the Storybook. The Figma counterparts are in the *Selfie DS* library, with the same names and props.
