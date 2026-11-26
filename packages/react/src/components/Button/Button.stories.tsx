import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { LinkButton } from '../LinkButton/LinkButton';
import { IconButton } from '../IconButton/IconButton';
import { ChevronLeft, ExternalLink, Search } from '../../icons';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button', component: Button,
  args: { children: 'שמירה', variant: 'primary', size: 'md' },
  parameters: { docs: { description: { component: 'One **primary** (yellow) per view: the main step forward. **Secondary** for every other action. Labels are verbs.' } } },
};
export default meta;
type S = StoryObj<typeof Button>;
export const Primary: S = {};
export const Secondary: S = { args: { variant: 'secondary', children: 'ביטול' } };
export const WithIcon: S = { args: { children: 'להמשך', icon: <ChevronLeft /> } };
export const Disabled: S = { args: { disabled: true } };
export const Matrix: S = { render: () => (
  <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, max-content)' }}>
    {(['primary', 'secondary'] as const).flatMap((v) => (['lg', 'md', 'sm'] as const).map((s) => <Button key={v + s} variant={v} size={s}>שמירה</Button>))}
  </div>) };
export const Links: StoryObj = { render: () => (<div style={{ display: 'flex', gap: 24 }}><LinkButton>לפרטים נוספים</LinkButton><LinkButton href="#" icon={<ExternalLink />}>מעבר לאתר</LinkButton><LinkButton disabled>לא זמין</LinkButton></div>) };
export const IconButtons: StoryObj = { render: () => (<div style={{ display: 'flex', gap: 16 }}><IconButton variant="primary" label="חיפוש" icon={<Search />} /><IconButton label="חיפוש" icon={<Search />} /><IconButton label="חיפוש" icon={<Search />} disabled /></div>) };
