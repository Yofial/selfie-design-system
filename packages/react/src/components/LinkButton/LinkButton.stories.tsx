import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './LinkButton';

const meta = {
  title: 'Components/Link button',
  component: LinkButton,
  args: { children: 'לפרטים נוספים', size: 'md' },
  parameters: {
    docs: {
      description: {
        component:
          'A text action or navigation inside content. With `href` it renders a link; without, a button. ' +
          'Not for the main CTA or destructive actions. Figma: `Link button` (8:161).',
      },
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsButton: Story = {};
export const AsLink: Story = { args: { href: '#', children: 'לכל הפוליסות' } };
export const External: Story = { args: { href: 'https://www.menora.co.il', external: true, children: 'אתר מנורה' } };
export const Disabled: Story = { args: { disabled: true } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--sds-space-24)', alignItems: 'center' }}>
      <LinkButton size="lg">לפרטים נוספים</LinkButton>
      <LinkButton size="md">לפרטים נוספים</LinkButton>
      <LinkButton size="sm">לפרטים נוספים</LinkButton>
    </div>
  ),
};
