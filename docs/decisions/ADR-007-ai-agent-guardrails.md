# ADR-007: AI agent guardrails use AGENTS.md plus skills

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Context
Developers get asked for "a screen like X" with no UI spec. Their AI agents should produce on-system options without avoidable approval loops. Teams use different agents.

## Decision
- An **`AGENTS.md`** (the tool-agnostic standard) at the repo root and shipped inside the packages. It covers: the rules in short, the token usage rules, the component catalogue with when to use and not to use, the "needs the studio" boundary, and how to self-check.
- **Agent skills** (`skills/`, SKILL.md format) where a workflow helps, for example:
  - `build-screen-from-reference`: compose a screen from templates, patterns and components; produce 2 to 3 on-system options; list anything that would need the studio.
  - `check-compliance`: run lint, look for raw values and non-library components, report.
- A machine-readable `components.json` / `tokens.json` manifest, so agents don't have to parse docs.

## Consequences
- Docs serve humans and agents together. Component docs follow one fixed structure.
