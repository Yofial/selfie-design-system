# Architecture decision records

Each decision we agree on gets a numbered file here. Use the short format below.

| # | Decision | Status |
| --- | --- | --- |
| 001 | [Work in Figma with a Full seat](ADR-001-figma-access.md) | accepted |
| 002 | [Shared Menora core with a Selfie theme](ADR-002-shared-core-selfie-theme.md) | accepted |
| 003 | [A dedicated Figma library file](ADR-003-dedicated-library-file.md) | accepted |
| 004 | [PM guardrails are templates plus locked components](ADR-004-pm-guardrails.md) | accepted |
| 005 | [Tokens live in Git as DTCG JSON and are pushed to Figma](ADR-005-tokens-in-git.md) | accepted |
| 006 | [React + TypeScript with CSS variables, distributed as npm packages](ADR-006-react-css-vars-npm.md) | accepted |
| 007 | [AI agent guardrails use AGENTS.md plus skills](ADR-007-ai-agent-guardrails.md) | accepted |
| 008 | [The first release covers the whole Style Guide](ADR-008-mvp-scope.md) | accepted |
| 009 | [Light mode first, WCAG 2.1 AA, Menora owns the library](ADR-009-light-a11y-governance.md) | accepted |
| 010 | [Consolidated foundation values for Selfie](ADR-010-foundation-consolidation.md) | accepted |
| 011 | [Patterns as generic blocks, and a dedicated chart palette](ADR-011-patterns-and-chart-palette.md) | accepted |
| 012 | [PMs explore in Figma Make and finalize with the Figma agent](ADR-012-pm-ai-workflow.md) | accepted |

## Template

```markdown
# ADR-NNN: <title>

- Status: proposed | accepted | superseded by ADR-MMM
- Date: YYYY-MM-DD
- Deciders: <roles>

## Context
What forces are at play.

## Decision
What we chose.

## Consequences
What becomes easier, what becomes harder, follow-ups.
```
