# ADR-005: Tokens live in Git as DTCG JSON and are pushed to Figma

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Context
Tokens must serve Figma (PMs, studio) and code (developers, AI agents). Figma's Variables REST API needs an Enterprise plan, so automated two-way sync is not available.

## Decision
- The **source of truth is this repo**: `tokens/` in **W3C DTCG** format (`$value`, `$type`, `$description`), in tiers: `primitive/`, `semantic/` (with brand and mode files: `menora`, `selfie`; light now), `component/` (sparingly).
- **Style Dictionary** builds CSS custom properties, a TypeScript object, and a JSON manifest for agents.
- A **Figma sync script** creates and updates Figma variables from the built JSON, run through the Figma MCP (`use_figma`) or as a plugin. It sets collections, modes, scopes and code syntax (`var(--…)`).
- Every token carries a `$description` with usage. Agents and PMs both read it.
- Changes go through **pull requests**. The studio can propose a change as a PR, or as a Figma branch that we convert into a PR.

## Consequences
- Editing a variable directly in Figma is drift. A check script compares Figma variables with the repo and reports differences.
- Code syntax on Figma variables lets Dev Mode and the MCP show developers the real CSS variable names.
