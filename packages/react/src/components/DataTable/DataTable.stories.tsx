import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, type Column } from './DataTable';
import { Badge } from '../Badge/Badge';
import { LinkButton } from '../LinkButton/LinkButton';
import { Pagination } from '../Pagination/Pagination';
import { EmptyState } from '../EmptyState/EmptyState';

type Row = { id: string; product: string; opened: string; premium: string; status: 'warning' | 'success' | 'error' };
const rows: Row[] = [
  { id: '733035748', product: 'ביטוח רכב', opened: '21/01/2024', premium: '1,240 ₪', status: 'warning' },
  { id: '733035749', product: 'ביטוח דירה', opened: '02/02/2024', premium: '640 ₪', status: 'success' },
  { id: '733035750', product: 'ביטוח חיים', opened: '15/03/2024', premium: '2,110 ₪', status: 'error' },
];
const label = { warning: 'ממתין לטיפול', success: 'פעיל', error: 'נדחה' } as const;
const columns: Column<Row>[] = [
  { key: 'id', header: 'מספר פוליסה', type: 'number', sortable: true },
  { key: 'product', header: 'מוצר' },
  { key: 'opened', header: 'תאריך פתיחה', type: 'number', sortable: true },
  { key: 'premium', header: 'פרמיה', type: 'number' },
  { key: 'status', header: 'סטטוס', type: 'custom', render: (r) => <Badge tone={r.status}>{label[r.status]}</Badge> },
  { key: 'action', header: 'פעולה', type: 'custom', render: () => <LinkButton>לפרטים</LinkButton> },
];
const meta: Meta = { title: 'Data/DataTable' };
export default meta;
export const Policies: StoryObj = { render: () => {
  const [sort, setSort] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: 'opened', direction: 'desc' });
  const sorted = useMemo(() => [...rows].sort((a, b) => (String(a[sort.key as keyof Row]) > String(b[sort.key as keyof Row]) ? 1 : -1) * (sort.direction === 'asc' ? 1 : -1)), [sort]);
  const [page, setPage] = useState(1);
  return (<div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
    <DataTable columns={columns} rows={sorted} rowKey={(r) => r.id} sort={sort} selectedKey="733035749"
      onSortChange={(key) => setSort((s) => ({ key, direction: s.key === key && s.direction === 'desc' ? 'asc' : 'desc' }))} />
    <Pagination page={page} pageCount={4} onChange={setPage} /></div>);
} };
export const Empty: StoryObj = { render: () => <DataTable columns={columns} rows={[]} rowKey={(r) => r.id} empty={<EmptyState title="אין פוליסות להצגה" text="פוליסות שיופקו ללקוח יופיעו כאן" />} /> };
