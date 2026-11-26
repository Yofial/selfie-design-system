# Research 04: Figma AI for PM prototyping, and how to guardrail it

Researched 2026-11-26. "Confirmed" means read on help.figma.com or figma.com. "Reported" means a third-party source only.

## The goal

PMs explore several solutions with AI, pick one, and hand developers a screen that is **on-system and ready to build**, without a studio review just for safety.

## Figma's AI features (as of Nov 2026)

| Feature | What it produces | Can it use *our* design system? | How we feed it rules | Availability |
| --- | --- | --- | --- | --- |
| **Figma agent** (in Figma Design; replaces First Draft since May 2026) | Real layers on the canvas, using **instances of the connected library** | **Yes**: "Connect any library available in the design file to the chat." *(confirmed)* | **Library guidelines**: .md/.txt/.json attached to the published library, sent to the agent automatically when the library is used. Max **200 KB** total; Figma recommends 3–8 files under 100 KB *(confirmed)*. During the beta you write and upload them yourself | Professional, Education, Organization, Enterprise. Needs edit access *(confirmed)*. Agent GA Oct 2026 *(reported)*. Uses AI credits |
| **First Draft** | Wireframes and designs | **No**, only Figma's built-in libraries *(confirmed)* | — | Now an entry point to the agent |
| **Figma Make** | A running **React app/prototype** (code), interactive | Yes, through a **Make kit** | Make kit = **npm package** (our React components) + **library styles/variables** + **guidelines** folder (Guidelines.md read first; many short files with routing overviews) *(confirmed)* | Professional, Education, Organization, Government, Enterprise *(confirmed)*. **Private** npm packages need Organization/Enterprise (Figma's page contradicts itself) |
| **Make → Figma Design** ("Copy design") | A **snapshot of layers**: not linked, not interactive, **components arrive as plain layers, not instances** | Partly: variables bind only if the library is already in the target file | — | *Reported only (uichemy)*; not confirmed on Figma's pages |
| **Code sources** (GitHub/npm attached to a library) | Lets the agent build with our real code components | Yes | Repo or package | **Closed beta** |
| **Check designs** (linter) | Finds raw values that should be variables, detached components, contrast issues; suggests the right variable | Yes, against our variables | — | *Reported*: Organization/Enterprise; triggered on "Ready for dev" or a quick action. Not confirmed on the help center |
| **System checks / system map** | Library health: missing descriptions and states, dependencies | Yes | — | Preview |
| **Dev Mode + Code Connect** | Developers see **our real code** for each instance; shared with the **Figma MCP server**, so developers' AI agents get it too | Yes | Code Connect mappings (CLI shows snippets in Inspect) | Professional+ (Professional: 1 library, 1 framework). **Full or Dev seat** *(confirmed)* |

## What this means for Selfie

1. **Guidelines guide; they don't enforce.** Both Figma and third parties describe guidelines as context for the model, not constraints. The agent can still go off-system. **Every AI path needs a verification step** before "Ready for dev".
2. **Only Figma Design output is developer-ready.** The agent builds with our library instances, which carry variables, Code Connect and Dev Mode. Make produces code that is great for clickable exploration, but its copy back into Figma Design arrives as plain layers that are off-system by definition.
3. **Make needs our React package first.** A Make kit is built around an npm package. Until `@selfie-ds/react` exists and is published, Make can only use our library *styles* (simplified to raw CSS values) plus guidelines. That gives a loose look-alike, not our components.
4. **The two sets of guidelines are separate.** Library guidelines (for the agent) are not used by Make kits, and Make kits have their own guidelines folder. We should write them **once in the repo** and publish to both.
5. **Our library is already "agent-ready"** in the ways that matter: components have descriptions, property names are meaningful, variables are scoped and have code syntax, and `docs/components/README.md` is written for agents. The guidelines files can be generated from it.

## Recommended guardrail stack

| Layer | Guardrail | Status |
| --- | --- | --- |
| 1. Structure | Library components with limited properties; variable scopes; primitives hidden; Slots for content | Done |
| 2. Instructions | **Library guidelines** (agent), **Make kit guidelines** (Make), `AGENTS.md` (developer agents): one source in the repo | To do |
| 3. Starting points | **Templates** (dashboard, customer image, list page, mobile) that PMs and the agent start from | To do |
| 4. Verification | A **Selfie compliance check** that reports detached instances, non-library components, unbound colors/spacing/radius, wrong fonts and leftover Slots. It runs via MCP or a plugin, plus Figma's **Check designs** if we're on Organization | To do |
| 5. Gate | Only a passing file is marked **Ready for dev**. Anything that needs a new component goes to the studio | Process |
| 6. Handoff | **Code Connect** (Figma ↔ `@selfie-ds/react`), so Dev Mode and developers' agents (MCP) get real component code | After the React package |

## Proposed PM workflow

1. **Explore (Make, optional):** prompt 2–3 interactive options with the Selfie Make kit. Use it to decide, not to hand off.
2. **Converge (Figma Design + agent):** start from a Selfie **template** and ask the agent, with the Selfie DS library connected, to build the chosen option. The guidelines steer it.
3. **Verify:** run the Selfie compliance check. Fix until it passes. A missing component is a request to the studio.
4. **Hand off:** mark Ready for dev. Developers get instances, variables, Code Connect snippets and MCP context.

## Plan and seat implications (to decide)

- PMs need **Full seats** (edit plus agent) on the plan that owns the library and product files.
- **Organization plan** adds: shared fonts (SimplerPro, needed for text styles and agent output), private npm for the Make kit, Check designs, and library analytics. The current **Professional** team ("Alex's team") lacks these.
- AI features consume **AI credits**, so budget per PM.

## Sources

- [Figma blog: Build by Design (Oct 2026)](https://www.figma.com/blog/build-by-design/)
- [Help: Add guidelines files to a design library](https://help.figma.com/hc/en-us/articles/43509372175511)
- [Help: Add guidelines to Figma Make](https://help.figma.com/hc/en-us/articles/33665861260823-Add-guidelines-to-Figma-Make)
- [Help: Get started with Make kits](https://help.figma.com/hc/en-us/articles/39241689698839-Get-started-with-Make-kits)
- [Help: Bring your design system package](https://help.figma.com/hc/articles/43602872461079)
- [Help: Write design system guidelines](https://help.figma.com/hc/articles/43602393097239)
- [Help: Use First Draft with Figma AI](https://help.figma.com/hc/en-us/articles/23955143044247-Use-First-Draft-with-Figma-AI)
- [Help: Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655)
- [Figma blog: Schema 2025 recap (Check designs)](https://www.figma.com/blog/schema-2025-design-systems-recap/)
- Third-party (not verified against Figma): [Design News Digest, Oct 19 2026](https://design-agent.dev/blog/2026-10-19-design-news-digest-figma-config-india-2026/), [Digcy agent guidelines playbook](https://digcy.com/blog/figma-agent-design-system-guidelines), [uichemy: Figma Make design system](https://uichemy.com/blog/figma-make-design-system/), [Medium: Figma's new linter](https://medium.com/@iamfilipp/figmas-new-linter-sees-the-mess-it-can-t-see-the-cost-d3130713b2e0)
