# ADR-012: PMs explore in Figma Make and finalize with the Figma agent

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect
- Based on: [research 04](../research/04-figma-ai-guardrails.md)

## Context
PMs should iterate with Figma's AI features and hand developers a screen that is on-system and ready to build, without a studio review just for safety. Figma's AI guidelines steer the model but don't enforce anything. Only Figma Design output built with library instances carries tokens, Dev Mode and Code Connect.

## Decision
1. **Explore in Figma Make** (optional): 2–3 interactive options with the **Selfie Make kit**: `@selfie-ds/react` + library styles + Make guidelines. Make output is for deciding, not for handoff.
2. **Finalize in Figma Design with the Figma agent**: start from a Selfie **template**, connect the Selfie DS library (its **library guidelines** steer the agent), and build the chosen option with library instances.
3. **Verify** with the **Selfie compliance check** (our script, via MCP or a plugin). Only a passing file is marked **Ready for dev**. Anything needing a new component goes to the studio.
4. **Hand off** through Dev Mode + **Code Connect**, so developers' agents get real component code through the Figma MCP server.
5. **One source of rules**: agent guidelines, Make kit guidelines and `AGENTS.md` are all generated from this repo.

## Plan
The library and PM files stay on **Alex's team (Professional)**. This is the team Menora purchased; it may be renamed or upgraded later. Consequences: no shared fonts (SimplerPro text styles stay blocked), no private npm (the Make kit uses a public package or waits), and Figma's Check designs is reportedly unavailable, so our compliance check is the gate. This refines ADR-009's "Menora owns the library": ownership is Menora's, through this team.

## Consequences
- Build order: agent guidelines → compliance check → templates → React package + Make kit (+ Code Connect).
- PMs need Full seats on the team, and AI credits must be budgeted.
