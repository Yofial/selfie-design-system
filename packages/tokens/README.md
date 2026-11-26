# @selfie-ds/tokens

Design tokens for Selfie, Menora's agents portal. **This folder is the source of truth** (ADR-005): edit the JSON here, never the variables in Figma.

## Layout

```
src/
  primitive/color.json        raw palette (hidden from Figma publishing; never used directly in UI)
  primitive/dimension.json    space (4-based), radius (5 steps)
  primitive/typography.json   SimplerPro family and weights, text styles, shadows
  semantic/color.selfie.json  color roles: text, bg, border, icon, brand → aliases of primitives
scripts/
  build.mjs                   Style Dictionary build
  figma-sync.mjs              emits a Figma Plugin API script that creates or updates variables and styles
```

The format is [W3C DTCG](https://tr.designtokens.org/format/) (`$value`, `$type`, `$description`). Every semantic token has a `$description` that says what it is for. PMs see it in Figma, and AI agents read it from `dist/json/tokens.json`.

## Build

```bash
pnpm install
pnpm tokens:build     # → dist/
pnpm tokens:figma     # → dist/figma/sync.plugin.js
```

| Output | Use |
| --- | --- |
| `dist/css/tokens.css` | CSS custom properties `--sds-*`, on `:root` and `[data-brand="selfie"]` |
| `dist/css/text.css` | Text classes `.sds-text-body-regular` and so on (`font: var(--sds-text-…)`) |
| `dist/js/tokens.js` + `.d.ts` | Resolved values as ES constants (`sdsColorTextPrimary`) |
| `dist/json/tokens.json` | Flat manifest for agents: token, css var, value, alias, usage |
| `dist/figma/manifest.json` | Input for the Figma sync |

## Using tokens in code

```css
@import '@selfie-ds/tokens/css';
@import '@selfie-ds/tokens/text.css';

.card {
  background: var(--sds-color-bg-surface);
  border: 1px solid var(--sds-color-border-default);
  border-radius: var(--sds-radius-lg);
  padding: var(--sds-space-24);
  box-shadow: var(--sds-shadow-sm);
}
```

Rules:
- Use **semantic** tokens (`--sds-color-text-*`, `--sds-color-bg-*`, `--sds-color-border-*`, `--sds-color-icon-*`). Never use a primitive (`--sds-color-ink-900`) or a hex value in a component.
- Text uses the text classes, or the `--sds-text-*` shorthands. Don't set font-size by hand.
- Spacing and radius come only from `--sds-space-*` and `--sds-radius-*`.

## Syncing to Figma

Run `dist/figma/sync.plugin.js` in the library file *Selfie DS* (`Cw9hFppHvySISBjlf6mPQ1`), either with the Figma MCP `use_figma` tool or as a development plugin. The script is idempotent: it finds collections, variables and styles by name and updates them.

| Figma collection | Mode | Scopes | Published |
| --- | --- | --- | --- |
| Primitives | Value | none (hidden from pickers) | no |
| Color | Selfie (a Menora mode comes later, ADR-002) | text → Text fill; bg → Frame/Shape fill; border → Stroke; icon → Shape fill + Stroke | yes |
| Spacing | Value | Gap (gap + padding) | yes |
| Radius | Value | Corner radius | yes |
| Typography | Value | Font family / style / size / line height | yes |

Every variable has WEB code syntax `var(--sds-…)`, so Dev Mode and the Figma MCP show developers the real CSS variable.

**Text styles** are created only when the SimplerPro font is available to the file. Today it isn't (see `docs/open-questions.md`).
