// Emits a Figma Plugin API script (stdout) that creates or updates the Figma
// variables and styles of the library from dist/figma/manifest.json.
// Run it with the Figma MCP `use_figma` tool, or paste it into a dev plugin.
// It is idempotent: it finds collections, variables and styles by name and updates them.
import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync(new URL('../dist/figma/manifest.json', import.meta.url)));

// Typography variables derived from the text styles.
const uniq = (a) => [...new Set(a)].sort((x, y) => x - y);
const typoVars = [
  { name: 'font/family/base', type: 'STRING', value: 'SimplerPro', scopes: ['FONT_FAMILY'], css: '--sds-font-family-base' },
  ...[['light', 'Light'], ['regular', 'Regular'], ['bold', 'Bold']].map(([k, v]) => (
    { name: `font/weight/${k}`, type: 'STRING', value: v, scopes: ['FONT_STYLE'], css: `--sds-font-weight-${k}` })),
  ...uniq(manifest.textStyles.map((s) => s.fontSize)).map((n) => (
    { name: `font/size/${n}`, type: 'FLOAT', value: n, scopes: ['FONT_SIZE'] })),
  ...uniq(manifest.textStyles.map((s) => s.lineHeight)).map((n) => (
    { name: `font/line-height/${n}`, type: 'FLOAT', value: n, scopes: ['LINE_HEIGHT'] })),
];

const data = { ...manifest, typoVars };

const code = `
const DATA = ${JSON.stringify(data)};
const log = { created: [], updated: 0, skipped: [] };
const hexToRgba = (h) => { h = h.replace('#',''); const n = (i) => parseInt(h.slice(i, i+2), 16) / 255;
  return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) : 1 }; };
const cols = await figma.variables.getLocalVariableCollectionsAsync();
async function collection(name) {
  let c = cols.find((x) => x.name === name);
  if (!c) { c = figma.variables.createVariableCollection(name); cols.push(c); log.created.push('collection:' + name); }
  return c;
}
const all = await figma.variables.getLocalVariablesAsync();
function variable(coll, name, type) {
  let v = all.find((x) => x.name === name && x.variableCollectionId === coll.id);
  if (!v) { v = figma.variables.createVariable(name, coll, type); all.push(v); log.created.push('var:' + name); }
  else log.updated++;
  return v;
}
const COLLECTION_MODE = { Primitives: 'Value', Color: 'Selfie', Spacing: 'Value', Radius: 'Value', Typography: 'Value' };
const byName = {};
for (const order of ['Primitives', 'Color', 'Spacing', 'Radius']) {
  for (const t of DATA.variables.filter((x) => x.collection === order)) {
    const c = await collection(t.collection);
    if (c.modes[0].name !== COLLECTION_MODE[order]) c.renameMode(c.modes[0].modeId, COLLECTION_MODE[order]);
    const type = typeof t.value === 'number' ? 'FLOAT' : 'COLOR';
    const v = variable(c, t.name, type);
    const mode = c.modes[0].modeId;
    if (t.alias && byName['Primitives/' + t.alias]) v.setValueForMode(mode, { type: 'VARIABLE_ALIAS', id: byName['Primitives/' + t.alias].id });
    else v.setValueForMode(mode, type === 'COLOR' ? hexToRgba(t.value) : t.value);
    v.scopes = t.scopes;
    v.description = t.desc || '';
    v.hiddenFromPublishing = !!t.hidden;
    if (t.css) v.setVariableCodeSyntax('WEB', 'var(' + t.css + ')');
    byName[t.collection + '/' + t.name] = v;
  }
}
const typo = await collection('Typography');
if (typo.modes[0].name !== 'Value') typo.renameMode(typo.modes[0].modeId, 'Value');
for (const t of DATA.typoVars) {
  const v = variable(typo, t.name, t.type);
  v.setValueForMode(typo.modes[0].modeId, t.value);
  v.scopes = t.scopes;
  if (t.css) v.setVariableCodeSyntax('WEB', 'var(' + t.css + ')');
  byName['Typography/' + t.name] = v;
}
// Effect styles
const effects = await figma.getLocalEffectStylesAsync();
for (const s of DATA.effectStyles) {
  let st = effects.find((x) => x.name === s.name);
  if (!st) { st = figma.createEffectStyle(); st.name = s.name; log.created.push('effect:' + s.name); }
  st.effects = s.layers.map((l) => ({ type: 'DROP_SHADOW', color: hexToRgba(l.color), offset: { x: parseFloat(l.offsetX), y: parseFloat(l.offsetY) },
    radius: parseFloat(l.blur), spread: parseFloat(l.spread), visible: true, blendMode: 'NORMAL', showShadowBehindNode: false }));
  st.description = s.desc + ' — code: var(' + s.css + ')';
}
// Text styles (only when the font is available to this file)
const fontOk = (await figma.listAvailableFontsAsync()).some((f) => f.fontName.family === 'SimplerPro');
if (!fontOk) log.skipped.push('text styles: SimplerPro not available to this file');
else {
  const texts = await figma.getLocalTextStylesAsync();
  for (const s of DATA.textStyles) {
    await figma.loadFontAsync({ family: s.family, style: s.style });
    let st = texts.find((x) => x.name === s.name);
    if (!st) { st = figma.createTextStyle(); st.name = s.name; log.created.push('text:' + s.name); }
    st.fontName = { family: s.family, style: s.style };
    st.fontSize = s.fontSize;
    st.lineHeight = { unit: 'PIXELS', value: s.lineHeight };
    st.setBoundVariable('fontSize', byName['Typography/font/size/' + s.fontSize]);
    st.setBoundVariable('lineHeight', byName['Typography/font/line-height/' + s.lineHeight]);
    st.description = (s.desc ? s.desc + ' — ' : '') + 'code: .' + s.css.slice(2) + ' / font: var(' + s.css + ')';
  }
}
return { created: log.created.length, createdSample: log.created.slice(0, 8), updated: log.updated, skipped: log.skipped,
  collections: (await figma.variables.getLocalVariableCollectionsAsync()).map((c) => c.name + ':' + c.variableIds.length + ' [' + c.modes.map((m) => m.name) + ']') };
`;
process.stdout.write(code);
