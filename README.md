# Selfie Design System

The design system for **Selfie** (סלפי), Menora Mivtachim's agents portal.

It is the first Menora product to get a real, governed design system. It builds on the studio's *Agents 2024* Figma file and its Style Guide page.

## Goals

1. **Product managers iterate in Figma with confidence.** A locked, published Figma library with guardrails lets PMs compose screens without asking the studio for approval on every screen. The studio does new concept work and evolves the system together with us.
2. **Developers (and their AI agents) build compliant UI fast.** Design tokens plus a React component library documented in Storybook. A developer asked to build "a screen like X" with no UI spec can prepare on-system options without waiting on approvals.

## Deliverables (planned)

| Deliverable | Audience | Status |
| --- | --- | --- |
| Figma library: variables, text styles, components, guardrail docs | PMs, studio | Planned, blocked on Figma seat (see [research](docs/research/01-figma-audit.md#access-blocker)) |
| Design tokens (source of truth, exported to CSS/JS) | Developers, Figma | Planned |
| React component library and Storybook | Developers | Planned |
| Guardrails for AI coding agents (rules, lint, usage docs) | Developers' AI agents | Planned |

## Repository map

- `docs/research/`: findings from the Figma file and related artifacts.
- `docs/decisions/`: architecture decision records (ADRs) agreed with the architect.
- `docs/open-questions.md`: questions still to be answered.
