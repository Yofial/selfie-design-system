# Anti-patterns and the compliance check

A file is **Ready for dev** only when the Selfie compliance check passes. It fails on:

| Check | Why |
| --- | --- |
| Detached instances, or groups/frames that look like a component | Developers can't map them to code; updates won't reach them |
| Instances of components that are not from Selfie DS | Off-system |
| Any fill, stroke or text color not bound to a Selfie variable | Raw hex values bypass the system and contrast rules |
| Gap, padding or radius not using a variable (on auto-layout frames you created) | Inconsistent spacing |
| Text not in SimplerPro (or the temporary Assistant), or off the type scale | Off-brand |
| A **Slot** left in the design (except one marked "דרוש רכיב חדש", new component needed) | Unfinished content |
| More than one Primary button in a view | Unclear main action |

## Don't
- Don't recolor components or override fills on instances.
- Don't use chart colors outside charts, and don't use yellow as text.
- Don't put white text on light backgrounds, or gray placeholder text for real content.
- Don't left-align Hebrew text, and don't mirror icons by hand (use `icon/chevron-left` / `icon/chevron-right` as defined).
- Don't create new tabs, badges or tones. Use the existing variants.
- Don't put essential information or actions in a Tooltip.
- Don't use English UI copy, "לחצו כאן" (click here), or error messages that don't say how to fix the problem.
- Don't build new patterns (new widget types, new navigation). That is studio work: leave a Slot with "דרוש רכיב חדש: <what and why>".

## When unsure
Choose the simplest existing component and add a comment for the PM. A visible gap is better than an invented component.
