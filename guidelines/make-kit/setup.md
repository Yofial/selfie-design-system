# Setup

```tsx
import '@selfie-ds/tokens/css';
import '@selfie-ds/tokens/dist/css/text.css';
import '@selfie-ds/react/styles.css';
```
- Root element: `dir="rtl" lang="he"`, background `var(--sds-color-bg-canvas)`, font `var(--sds-font-family-base)`.
- App shell (desktop): a white header (64–72px, `box-shadow: var(--sds-shadow-sm)`), a dark sidebar on the **right** (`var(--sds-color-nav-bg)`, 176px, white text), content padding `var(--sds-space-24)`.
- Use logical CSS properties only (`padding-inline`, `margin-inline-start`, `text-align: start`).
