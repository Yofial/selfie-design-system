# Selfie Make kit: how to publish

A Make kit gives Figma Make our real React components, so PMs' prototypes look and behave like Selfie (ADR-012).

## Requirements
- A Figma **Professional+** plan (Alex's team is Professional). Make kits are created in a team or org folder, not in drafts.
- `@selfie-ds/react` and `@selfie-ds/tokens` **published to npm**. Private Figma-hosted npm needs Organization/Enterprise, so on Professional the packages must be **public** on npmjs.com. That's fine: the code contains no secrets and **no font files**.
- An npm account and an org/scope for `@selfie-ds` (or rename the scope, e.g. `@menora-selfie`).

## Steps
1. `pnpm -r build`, then `npm publish --access public` in `packages/tokens` and then in `packages/react`. (Needs an npm login; to be done by the package owner.)
2. In Figma: new **Make** file in the team project → **Settings → Create a kit → Assemble your kit**.
3. Add npm packages `@selfie-ds/react` and `@selfie-ds/tokens`. Add library styles from **Selfie DS**.
4. Replace the generated `guidelines/` content with the files from `guidelines/make-kit/` in this repo.
5. Test: prompt "בנה עמוד רשימת תביעות עם סינון וטבלה" (build a claims list page with filters and a table). Check that it uses `DataTable`, `Field`, `Badge` and tokens only.
6. **Publish kit** (name "Selfie", thumbnail). The team admin enables it by default.
7. PMs: in a Make file, **Add context → Select a Make kit → Selfie**.

Whenever components or guidelines change, publish new package versions and use **Update kit**.
