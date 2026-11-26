# Selfie DS: overview for the Figma agent

Selfie is Menora Mivtachim's portal for insurance **agents**. Users are agents managing customers, policies, claims, commissions and digital processes. The UI is **Hebrew, right to left (RTL)**, dense and data-heavy, on desktop (1440/1920) and mobile (375).

## Non-negotiable rules
1. **Use only Selfie DS library components.** Never draw buttons, fields, tables or cards from rectangles and text. Never detach an instance.
2. **Use only Selfie variables** for every color, spacing, radius and font size. Never type a hex value or a pixel number that has a variable.
3. **Start from a template** (page "📐 Templates") when building a page. Keep the Header, Sidebar and Footer as they are.
4. **RTL:** content starts on the right. Text aligns right. Icons sit at the end of a label (the left). The "forward" chevron is `icon/chevron-left`.
5. **One primary (yellow) Button per view.** Everything else is Secondary, a Link button or an Icon button.
6. **Every status has a word.** Never use color alone (Badge always has a label).
7. **Content in Hebrew**, short and direct. Buttons are verbs ("שמירה", "להמשך", "לפרטים"). Errors say how to fix them.
8. **If something needed is not in the library, stop**: leave a `Slot` instance with a note "דרוש רכיב חדש: …" (new component needed). Never invent a component.

## Where things are
| Page | Contents |
| --- | --- |
| 🎨 Foundations | Variables, icons (`icon/*`), Logo, Selfie360 wordmark, Slot |
| 🧩 Primitives | Button, Link button, Icon button, Field, Search field, Checkbox, Menu item, Dropdown menu, Tab, Tab bar, Segmented tab/control, Badge, Product badge, Count badge, Tag, Tooltip, Pagination, Card, Modal, Close button, Bottom sheet, Overlay |
| 🧭 Layout | Header, User menu, Footer, Sidebar, Sidebar item, Mobile menu, Bottom navigation |
| 🧱 Patterns | Filter bar, Search results, Data table (+ cells/rows), Empty state, Skeleton, chart parts, Chart card, Recent actions, Data field, Policy row |
| 📐 Templates | Page starting points |

## Read next
- `01-foundations.md`: variables and text rules
- `02-components.md`: which component for which need, and its properties
- `03-layout-and-patterns.md`: page structure, tables, dashboards, charts
- `04-anti-patterns.md`: what not to do, and how the compliance check judges a file
