/**
 * Token guardrails for component CSS (ADR-006).
 * Components may use only semantic `--sds-*` variables: no raw colours,
 * no primitive palette tokens, no px for spacing/radius/type, and only logical
 * (RTL-safe) properties for the inline axis.
 */
const primitiveColor =
  '/var\\(--sds-color-(white|ink|gray|yellow|purple|plum|red|green|orange|black|chart-(blue|yellow|violet|purple|lavender))\\b/';

export default {
  rules: {
    // Colours come only from tokens.
    'color-no-hex': [true, { message: 'Use a semantic --sds-color-* token, not a hex value.' }],
    'color-named': ['never', { message: 'Use a semantic --sds-color-* token, not a named colour.' }],
    'function-disallowed-list': [
      ['rgb', 'rgba', 'hsl', 'hsla', 'hwb', 'lab', 'lch', 'oklch', 'oklab', 'color'],
      { message: 'Use a semantic --sds-color-* token, not a colour function.' },
    ],
    'declaration-property-value-disallowed-list': [
      {
        '/.*/': [primitiveColor],
        'text-align': ['left', 'right'],
        float: ['left', 'right'],
        clear: ['left', 'right'],
      },
      {
        message:
          'Use a semantic token (--sds-color-text-*, bg-*, border-*, icon-*), not a primitive; use start/end, not left/right.',
      },
    ],
    // Spacing, radius and type come only from tokens.
    'declaration-property-unit-disallowed-list': [
      {
        '/^(margin|padding|gap|row-gap|column-gap)/': ['px', 'rem', 'em'],
        '/radius/': ['px', 'rem', 'em'],
        'font-size': ['px', 'rem', 'em'],
        font: ['px', 'rem', 'em'],
      },
      { message: 'Use --sds-space-*, --sds-radius-* or a --sds-text-* shorthand.' },
    ],
    'declaration-property-value-allowed-list': [
      { 'font-family': ['inherit', '/^var\\(--sds-font-family-/'] },
      { message: 'Use var(--sds-font-family-base).' },
    ],
    // RTL first: logical properties on the inline axis.
    'property-disallowed-list': [
      [
        '/^(margin|padding)-(left|right)$/',
        '/^border-(left|right)/',
        '/^border-(top|bottom)-(left|right)-radius$/',
        'left',
        'right',
      ],
      { message: 'Use logical properties (margin-inline-start, inset-inline-end, …) for RTL.' },
    ],
  },
};
