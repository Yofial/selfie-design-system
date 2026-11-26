import axe from 'axe-core';

/** Runs axe on a container and returns the violation ids (empty = pass). */
export async function axeViolations(container: Element): Promise<string[]> {
  const result = await axe.run(container, {
    // jsdom has no layout, so contrast can't be measured here; Storybook's a11y addon checks it.
    rules: { 'color-contrast': { enabled: false } },
  });
  return result.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
}
