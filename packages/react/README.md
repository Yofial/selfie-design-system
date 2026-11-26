# @selfie-ds/react

React components for Selfie, Menora's agents portal (ADR-006). Each component matches its Figma counterpart in the *Selfie DS* library: same name, same properties. Usage rules for each component (when to use, do and don't) are in [docs/components](../../docs/components/README.md).

## Use

```tsx
import '@selfie-ds/tokens/css';        // token variables (--sds-*)
import '@selfie-ds/react/styles.css';  // component styles
import { Button, Field, Checkbox, Radio, RadioGroup } from '@selfie-ds/react';
```

The app root must be `<html dir="rtl" lang="he">`. Components use logical properties, so they also mirror correctly in LTR.

## Components

| Component | Figma | Props (beyond the native element's) |
| --- | --- | --- |
| `Button` | `Button` 8:99 | `variant` `primary` · `secondary` (default), `size` `lg` · `md` (default) · `sm`, `icon` |
| `LinkButton` | `Link button` 8:161 | `size`, `icon`; with `href` it renders `<a>`, else `<button>`; `external` opens a new tab and says so to screen readers |
| `IconButton` | `Icon button` 29:185 | `icon`, `label` (required, the accessible name), `variant` |
| `Field` | `Field` 10:45 | `label` (required), `hideLabel`, `helper`, `error`, `icon`. States come from the input: `disabled`, `readOnly`, `error` |
| `Checkbox` | `Checkbox` 11:65, Type=Checkbox | `label` (required), `hideLabel` |
| `RadioGroup` + `Radio` | `Checkbox` 11:65, Type=Radio | Group: `legend` (required), `value` / `defaultValue`, `onChange(value)`, `inline`, `disabled`. Radio: `value`, `label` |
| `Icon` | `icon/*` on 🎨 Foundations | `name`, `size`, `label` (leave out for decorative icons) |

Figma's Hover, Focus and Disabled variants are real CSS states (`:hover`, `:focus-visible`, `disabled`), not props.

## Rules for this package

- CSS Modules that use **only semantic token variables**. Stylelint enforces it (`pnpm lint:css`, config in `stylelint.config.mjs`): no hex or colour functions, no primitive palette tokens, no px for spacing, radius or type, no `left`/`right` properties.
- Every interactive component has a visible focus state (2px `border/focus`) and full keyboard support. Native elements are used underneath (`<button>`, `<input type="checkbox">`), so forms, keyboard and screen readers work without extra code.
- Icons are exported from the Figma library (`src/components/Icon/icons.tsx`) with `currentColor`. Add an icon to Figma first, then here.
- Tests (`pnpm test`) cover behaviour and run axe. Storybook's a11y panel also checks contrast, which jsdom can't.

## Develop

```bash
pnpm install
pnpm storybook        # builds tokens, then http://localhost:6006
pnpm test             # vitest + Testing Library + axe
pnpm lint             # stylelint + tsc
pnpm build            # dist/index.js, dist/styles.css, dist/types
```

Class names are readable and stable: `sds-Button-primary`. Don't target them from app code; they are not a public API.

## Known gaps

- **Font:** Storybook uses *Assistant*, as Figma does, until SimplerPro's licensed web font location is known (see open questions).
- **Field line contrast:** `border/field` is 1.9:1 on white, below WCAG 3:1 for control edges (ADR-010). It waits on a studio decision.
- **Tooltip** isn't built yet, so `IconButton` has only its accessible name. Add the Tooltip on desktop once it exists.
