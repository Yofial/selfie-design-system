# ADR-008: The first release covers the whole Style Guide

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Decision
The first release migrates **all 23 sections** of the Agents 2024 Style Guide into the new library and React: foundations, primitives, patterns and domain patterns (tables, charts, dashboard widgets).

It is built in this **order**, with each layer usable before the next starts:
1. Foundations: tokens, type, icons, logo, illustrations
2. Primitives: button, field family, checkbox/radio, dropdowns, tag/badges, tabs, tooltip, pagination, card, modal, bottom sheet, overlay, label
3. Layout: header, footer, sidebar, bottom navigation
4. Patterns: filter, search results, tables, charts, recent-action widgets
5. Templates for PMs: dashboard, customer image (360 view), list/table page, mobile

## Consequences
- This is a large scope. We track progress per component in `docs/inventory.md`.
- Charts in React need a library choice (to decide).
