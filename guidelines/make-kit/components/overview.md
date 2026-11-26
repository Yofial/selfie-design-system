# Components overview

| Need | Component | Notes |
| --- | --- | --- |
| Main action | `<Button variant="primary">` | one per screen; verb label |
| Other actions | `<Button variant="secondary">`, `<LinkButton>`, `<IconButton label>` | |
| Input | `<Field label helper error icon readOnly>` | underline style; `Icons.ChevronDown` for select, `Icons.Calendar` for date |
| Choices | `<Checkbox>`, `<Radio name>` | |
| Status | `<Badge tone>` | warning/error/info/success/neutral, always with words |
| Product line / count / category | `<ProductBadge line>`, `<CountBadge count>`, `<Tag>` | |
| Page views / in-card filter | `<Tabs items value onChange>`, `<SegmentedControl>` | |
| Block | `<Card title action footer>` | never nested |
| Records | `<DataTable columns rows rowKey>` + `<Pagination>` | number columns `type: 'number'`; status via `render` → `<Badge>` |
| No data | `<EmptyState title text>` | |
