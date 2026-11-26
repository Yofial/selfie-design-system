// Builds @selfie-ds/tokens from the DTCG sources in src/.
// Outputs: CSS custom properties, an ES module + types, a flat JSON manifest
// (for AI agents and docs) and a Figma manifest consumed by figma-sync.mjs.
import StyleDictionary from 'style-dictionary';

const PREFIX = 'sds';

const isPrimitive = (t) => t.path[0] === 'primitive';
const cssName = (t) => `--${PREFIX}-${t.path.filter((p) => p !== 'primitive').join('-')}`;

// ---- Figma mapping: collection, variable name and scopes per token ----
function figmaEntry(t) {
  const p = t.path;
  const desc = t.$description ?? t.original.$description ?? '';
  if (t.$type === 'color') {
    if (isPrimitive(t)) {
      return { collection: 'Primitives', name: p.slice(1).join('/'), scopes: [], hidden: true, value: t.$value, desc };
    }
    const group = p[1];
    const scopes = {
      text: ['TEXT_FILL'],
      bg: ['FRAME_FILL', 'SHAPE_FILL'],
      border: ['STROKE_COLOR'],
      icon: ['SHAPE_FILL', 'STROKE_COLOR'],
      brand: ['FRAME_FILL', 'SHAPE_FILL'],
    }[group];
    const ref = t.original.$value; // "{primitive.color.ink.900}"
    const alias = typeof ref === 'string' && ref.startsWith('{')
      ? ref.slice(1, -1).split('.').slice(1).join('/')
      : null;
    return { collection: 'Color', name: p.join('/'), scopes, alias, value: t.$value, desc, css: cssName(t) };
  }
  if (p[0] === 'space') {
    return { collection: 'Spacing', name: `space/${p[1]}`, scopes: ['GAP'], value: parseFloat(t.$value), desc, css: cssName(t) };
  }
  if (p[0] === 'radius') {
    return { collection: 'Radius', name: `radius/${p[1]}`, scopes: ['CORNER_RADIUS'], value: parseFloat(t.$value), desc, css: cssName(t) };
  }
  return null;
}

StyleDictionary.registerFormat({
  name: 'sds/figma-manifest',
  format: ({ dictionary }) => {
    const variables = dictionary.allTokens.map(figmaEntry).filter(Boolean);
    const textStyles = dictionary.allTokens
      .filter((t) => t.$type === 'typography')
      .map((t) => {
        const v = t.original.$value;
        const weight = { '{font.weight.light}': 'Light', '{font.weight.regular}': 'Regular', '{font.weight.bold}': 'Bold' }[v.fontWeight];
        const label = t.path.slice(1, -1).join('-');
        return {
          name: `${label}/${t.path.at(-1)}`,
          family: 'SimplerPro', style: weight,
          fontSize: parseFloat(v.fontSize), lineHeight: parseFloat(v.lineHeight),
          desc: t.$description ?? t.original.$description ?? '', css: cssName(t),
        };
      });
    const effectStyles = dictionary.allTokens
      .filter((t) => t.$type === 'shadow')
      .map((t) => ({
        name: `shadow/${t.path.at(-1)}`,
        layers: [].concat(t.original.$value),
        desc: t.$description ?? t.original.$description ?? '', css: cssName(t),
      }));
    return JSON.stringify({ variables, textStyles, effectStyles }, null, 2);
  },
});

// Flat manifest for agents: name, css var, value, type, usage.
StyleDictionary.registerFormat({
  name: 'sds/agent-manifest',
  format: ({ dictionary }) => JSON.stringify(
    dictionary.allTokens.map((t) => ({
      token: t.path.join('.'),
      css: cssName(t),
      type: t.$type,
      value: t.$value,
      alias: typeof t.original.$value === 'string' && t.original.$value.startsWith('{') ? t.original.$value : undefined,
      usage: t.$description ?? t.original.$description ?? undefined,
      primitive: isPrimitive(t) || undefined,
    })),
    null, 2,
  ),
});

StyleDictionary.registerTransform({
  name: 'sds/name',
  type: 'name',
  transform: (t) => cssName(t).slice(2),
});

// Typography utility classes, so components and apps never set font props by hand.
StyleDictionary.registerFormat({
  name: 'sds/text-classes',
  format: ({ dictionary }) => dictionary.allTokens
    .filter((t) => t.$type === 'typography')
    .map((t) => `.${cssName(t).slice(2)} { font: var(${cssName(t)}); }`)
    .join('\n') + '\n',
});

const transforms = ['attribute/cti', 'sds/name', 'color/css', 'fontFamily/css', 'typography/css/shorthand', 'shadow/css/shorthand'];

const sd = new StyleDictionary({
  source: ['src/**/*.json'],
  usesDtcg: true,
  log: { verbosity: 'default' },
  platforms: {
    css: {
      transforms,
      buildPath: 'dist/css/',
      files: [
        { destination: 'tokens.css', format: 'css/variables', options: { outputReferences: true, selector: ':root, [data-brand="selfie"]' } },
        { destination: 'text.css', format: 'sds/text-classes' },
      ],
    },
    js: {
      transforms: transforms.map((x) => (x === 'sds/name' ? 'name/camel' : x)),
      prefix: PREFIX,
      buildPath: 'dist/js/',
      files: [
        { destination: 'tokens.js', format: 'javascript/es6' },
        { destination: 'tokens.d.ts', format: 'typescript/es6-declarations' },
      ],
    },
    json: {
      transforms,
      buildPath: 'dist/',
      files: [
        { destination: 'json/tokens.json', format: 'sds/agent-manifest' },
        { destination: 'figma/manifest.json', format: 'sds/figma-manifest' },
      ],
    },
  },
});

await sd.buildAllPlatforms();
