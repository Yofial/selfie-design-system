# Open questions

Questions for the architect. When one is answered, it moves into an ADR in `decisions/`.

Rounds 1 to 3 were answered on 2026-11-26 (ADR-001 to ADR-009).

## Still open

- **Figma seat:** when will the Full seat in Menora's org be available? Figma work is blocked until then (ADR-001).
- **npm scope and registry:** the package names (`@menora/…`?) and the registry (GitHub Packages, Azure Artifacts, JFrog…).
- **Typeface:** confirm that Selfie uses SimplerPro, and where the licensed web font files are.
- **Charts library** for React (Recharts, visx, ECharts…), and whether existing Selfie code already uses one.
- **The existing Selfie codebase:** can we see it, to align component APIs and find hard-coded values?
- **PM request channel:** where PMs file DS requests (Jira, a Figma comment template…).
- **Compliance check for Figma:** a plugin or MCP script that flags detached instances and hard-coded values on PM files.
