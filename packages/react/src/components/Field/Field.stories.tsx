import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import { iconNames } from '../Icon';

const meta = {
  title: 'Components/Field',
  component: Field,
  args: { label: 'מספר פוליסה', placeholder: 'הזינו מספר פוליסה' },
  argTypes: { icon: { control: 'select', options: [undefined, ...iconNames] } },
  decorators: [(Story) => <div style={{ maxInlineSize: 280 }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        component:
          'A single-line input in Selfie\'s underline style. Icon by use: `chevron-down` for selects, `calendar` for dates, `search` for search. ' +
          'In Error, the message says how to fix it. Figma: `Field` (10:45). ' +
          '**Known gap:** the resting line `border/field` is 1.9:1 on white, below WCAG 3:1 (ADR-010, studio decision).',
      },
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Filled: Story = { args: { defaultValue: '123456789' } };
export const WithHelper: Story = { args: { helper: '9 ספרות, בלי מקפים' } };
export const ErrorState: Story = { args: { defaultValue: '1234', error: 'יש להזין 9 ספרות' } };
export const Disabled: Story = { args: { disabled: true } };
export const ReadOnly: Story = { args: { readOnly: true, defaultValue: '123456789' } };
export const DateField: Story = { args: { label: 'תאריך תחילה', placeholder: 'dd/mm/yyyy', icon: 'calendar' } };

export const AllStates: Story = {
  decorators: [(Story) => <div style={{ maxInlineSize: 'none' }}><Story /></div>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 240px)', gap: 'var(--sds-space-32)' }}>
      <Field label="Default" placeholder="הזינו מספר פוליסה" icon="chevron-down" />
      <Field label="Filled" defaultValue="123456789" icon="chevron-down" />
      <Field label="Error" defaultValue="1234" icon="chevron-down" error="יש להזין 9 ספרות" />
      <Field label="Disabled" placeholder="הזינו מספר פוליסה" icon="chevron-down" disabled />
      <Field label="Read-only" defaultValue="123456789" icon="chevron-down" readOnly />
      <Field label="Helper" placeholder="הזינו מספר פוליסה" helper="טקסט עזרה" />
    </div>
  ),
};
