# Tokens (CSS custom properties)

Use semantic tokens. Primitive palette tokens such as `--sds-color-ink-900` are off-limits in UI code.

| Use | Token |
| --- | --- |
| Text | `--sds-color-text-primary`, `-secondary`, `-placeholder`, `-link`, `-inverse`, `-error`, `-success`, `-warning` |
| Backgrounds | `--sds-color-bg-canvas` (page), `-surface` (cards), `-subtle` (insets), `-selected`, `-primary` (yellow, buttons only) |
| Borders | `--sds-color-border-default`, `-divider`, `-focus` |
| Charts | `--sds-color-chart-1` … `-6` in order, `--sds-color-chart-track` |
| Spacing | `--sds-space-4|8|12|16|24|32|40|48` |
| Radius | `--sds-radius-md` (menus, tables), `--sds-radius-lg` (cards), `--sds-radius-pill` (buttons, badges) |
| Shadow | `--sds-shadow-sm` (small), `--sds-shadow-lg` (cards) |
| Text | classes `.sds-text-title-bold` (24, page title), `.sds-text-subtitle-bold` (18, card title), `.sds-text-body-regular` (14, body), `.sds-text-body-lg-regular` (16, values), `.sds-text-caption-regular` (12, meta), `.sds-text-display-bold` (32, KPIs) |

Don't use yellow for text, and don't use chart colors for anything except charts.
