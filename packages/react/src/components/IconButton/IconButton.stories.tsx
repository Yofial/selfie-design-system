import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { iconNames } from '../Icon';

const meta = {
  title: 'Components/Icon button',
  component: IconButton,
  args: { icon: 'search', label: 'חיפוש', variant: 'primary' },
  argTypes: { icon: { control: 'select', options: iconNames } },
  parameters: {
    docs: {
      description: {
        component:
          'A round 32px button with one icon. `label` is required: it is the accessible name. ' +
          'Primary counts as the view\'s one primary action. Figma: `Icon button` (29:185).',
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', icon: 'close', label: 'סגירה' } };

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--sds-space-16)' }}>
      <IconButton variant="primary" icon="search" label="חיפוש" />
      <IconButton variant="primary" icon="search" label="חיפוש" disabled />
      <IconButton variant="secondary" icon="close" label="סגירה" />
      <IconButton variant="secondary" icon="close" label="סגירה" disabled />
    </div>
  ),
};
