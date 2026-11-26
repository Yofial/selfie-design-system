import type { Decorator, Preview } from '@storybook/react';
import { useEffect } from 'react';
import '@selfie-ds/tokens/css';
import '@selfie-ds/tokens/dist/css/text.css';
import './preview.css';

/** RTL and Hebrew are the default (ADR-009). The toolbar switches to LTR to check mirroring. */
const withDirection: Decorator = (Story, context) => {
  const dir = context.globals.direction ?? 'rtl';
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === 'rtl' ? 'he' : 'en';
  }, [dir]);
  return (
    <div dir={dir} style={{ padding: 'var(--sds-space-24)' }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withDirection],
  globalTypes: {
    direction: {
      description: 'Text direction',
      toolbar: {
        title: 'Direction',
        icon: 'transfer',
        items: [
          { value: 'rtl', title: 'RTL (עברית)' },
          { value: 'ltr', title: 'LTR' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { direction: 'rtl' },
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true, sort: 'requiredFirst' },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#ffffff' },
        { name: 'canvas', value: '#efeff7' },
      ],
    },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    options: { storySort: { order: ['Introduction', 'Tokens', 'Components'] } },
  },
  tags: ['autodocs'],
};

export default preview;
