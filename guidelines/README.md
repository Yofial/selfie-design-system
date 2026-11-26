# Guidelines for AI tools

One source of truth for the rules that AI tools follow (ADR-012).

| Folder | Consumer | How it gets there |
| --- | --- | --- |
| `figma-agent/` | Figma agent, through **library guidelines** on the Selfie DS library | Upload manually during the beta (below) |
| `make-kit/` *(coming with the React package)* | Figma Make, through the **Selfie Make kit** | Added to the kit's guidelines folder |
| `/AGENTS.md` *(coming)* | Developers' coding agents | Lives in the repo and the npm package |

## Upload the Figma agent guidelines
1. Open the **Selfie DS** library file in Figma (edit access needed).
2. Main menu → **Library** → **Manage guidelines…**
3. **Upload** all files from `figma-agent/` (5 files, about 12 KB; Figma's limit is 200 KB, and it recommends 3–8 files under 100 KB).
4. **Apply changes**, then publish the library.
5. Test: in a product file with the library enabled, ask the agent to "build a policy list page from the Selfie template" and run the compliance check on the result.

Whenever a component, token or rule changes, edit these files in a PR and upload them again.
