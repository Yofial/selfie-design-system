# Selfie compliance check

The gate before **Ready for dev** (ADR-012). It reads the current Figma page, or the current selection, and reports **PASS/FAIL per top-level frame** (frames directly on the page, or inside sections).

## Rules
| Rule | Fails when |
| --- | --- |
| `non-library-component` | An instance comes from a component that is not in Selfie DS (icons `icon/*` are allowed) |
| `missing-main-component` | An instance's main component is missing (deleted, or the library was removed) |
| `detached-instance` | A frame or group is named like a library component, which usually means a detached instance |
| `slot-left` | A `Slot` placeholder is still in the design, at any depth (except one named `דרוש רכיב חדש: …`, which marks a request to the studio) |
| `raw-color` | A fill or stroke you added is not bound to a Selfie variable, or is a gradient |
| `raw-spacing` | Gap or padding on your auto-layout frames is not a `space/*` variable |
| `raw-radius` | A corner radius is not a `radius/*` variable |
| `font` / `type-scale` | Text not in SimplerPro (Assistant allowed temporarily), or a size off the scale (10–48) |
| `multiple-primary` | More than one Primary Button in a frame (one screen) |

The internals of library instances are not checked; the library owns them.

## Run it
**Through an AI agent with the Figma MCP** (Claude Code, Cursor and others): ask the agent to run `tools/figma-compliance/selfie-check.js` with `use_figma` on the file and page. To highlight problems, define `const SELFIE_CHECK_OPTIONS = { select: true }` before the script; the offending layers are then selected.

**As a Figma development plugin** (no code knowledge needed after setup): Figma → Plugins → Development → New plugin, then use this file as the body of `code.js` and show the returned report (for example with `figma.ui`). Packaging this as a team plugin is a follow-up.

## Tested
On a test page (2026-11-26): a screen built only from library instances and variables → **PASS**. A screen with a red raw fill, a gap of 13, padding of 10, a "Button" frame with radius 7, 15px Inter text, a Card with its Slot unswapped, and two Primary buttons → **FAIL**, with each problem reported.

## Known limits
- It can't tell whether a design makes product sense; that is the PM's job.
- Detached instances are found by name. A renamed detached frame shows up through its raw colors and spacing instead.
- Text-style checks are by font family and size, because SimplerPro text styles don't exist yet (font not shared).
