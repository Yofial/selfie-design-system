import type { Meta, StoryObj } from '@storybook/react';
import { Badge, CountBadge, ProductBadge } from './Badge';
import { Tag } from '../Tag/Tag';

const meta: Meta<typeof Badge> = { title: 'Status/Badge', component: Badge, args: { children: 'ממתינים לטיפול', tone: 'warning', size: 'md' } };
export default meta;
type S = StoryObj<typeof Badge>;
export const Playground: S = {};
export const Tones: S = { render: () => (<div style={{ display: 'grid', gap: 12 }}>
  {(['lg', 'md', 'sm'] as const).map((size) => (<div key={size} style={{ display: 'flex', gap: 12 }}>
    <Badge tone="warning" size={size}>ממתין לטיפול</Badge><Badge tone="error" size={size}>נדחה</Badge><Badge tone="info" size={size}>בטיפול</Badge>
    <Badge tone="success" size={size}>אושר</Badge><Badge tone="neutral" size={size}>סגור</Badge></div>))}</div>) };
export const ProductAndCount: S = { render: () => (<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
  <ProductBadge line="elementary">ביטוח אלמנטרי</ProductBadge><ProductBadge line="pension">פנסיה וגמל</ProductBadge>
  <CountBadge count={12} /><Tag>ביטוח מקיף</Tag><Tag count={12}>ביטוח מקיף</Tag><Tag size="sm">ביטוח מקיף</Tag></div>) };
