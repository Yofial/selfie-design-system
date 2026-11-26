# Open questions

Questions for the architect. When one is answered, it moves into an ADR in `decisions/`.

## Round 1: answered

Q1 to Q4 were answered on 2026-11-26. See ADR-001 to ADR-004.

Follow-up: which Figma organization owns the library (your Menora org, or the studio's)?

## Round 2 (later)

- Source of truth for tokens: Git or Figma? (Note: the Figma Variables REST API needs an Enterprise plan.)
- Code stack: React version, styling approach (CSS variables, CSS modules, Tailwind…), the existing Selfie front-end stack, monorepo or package registry.
- Scope of the first release: which components first?
- Dark mode: needed?
- Accessibility target (IS 5568 / WCAG 2.x AA).
- Governance: who approves changes to the library, and how the studio contributes.
- AI-agent guardrails: which agents the developers use (Copilot, Claude Code, Cursor…), and where the rules should live.
