# ADR-004: PM guardrails are templates plus locked components

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Context
PMs should iterate on screens without asking the studio to approve each one. The studio should focus on new concepts and on evolving the system.

## Decision
- PMs **start from page templates** and compose **only published library components**.
- **Variable scoping** limits what can be picked: fills offer only surface and fill tokens, text offers only text tokens, gaps and padding offer only spacing tokens. Primitive palette variables are hidden from publishing.
- Components expose only the properties PMs may change (variant, text, boolean, instance swap). The internal structure is not meant to be edited; detaching is a violation.
- The library documents a **"needs the studio" boundary**: anything not composable from templates and components (a new component, a new pattern, a new illustration) goes to the studio as concept work.

## Consequences
- Templates become first-class deliverables, and each needs maintenance.
- We need a way to check compliance, such as a lint or check step for detached instances and hard-coded values (approach to decide).
- Component properties must be designed carefully. Too few frustrates PMs; too many removes the guardrail.
