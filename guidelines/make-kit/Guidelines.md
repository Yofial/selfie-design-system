# Selfie DS: Figma Make guidelines

You are prototyping screens for **Selfie**, Menora Mivtachim's portal for insurance agents. The UI is **Hebrew, RTL** (`<html dir="rtl" lang="he">`), dense and data-heavy.

Always:
- Build with components from **`@selfie-ds/react`**. Don't create custom buttons, inputs, tables, badges, tabs or cards.
- Style layout only with **`--sds-*` tokens** (see `tokens.md`). No hex colors, no Tailwind color classes, no other fonts.
- One primary `Button` per screen.

Read next, in this order:
1. `setup.md`: imports and the app shell
2. `tokens.md`: colors, spacing, type
3. `components/overview.md`: which component for which need
4. `components/patterns.md`: list page, dashboard, customer image, mobile
