import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { LinkButton } from '../LinkButton/LinkButton';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = { title: 'Containers/Card', component: Card, decorators: [(S) => <div style={{ maxWidth: 540 }}><S /></div>] };
export default meta;
const actions = [['הגשת תביעה', '12/01/2024'], ['ניוד פנסיה', '10/01/2024'], ['השלמת מסמכים', '09/01/2024']];
const body = <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>{actions.map(([a, d]) => <li key={a} style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--sds-text-body-lg-regular)' }}><span>{a}</span><span dir="ltr">{d}</span></li>)}</ul>;
export const Elevated: StoryObj<typeof Card> = { args: { title: 'פעולות אחרונות', action: <LinkButton>פעולות נוספות</LinkButton>, children: body } };
export const Outlined: StoryObj<typeof Card> = { args: { variant: 'outlined', title: 'פרטי לקוח', children: body, footer: <Button size="sm">עדכון פרטים</Button> } };
