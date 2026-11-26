import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import { Checkbox, Radio } from '../Checkbox/Checkbox';
import { Calendar, ChevronDown } from '../../icons';

const meta: Meta<typeof Field> = { title: 'Inputs/Field', component: Field, args: { label: 'מספר פוליסה', placeholder: 'הזינו מספר פוליסה' },
  decorators: [(S) => <div style={{ maxWidth: 320 }}><S /></div>] };
export default meta;
type S = StoryObj<typeof Field>;
export const Default: S = {};
export const Filled: S = { args: { defaultValue: '3224254654' } };
export const Select: S = { args: { label: 'סוג מסמך', defaultValue: 'הכל', icon: <ChevronDown />, readOnly: false } };
export const DateField: S = { args: { label: 'תאריך סריקה', defaultValue: '12/01/2024', icon: <Calendar /> } };
export const Error: S = { args: { defaultValue: '32242', error: 'מספר פוליסה צריך להכיל 10 ספרות' } };
export const Disabled: S = { args: { disabled: true } };
export const ReadOnly: S = { args: { readOnly: true, defaultValue: '3224254654' } };
export const Choices: StoryObj = { render: () => (<div style={{ display: 'grid', gap: 12 }}>
  <Checkbox defaultChecked>אני מאשר/ת את תנאי השימוש</Checkbox><Checkbox>שליחת עדכונים במייל</Checkbox>
  <Radio name="r" defaultChecked>כן</Radio><Radio name="r">לא</Radio><Checkbox disabled>לא זמין אונליין</Checkbox></div>) };
