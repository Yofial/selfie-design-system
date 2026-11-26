# ADR-006: React + TypeScript with CSS variables, distributed as npm packages

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Decision
- A monorepo (pnpm workspaces) with:
  - `@selfie-ds/tokens`: built CSS variables, TS and JSON (names to be confirmed against Menora's npm scope).
  - `@selfie-ds/react`: React 18+ components in TypeScript, styled with **CSS Modules that consume only token CSS variables**. No runtime CSS-in-JS. RTL-first with logical properties.
  - `apps/storybook`: Storybook, deployed as a static site. Every component has stories for each variant and state, plus docs (usage, do and don't).
- Published to a **private npm registry** (which one is an open question).
- Lint guardrails: **Stylelint** forbids raw colors, px values that have a token, and physical properties. **ESLint** rules apply to consumers where possible.

## Consequences
- Apps can theme by switching a `data-brand` / `data-theme` attribute.
- Versioning uses Changesets and semver. Breaking changes need an ADR.
