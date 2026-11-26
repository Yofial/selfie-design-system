import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const meta = {
  title: 'Components/Radio group',
  component: RadioGroup,
  subcomponents: { Radio },
  args: { legend: 'סוג מוצר', defaultValue: 'elementary', children: null },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="elementary" label="אלמנטרי" />
      <Radio value="pension" label="פנסיה וגמל" />
      <Radio value="life" label="חיים" />
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        component:
          'One choice out of 2–5 visible options. More than 5 → Dropdown. Arrow keys move between options. ' +
          'Figma: `Checkbox` (11:65), Type=Radio.',
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Inline: Story = { args: { inline: true } };
export const Disabled: Story = { args: { disabled: true } };
