# ADR-002: Shared Menora core with a Selfie theme

- Status: accepted
- Date: 2026-11-26
- Deciders: Architect

## Context
Selfie's style guide is a near-copy of the "Menora Digital" design system. The colors differ only slightly (see [research 02](../research/02-selfie-vs-menora-digital.md)). Selfie's guide also lacks typography, spacing, radius, elevation, status colors, motion, voice and accessibility rules. Menora Digital defines all of these.

## Decision
- Use one **token architecture** in three tiers: **primitive** (raw palette) → **semantic** (roles such as `text`, `surface`, `link`, `focus`, `error`) → **component** (only where needed).
- Selfie and Menora Digital use the **same semantic token names**. Selfie is a **brand mode/theme** that maps those names to the studio's Selfie values (`#FFDB45`, `#6342F0`, `#3B3B4D`, …).
- Where Selfie's guide is silent, we take Menora Digital's values, in its **Compact density**. Each such value is marked "inherited" so the studio can review it.

## Consequences
- Components (Figma and React) bind only to semantic tokens. Switching brand is a mode change, which makes reuse across Menora products possible.
- We keep a list of inherited values for the studio to confirm or override.
- Colors that Menora Digital calls "off-brand look-alikes" but that Selfie uses on purpose are recorded as deliberate Selfie values.
