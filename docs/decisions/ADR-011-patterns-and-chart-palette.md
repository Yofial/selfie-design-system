# ADR-011: Patterns as generic blocks, and a dedicated chart palette

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Context
The studio's Table and Dashboard sections mix reusable patterns (filter bar, search results, table header and cells, charts, widgets) with many product-specific pieces: Policy rows, Selfie 360 tables, per-area tab tables (Quote / Preservation / Claims / Sales / Control), and dashboards. Chart colors were hard-coded and not tokenized.

## Decision
1. **Patterns are generic building blocks**: Filter bar, Search results, Data table (header cell, cell types, row states, empty state, skeleton), chart parts and a chart card, dashboard widget, and an empty state. **2–3 domain pieces** (a Policy row, one area table, the Recent actions widget) are rebuilt from those blocks to prove they work. The other domain sets become **Templates**, not library components.
2. **Charts use their own ordered palette**, `color/chart/1–6` plus `chart/track`, taken from the studio's chart colors: `#4A3AFF`, `#F7C744`, `#C893FD`, `#3B3B4D`, `#8E6CF4`, `#DADAEA`, with track `#EEEEEE`. These are used only in charts, never for links, buttons or text. The architect compared this with reusing UI tokens side by side in Figma.
3. Every bar or segment also has a **text label or value**. Several series colors (2, 3, 6) are too light to carry meaning alone.

## Consequences
- Data colors don't collide with interaction colors (link/selected purple, primary-button yellow).
- Series 1/5/3 are all purples, separated by lightness (1.6–2.7:1). Use them in that order and keep the number of series at or below 6.
