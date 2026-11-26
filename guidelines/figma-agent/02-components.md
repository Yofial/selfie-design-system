# Components: which one, and how

Set properties; don't edit internals. Hide optional parts with their boolean properties ("Show …").

## Actions
| Need | Component | Key properties |
| --- | --- | --- |
| Main step forward (one per view) | **Button** Variant=Primary | Size lg(50)/md(40)/sm(28), Label (verb), Show icon |
| Other actions | **Button** Variant=Secondary | same |
| Inline/table action, navigation | **Link button** | Size, Label, Show icon (external-link for new tab) |
| Icon-only action (search, expand) | **Icon button** | Variant Primary/Secondary, Icon. Add a Tooltip on desktop |
| Close a modal or sheet | **Close button** | top-left |

## Inputs
| Need | Component | Notes |
| --- | --- | --- |
| Text, number, date, select | **Field** (underline) | State Default/Filled/Focus/Error/Disabled/Read-only. Label, Value, Helper. Icon: chevron-down = select, calendar = date, search, close = clear. Error always shows a helper with how to fix it |
| Global/list search | **Search field** (pill) | Results in **Search results** |
| Options list under a field/button | **Dropdown menu** + **Menu item** | Menu item Type=Text (single) or Checkbox (multi). Search row for >7 items |
| Yes/no, consent, multi-choice | **Checkbox** Type=Checkbox | |
| One of 2–5 visible options | **Checkbox** Type=Radio | more than 5 → Dropdown |

## Status and labels
| Need | Component |
| --- | --- |
| Record status | **Badge**: Tone Warning (pending), Error (rejected/debt), Info (in process), Success (approved/active), Neutral (closed/draft); Size lg/md/sm |
| Product line of a policy | **Product badge**: Elementary / Pension & Gemel |
| Category label | **Tag**, optional count |
| A number on a tag/tab | **Count badge** |
| Explain an icon or truncated value | **Tooltip** (one line) |

## Navigation within a page
| Need | Component |
| --- | --- |
| Views of a page | **Tab bar** with **Tab** (Desktop/Mobile; Disabled = "בקרוב" (coming soon)) |
| Filter/sub-view inside a card | **Segmented control** with **Segmented tab** (2–4 options) |
| Paging a table | **Pagination** (RTL: page 1 on the right) |

## Containers and overlays
| Need | Component |
| --- | --- |
| A block or widget | **Card** (Elevated on canvas, Outlined inside surfaces). Title, Show action, Content (swap the Slot) |
| Blocking message or short decision | **Modal** (Desktop 560 / Mobile 343) on **Overlay**; illustration, title, body, 1 primary |
| Mobile actions, filters, lists | **Bottom sheet** on **Overlay** |
| Content placeholder | **Slot**: must be swapped before handoff |

Never put a Card inside a Card. Never stack Modals. On desktop, use a Dropdown or Modal instead of a Bottom sheet.
