# Research 03: Real values used by the Style Guide

- Source: the Style Guide page, pasted on 2026-11-26 into the reference file *Agents 2024 – Style Guide reference* (`HkFARygJ81iAzHzgmociTj`, Alex's team).
- Scope: 20,004 nodes, 610 components. Every visible node was counted.

## Key finding: styles and variables do exist

The color sheet on the page shows only 8 swatches, but the components **do** use named styles and variables. They are **remote**: they come from the studio's original file or a studio library, and the copy-paste did not bring them in as local ones.

- About 2,800 fills and 1,850 strokes are **bound to variables**, from one collection called "Variable collection" with one mode.
- Text uses about 30 named **text styles** (`14 px/14 Regular`…). There are 3 named **effect styles** and about 12 **color styles**.

So the studio already works with tokens, but without structure: there are duplicates, names mix Hebrew and English, and roles and raw colors are mixed together.

## Color variables (by usage)

| Variable | Value | Uses | Notes |
| --- | --- | --- | --- |
| Text color | → alias (primitive) | 2,599 | Main text, `#3B3B4D` |
| Text Color | `#3B3B4D` | 802 | Duplicate of the above (different case) |
| White | `#FFFFFF` | 577 | |
| Link | → alias, `#6342F0` | 237 + 8 | Two variables with the same name |
| main | → alias, `#FFDB45` | 169 | Primary yellow |
| רקע בהיר ("light background") | → alias | 127 | Light background |
| Field Title | `#82828D` | 94 | Field labels and secondary text |
| red text | `#FF4A33` | 58 | |
| Green | `#2C9A4B` | 40 | |
| Error | `#FD0505` | 28 | A different red from "red text" |
| gray middle | `#EEEEEE` | 22 + 8 | Two variables |
| illustraion | → alias | 17 | (typo in the name) |
| field line | `#BBBBC3` | 13 | Field border |
| Icons Backgorund | → alias, `#F5F5FA` | 9 | (typo in the name) |
| middle gray | `#D8D8E2` | 6 + 5 | Two variables, close to "gray middle" |
| Text color | `#103962` | 4 | A third "Text color", in navy |
| disable | `#BBBBC3` | 3 | Same value as field line |
| Light purple | `#968CFF` | 1 | |

## Color styles

`Dark purple` and `Text color` (both `#3B3B4D`), `White`, `gray light` `#F5F5FA`, `Main/Gray text` `#414243`, `purple` `#41006C`, `Yellow new` `#FFDB45`, `Disabled` `#BBBBC3`, `Link` `#6342F0`, `Black`, `Base/white`.

## Hard-coded colors (not bound), top by usage

`#EEEEEE` 406, `#EBEBEB` 240, `#000000` 215, `#D9D9D9` 149, `#263238` 139 (+569 strokes; probably illustrations), `#F9F9FC` 123, `#5C3FD7` 46 (darker purple, probably link hover), `#8E6CF4` 44, `#F7C744` 39 (darker yellow, probably hover), success pair `#EAF5ED`/`#218F40` 38, error pair `#FFEDEB`/`#E03D2B` 36, `#42006C` 32, `#4A3AFF` 26, `#684EED` 23, `#F2F0FF` 26, `#FFF9DF` 19, `#D85E18` 19 (orange, probably warning).

**There are three reds** (`#FF4A33`, `#FD0505`, `#E03D2B`) and **two greens** (`#2C9A4B`, `#218F40`). These need to be consolidated.

## Typography

- **Font family:** SimplerPro (Regular 2,425 · Bold 531 · Light 460 text layers). Stray uses: *Almoni Neue DL* (72 layers, inside illustrations or pasted art) and *Open Sans SemiBold* (14). Neither belongs in UI.
- **Weights:** Light 300, Regular 400, Bold 700. Styles named "Semibold" actually use **Bold**.
- **Text styles in use:**

| Style | Font | Size/line height | Uses |
| --- | --- | --- | --- |
| 10 px/10 Regular, Light | SimplerPro | 10/18 | 187, 12 |
| 12 px/12 Regular, Light | SimplerPro | 12/20 | 420, 84 |
| 14 px/14 Regular, Light, Semibold(=Bold), Bold | SimplerPro | 14/24 | 738, 336, 142, 5 |
| Field title | SimplerPro Regular | 14/14 | 82 |
| 14 px/14, 14 px/regular | SimplerPro Regular | 14/18 | 7 |
| 16 px/16 Regular, Light, Semibold, Bold | SimplerPro | 16/24 | 681, 26, 139, 30 |
| Text | SimplerPro Regular | 16/18 | 48 |
| 18 px/18 Regular, Semibold | SimplerPro | 18/26 | 89, 76 |
| 20 px/20 Regular, Semibold | SimplerPro | 20/28 | 7, 9 |
| 24 px/24 Regular, Semibold | SimplerPro | 24/32 | 2, 13 |
| 32 px/32 Semibold | SimplerPro Bold | 32/40 | 2 |
| 48 px/48 Semibold | SimplerPro Bold | 48/56 | 8 |

The base text is **14/24**: Selfie is a dense, data-heavy UI. Menora Digital's base is 16.

## Effects

| Style | Value | Uses |
| --- | --- | --- |
| dropshadow | `0 0 1 rgba(12,26,75,.24)`, `0 3 8 -1 rgba(50,50,71,.05)` | 358 (cards, fields) |
| card shadow / new card | `0 0 54 rgba(59,59,77,.14)` | 16 |
| button shadow | `0 10 14 rgba(255,219,69,.30)` | 4 (+50 hard-coded) |

## Radii (by usage)

6 (447), 8 (283), 4 (212), 90 = pill (177), 24 (135), 5 (106), 10 (87), 2 (59), 30 (52), 40 (39), 12 (36), 16 (24), 18 (20), 32 (14), plus fractions from scaled copies.

## Spacing (auto-layout gaps and padding)

- Gaps: 8 (1,461), 4 (955), 16 (496), 24 (317), 10 (316), 2 (302), 40 (167), 32 (126), 6 (107), 12 (26).
- Common padding: `8 16`, `8 12`, `16`, `2 8`, `4 16`, `16 23`, `6 8`, `24`.

The scale is effectively **4-based (2, 4, 8, 12, 16, 24, 32, 40)**, with some 6, 10 and 23 outliers.
