# Open questions

Questions for the architect. When one is answered, it moves into an ADR in `decisions/`.

## Round 1: foundations and access

- **Q1. Figma access.** Which Figma organization and team will own the published library? Who can give us a Full (Design) seat there, or a Dev seat at least? View seats can neither write nor make enough MCP calls.
- **Q2. Relationship to Menora Digital.** Shared core with a Selfie theme, Selfie adopts Menora Digital, or an independent system? See [research 02](research/02-selfie-vs-menora-digital.md).
- **Q3. Library file.** A new, clean library file, or restructure the Style Guide page in the copy?
- **Q4. Guardrail strictness for PMs.** How locked should the library be?

## Round 2 (later)

- Source of truth for tokens: Git or Figma? (Note: the Figma Variables REST API needs an Enterprise plan.)
- Code stack: React version, styling approach (CSS variables, CSS modules, Tailwind…), the existing Selfie front-end stack, monorepo or package registry.
- Scope of the first release: which components first?
- Dark mode: needed?
- Accessibility target (IS 5568 / WCAG 2.x AA).
- Governance: who approves changes to the library, and how the studio contributes.
- AI-agent guardrails: which agents the developers use (Copilot, Claude Code, Cursor…), and where the rules should live.
