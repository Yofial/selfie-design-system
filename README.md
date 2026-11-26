# Selfie Design System

The design system for **Selfie** (סלפי), Menora Mivtachim's agents portal.

It is the first Menora product to get a real, governed design system. It builds on the studio's *Agents 2024* Figma file and its Style Guide page.

## Goals

1. **Product managers iterate in Figma with confidence.** A locked, published Figma library with guardrails lets PMs compose screens without asking the studio for approval on every screen. The studio does new concept work and evolves the system together with us.
2. **Developers (and their AI agents) build compliant UI fast.** Design tokens plus a React component library documented in Storybook. A developer asked to build "a screen like X" with no UI spec can prepare on-system options without waiting on approvals.

## Deliverables (planned)

| Deliverable | Audience | Status |
| --- | --- | --- |
| Figma library *Selfie DS*: variables, effects, components, patterns ([files](docs/figma-files.md)) | PMs, studio | Foundations, primitives, layout and patterns built. Templates and Read me pages next. Text styles blocked on the SimplerPro font (components use Assistant meanwhile) |
| Design tokens `@selfie-ds/tokens` (source of truth, exported to CSS/JS/JSON and Figma) | Developers, Figma | Built ([packages/tokens](packages/tokens/README.md)) |
| React component library `@selfie-ds/react` and Storybook | Developers | In progress: Button, Link button, Icon button, Field, Checkbox, Radio |
| Guardrails for AI coding agents (AGENTS.md, skills, manifests) | Developers' AI agents | Planned (ADR-007). Stylelint token rules are in place |

## Repository map

- `docs/research/`: findings from the Figma file and related artifacts.
- `docs/decisions/`: architecture decision records (ADRs) agreed with the architect.
- `docs/components/`: usage docs for every component (shared by Figma and React).
- `docs/figma-files.md`, `docs/figma/build-ledger.json`: the Figma files and the library's node IDs.
- `docs/open-questions.md`: questions still to be answered.
- `packages/tokens/`: `@selfie-ds/tokens`, the DTCG token source and its build.
- `packages/react/`: `@selfie-ds/react`, the React components.
- `apps/storybook/`: Storybook for the React components.

## Getting started

```bash
pnpm install
pnpm build            # tokens, then React components
pnpm storybook        # http://localhost:6006
pnpm lint             # Stylelint (token rules) + TypeScript
pnpm test             # component tests
```
