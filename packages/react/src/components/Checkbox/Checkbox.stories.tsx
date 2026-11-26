import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: { label: 'אני מאשר/ת את תנאי השימוש' },
  parameters: {
    docs: {
      description: {
        component:
          'An independent yes/no choice, or consent. The label is clickable. For one of 2–5 options use Radio group. ' +
          'Figma: `Checkbox` (11:65), Type=Checkbox.',
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } };
