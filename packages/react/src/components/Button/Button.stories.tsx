import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { iconNames } from '../Icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'שמירה', variant: 'primary', size: 'md' },
  argTypes: { icon: { control: 'select', options: [undefined, ...iconNames] } },
  parameters: {
    docs: {
      description: {
        component:
          'The main way to act. **Primary** (yellow) is the one main step forward in a view; **Secondary** (outlined) is every other action. ' +
          'The label is a verb that says what happens ("שמירה", "להמשך"). Figma: `Button` (8:99).',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', children: 'ביטול' } };
export const WithIcon: Story = { args: { children: 'להמשך', icon: 'chevron-left' } };
export const Disabled: Story = { args: { disabled: true } };

/** Every variant × size, as in the Figma component set. Hover and focus are live. */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: 'var(--sds-space-16)', alignItems: 'center' }}>
      {(['primary', 'secondary'] as const).flatMap((variant) =>
        (['lg', 'md', 'sm'] as const).map((size) => (
          <div key={variant + size} style={{ display: 'contents' }}>
            <Button variant={variant} size={size}>שמירה</Button>
            <Button variant={variant} size={size} icon="chevron-left">להמשך</Button>
            <Button variant={variant} size={size} disabled>שמירה</Button>
            <span className="sds-text-caption-regular">{variant} · {size}</span>
          </div>
        )),
      )}
    </div>
  ),
};
