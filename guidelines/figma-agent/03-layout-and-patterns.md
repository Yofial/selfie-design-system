# Layout and patterns

## Page shell (desktop 1440/1920)
- **Header** Size=Desktop across the top: brand on the right, Search field and User menu on the left.
- **Sidebar** on the **right** edge (Open 176 or Collapsed 66), with the current group Active.
- **Content** on `color/bg/canvas`, with padding 24 and gaps 24 between blocks.
- **Footer** Size=Desktop at the bottom.

## Mobile (375)
- **Header** Size=Mobile. **Mobile menu** for navigation. **Bottom navigation** at the bottom ("פעולות" (actions) opens a Bottom sheet).
- One column, padding 16. Tables become lists of cards (Policy row style, or Data field pairs).
- Filters open in a Bottom sheet (Filter bar Variant=Mobile).

## List / table page
1. Page title (24 Bold) and, optionally, a Tab bar.
2. **Filter bar** Variant=Desktop (Desktop filled once values are set).
3. **Data table**: header cells, rows, Pagination. Pick cell types per column: Text, Number (amounts, dates, IDs), Badge (status), Link (row action), Expand (first column of expandable rows).
4. No data: **Empty state** in place of the rows. Loading: **Skeleton** lines.

## Dashboard
- A grid of widget cards (2 columns at 1440), each with `radius/lg` and `shadow/lg`:
  - **Chart card**: KPI, period Segmented control, Bars, Legend.
  - **Recent actions**: up to 6 Activity items and a "more" link (the same pattern for updates and links).
  - **Card** + Slot for anything else built from library parts.

## Customer image (customer 360)
- Customer header block (Data fields), a **Tab bar** of areas, and per policy a **Policy row** (Collapsed/Expanded).
- Expanded details: Cards with Data fields, Progress bars or Data tables inside the Slot.

## Charts
- Series colors are always `chart/1…6` in order, at most 6 series.
- Every bar or segment has a text label or value (Legend item with value).
- **Bar** height and **Progress bar** fill are set with **Value** (20–100%). Don't resize the shapes.
- Donut: total in the center, always with a Legend.
