import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl, Tabs } from './Tabs';
import { Pagination } from '../Pagination/Pagination';

const meta: Meta = { title: 'Navigation/Tabs' };
export default meta;
const items = [{ id: 'quote', label: 'הצעות ושינויים' }, { id: 'sales', label: 'הזדמנויות מכירה', count: 4 }, { id: 'keep', label: 'שימור' }, { id: 'promo', label: 'מבצעים' }, { id: 'comm', label: 'עמלות' }, { id: 'claims', label: 'תביעות', soon: true }];
export const UnderlineTabs: StoryObj = { render: () => { const [v, set] = useState('quote'); return <Tabs aria-label="אזורים" items={items} value={v} onChange={set} />; } };
export const Segmented: StoryObj = { render: () => { const [v, set] = useState('overview'); return <SegmentedControl aria-label="תצוגה" items={[{ id: 'overview', label: 'מבט על' }, { id: 'trend', label: 'מגמות' }, { id: 'detail', label: 'פירוט' }]} value={v} onChange={set} />; } };
export const Paging: StoryObj = { render: () => { const [p, set] = useState(1); return <Pagination page={p} pageCount={9} onChange={set} />; } };
