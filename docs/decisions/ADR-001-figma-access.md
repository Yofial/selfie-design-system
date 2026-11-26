# ADR-001: Work in Figma with a Full seat

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Context
All the architect's Figma seats are View seats. View seats get only a few MCP calls a month (the quota ran out during the first audit) and cannot edit files. Creating variables, components and a published library needs edit rights.

## Decision
The architect gets a **Full (Design) seat** in the Figma organization that will own the library. The AI agent then reads and builds the library directly through the Figma MCP (`use_figma`).

## Consequences
- Figma work is blocked until the seat is in place. Meanwhile we work on what doesn't need Figma: token architecture, the repo, the Storybook scaffold, docs.
- The owning org and team must be decided (see open questions). The published library should sit where PMs and the studio can both subscribe to it.
