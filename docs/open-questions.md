# Open questions

Questions for the architect. When one is answered, it moves into an ADR in `decisions/`.

Rounds 1 to 3 were answered on 2026-11-26 (ADR-001 to ADR-009).

## Still open

- **SimplerPro font files and this public repo:** the font files (© Michal Sahar, licensed) are available from the Menora Digital artifact. This GitHub repo is **public**, so the font files were **not** committed. Options: make the repo private, or load the font in Storybook and apps from Menora's licensed CDN / an internal package. Which CDN URL does Menora use?

- **SimplerPro in Figma (blocks text styles):** SimplerPro is not available to the Selfie DS file in Alex's team. Licensed fonts are available to cloud Figma tools only as **shared fonts**, an Organization/Enterprise feature, which supports moving the library to Menora's org (ADR-009). Options: (a) move the library to Menora's Figma org and upload SimplerPro as a shared font there; (b) an organization admin uploads it to Alex's team if its plan allows; (c) someone with the font installed runs `dist/figma/sync.plugin.js` as a development plugin in the desktop app. Typography variables (sizes, line heights, weights) already exist.

- **Figma seat:** when will the Full seat in Menora's org be available? Figma work is blocked until then (ADR-001).
- **npm scope and registry:** the package names (`@menora/…`?) and the registry (GitHub Packages, Azure Artifacts, JFrog…).
- **Typeface:** confirm that Selfie uses SimplerPro, and where the licensed web font files are.
- **Charts library** for React (Recharts, visx, ECharts…), and whether existing Selfie code already uses one.
- **The existing Selfie codebase:** can we see it, to align component APIs and find hard-coded values?
- **PM request channel:** where PMs file DS requests (Jira, a Figma comment template…).
- **Compliance check for Figma:** a plugin or MCP script that flags detached instances and hard-coded values on PM files.
