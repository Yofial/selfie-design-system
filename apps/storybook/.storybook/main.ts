import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Stories live next to the components; docs pages live here.
  stories: ['../src/**/*.mdx', '../../../packages/react/src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: { name: '@storybook/react-vite', options: {} },
  core: { disableTelemetry: true },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const { basename } = await import('node:path');
    return mergeConfig(config, {
      css: {
        modules: {
          generateScopedName: (local: string, filename: string) =>
            `sds-${basename(filename).replace(/\.module\.css(\?.*)?$/, '')}-${local}`,
        },
      },
    });
  },
};

export default config;
