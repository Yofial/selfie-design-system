import React from 'react';
import type { Preview } from '@storybook/react';
import '@selfie-ds/tokens/css';
import '@selfie-ds/tokens/dist/css/text.css';

const preview: Preview = {
  decorators: [(Story) => (<div dir="rtl" lang="he" style={{ padding: 24, fontFamily: 'var(--sds-font-family-base)' }}><Story /></div>)],
  parameters: {
    layout: 'fullscreen',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    options: { storySort: { order: ['Introduction', 'Actions', 'Inputs', 'Status', 'Navigation', 'Containers', 'Data'] } },
  },
};
export default preview;
