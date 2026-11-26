# Screen patterns

- **List page:** title → `Tabs` (optional) → filter row (3–5 `Field`s + primary `IconButton` with `Icons.Search`) → `DataTable` → `Pagination` centered.
- **Dashboard:** greeting title, then a CSS grid of 2 columns of `Card`s (gap `--sds-space-24`): KPI and chart card, recent-actions list (up to 6 rows: action | reference, date), links.
- **Customer image (360):** customer `Card` with label/value pairs (label `.sds-text-body-regular` in `--sds-color-text-secondary`, value `.sds-text-body-lg-regular`), area `Tabs`, then one `Card` per policy with product name, `Badge` status and key fields.
- **Mobile (<768px):** one column, padding `--sds-space-16`, tables become cards; filters open in a bottom panel.
- **Charts:** simple CSS/SVG bars or donuts using `--sds-color-chart-1…6`; always label values.
