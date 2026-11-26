# ADR-003: A dedicated Figma library file

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Context
The current Style Guide is one page inside a product file (Agents 2024). It mixes primitives with domain patterns and has many unnamed variants.

## Decision
Create a **new, clean library file** (working name "Selfie DS"), published as a team library. Its pages:

1. Cover and Read me (how to use, guardrails)
2. Foundations: variables (colors, spacing, radius), text styles, effects, grid, icons, illustrations, logo
3. Primitives: button, field, checkbox/radio, dropdown, tag/badge, tabs, tooltip, pagination, card, modal, bottom sheet…
4. Patterns: header, sidebar, filter bar, search results, tables, charts, dashboard widgets
5. Templates: page templates PMs start from
6. Changelog

Product files (Agents 2024 and later ones) **subscribe** to the library. The old Style Guide stays as a read-only reference until everything has moved.

## Consequences
- We migrate components one by one: renamed, re-propertied (size / state / content as separate properties) and bound to variables.
- Existing screens will need instance swaps to the new library. We plan this separately.
