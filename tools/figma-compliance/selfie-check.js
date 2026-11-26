// Selfie compliance check (ADR-012).
// Runs inside Figma's Plugin API: paste into `use_figma` (MCP) after setting
// OPTIONS, or wrap as a development plugin (see README). It returns a report of
// every top-level frame on the current page (or the current selection),
// with PASS/FAIL per frame. It only reads; nothing is changed unless
// OPTIONS.select is true, in which case offending nodes are selected.

const OPTIONS = typeof SELFIE_CHECK_OPTIONS !== 'undefined' ? SELFIE_CHECK_OPTIONS : {};
const LIBRARY_COMPONENTS = new Set([
  // Foundations / utilities
  'Logo', 'Selfie360 wordmark', 'Nav swoosh', 'Slot',
  // Primitives
  'Button', 'Link button', 'Icon button', 'Count badge', 'Tag', 'Field', 'Search field', 'Checkbox',
  'Menu item', 'Dropdown menu', 'Tab', 'Tab bar', 'Segmented tab', 'Segmented control', 'Badge',
  'Product badge', 'Tooltip', 'Page item', 'Page arrow', 'Pagination', 'Page dots', 'Card', 'Modal',
  'Close button', 'Bottom sheet', 'Overlay',
  // Layout
  'Header', 'User menu', 'Footer', 'Sidebar', 'Sidebar item', 'Sidebar icon item', 'Mobile menu',
  'Bottom navigation', 'Bottom nav item',
  // Patterns
  'Filter bar', 'Search result item', 'Search results', 'Table header cell', 'Table cell', 'Table row',
  'Data table', 'Empty state', 'Skeleton', 'Legend item', 'Bar', 'Progress bar', 'Donut chart', 'KPI',
  'Chart card', 'Activity item', 'Recent actions', 'Data field', 'Policy row',
]);
const ALLOWED_FONTS = new Set(['SimplerPro', 'Assistant' /* temporary stand-in */]);
const TYPE_SCALE = new Set([10, 12, 14, 16, 18, 20, 24, 32, 48]);
const NEW_COMPONENT_MARK = 'דרוש רכיב חדש';

const libName = (inst) => {
  const mc = inst.mainComponent; if (!mc) return null;
  const owner = mc.parent && mc.parent.type === 'COMPONENT_SET' ? mc.parent : mc;
  return { name: owner.name, isIcon: owner.name.startsWith('icon/'), variant: mc.name };
};
const insideInstance = (n, root) => { let p = n.parent; while (p && p !== root.parent) { if (p.type === 'INSTANCE') return true; p = p.parent; } return false; };

async function checkFrame(frame) {
  const issues = [];
  const add = (rule, node, detail) => issues.push({ rule, node: node.name, id: node.id, detail });
  const nodes = [frame, ...frame.findAll(() => true)];
  let primaries = 0;
  for (const n of nodes) {
    if (n.visible === false) continue;
    const inInst = n !== frame && insideInstance(n, frame);
    // Slots are checked at any depth: a Card whose Content was never swapped still ships a placeholder.
    if (n.type === 'INSTANCE' && inInst) {
      const lib = libName(n);
      if (lib && lib.name === 'Slot' && !n.name.includes(NEW_COMPONENT_MARK)) add('slot-left', n, 'Slot placeholder left inside a component (swap its Content/Illustration property)');
    }
    if (n.type === 'INSTANCE' && !inInst) {
      const lib = libName(n);
      if (!lib) add('missing-main-component', n, 'Instance whose main component is missing (deleted or detached library)');
      else if (!lib.isIcon && !LIBRARY_COMPONENTS.has(lib.name)) add('non-library-component', n, `Instance of "${lib.name}", which is not a Selfie DS component`);
      else if (lib.name === 'Slot' && !n.name.includes(NEW_COMPONENT_MARK)) add('slot-left', n, 'Slot placeholder left in the design (swap it for content, or rename it "דרוש רכיב חדש: …")');
      if (lib && lib.name === 'Button' && lib.variant.includes('Variant=Primary')) primaries++;
    }
    if (inInst) continue; // internals of instances are governed by the library
    if ((n.type === 'FRAME' || n.type === 'GROUP') && n !== frame && LIBRARY_COMPONENTS.has(n.name)) add('detached-instance', n, `"${n.name}" is a frame/group named like a library component: probably detached`);
    for (const key of ['fills', 'strokes']) {
      if (!(key in n) || !Array.isArray(n[key])) continue;
      n[key].forEach((p) => {
        if (p.visible === false) return;
        if (p.type === 'SOLID' && !(p.boundVariables && p.boundVariables.color)) add('raw-color', n, `${key} uses a raw colour, not a Selfie variable`);
        if (p.type.startsWith('GRADIENT')) add('raw-color', n, `${key} uses a gradient (not part of the system)`);
      });
    }
    if (n.type === 'TEXT') {
      const fonts = n.getStyledTextSegments(['fontName', 'fontSize']);
      for (const s of fonts) {
        if (!ALLOWED_FONTS.has(s.fontName.family)) add('font', n, `Font "${s.fontName.family}" is not SimplerPro`);
        if (!TYPE_SCALE.has(s.fontSize)) add('type-scale', n, `Font size ${s.fontSize} is off the type scale`);
      }
    }
    if ((n.type === 'FRAME' || n.type === 'COMPONENT') && n.layoutMode && n.layoutMode !== 'NONE') {
      const bv = n.boundVariables || {};
      for (const k of ['itemSpacing', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']) {
        if (n[k] > 0 && !bv[k] && !(k === 'itemSpacing' && n.primaryAxisAlignItems === 'SPACE_BETWEEN')) add('raw-spacing', n, `${k} = ${n[k]} is not a space/* variable`);
      }
    }
    if ('cornerRadius' in n && n.type !== 'TEXT' && n.cornerRadius !== figma.mixed && n.cornerRadius > 0) {
      const bv = n.boundVariables || {};
      if (!bv.topLeftRadius) add('raw-radius', n, `Corner radius ${n.cornerRadius} is not a radius/* variable`);
    }
  }
  if (primaries > 1) add('multiple-primary', frame, `${primaries} Primary buttons in one view (max 1)`);
  return issues;
}

const page = figma.currentPage;
const roots = (figma.currentPage.selection.length ? figma.currentPage.selection : page.children)
  .filter((n) => ['FRAME', 'SECTION'].includes(n.type))
  .flatMap((n) => (n.type === 'SECTION' ? n.children.filter((c) => c.type === 'FRAME') : [n]));
const report = [];
const offending = [];
for (const f of roots) {
  const issues = await checkFrame(f);
  const byRule = issues.reduce((a, i) => ((a[i.rule] = (a[i.rule] || 0) + 1), a), {});
  report.push({ frame: f.name, id: f.id, result: issues.length ? 'FAIL' : 'PASS', counts: byRule, issues: issues.slice(0, OPTIONS.maxIssues || 25) });
  issues.forEach((i) => offending.push(i.id));
}
if (OPTIONS.select && offending.length) {
  const nodes = (await Promise.all([...new Set(offending)].map((id) => figma.getNodeByIdAsync(id)))).filter(Boolean);
  figma.currentPage.selection = nodes;
}
return {
  page: page.name,
  checked: report.length,
  passed: report.filter((r) => r.result === 'PASS').length,
  failed: report.filter((r) => r.result === 'FAIL').length,
  report,
};
