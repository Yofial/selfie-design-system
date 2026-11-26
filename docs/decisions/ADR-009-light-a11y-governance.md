# ADR-009: Light mode first, WCAG 2.1 AA, Menora owns the library

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Decision
- **Theme:** light only in the first release. Semantic tokens are mode-capable, so dark mode can be added later without changing components.
- **Accessibility:** **WCAG 2.1 AA / IS 5568**. Token docs list the allowed text and ground pairs with their contrast checked. Every interactive component has a visible focus state and keyboard support. Storybook runs the a11y addon (axe). RTL and Hebrew are the default.
- **Governance:** the library lives in **Menora's Figma organization**, and the architect / DS owner approves changes. The studio contributes through Figma branches and token PRs. PMs file requests (new component, change) through an agreed channel.

## Consequences
- Some studio colors may fail contrast as text (for example `#968CFF` on white). Such tokens are marked "not for text" rather than changed.
