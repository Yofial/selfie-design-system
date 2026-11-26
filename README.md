# Selfie Design System

The design system for **Selfie** (סלפי), Menora Mivtachim's agents portal.

It is the first Menora product to get a real, governed design system. It builds on the studio's *Agents 2024* Figma file and its Style Guide page.

## Goals

1. **Product managers iterate in Figma with confidence.** A locked, published Figma library with guardrails lets PMs compose screens without asking the studio for approval on every screen. The studio does new concept work and evolves the system together with us.
2. **Developers (and their AI agents) build compliant UI fast.** Design tokens plus a React component library documented in Storybook. A developer asked to build "a screen like X" with no UI spec can prepare on-system options without waiting on approvals.

## Deliverables

| Deliverable | Audience | Status |
| --- | --- | --- |
| Figma library *Selfie DS* (variables, 64 components, icons, templates) | PMs, studio | Built; text styles wait for SimplerPro in Figma. See [docs/figma-files.md](docs/figma-files.md) |
| Design tokens `packages/tokens` (DTCG → CSS/TS/JSON, Figma sync) | Developers, Figma | Built |
| React components `packages/react` + Storybook `apps/storybook` | Developers | First 12 component families; publish to npm pending |
| AI guardrails: `guidelines/` (Figma agent, Make kit), `AGENTS.md`, compliance check `tools/figma-compliance` | PMs' and developers' AI agents | Built; agent guidelines need uploading to the library |

## PM workflow (ADR-012)
Explore in **Figma Make** with the Selfie Make kit → finalize in **Figma Design** with the Figma agent, starting from a template → **compliance check** passes → **Ready for dev** → Dev Mode / Code Connect.

## Repository map

- `docs/research/`: findings from the Figma file and related artifacts.
- `docs/decisions/`: architecture decision records (ADRs) agreed with the architect.
- `docs/open-questions.md`: questions still to be answered.
- `docs/components/README.md`: every component, its properties and its rules.
- `packages/`, `apps/storybook`, `guidelines/`, `tools/`: code, AI guidelines and the compliance check.
