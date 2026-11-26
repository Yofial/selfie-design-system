import type { ReactNode } from 'react';
import { ChevronDown } from '../../icons';
import s from './DataTable.module.css';

export type Column<Row> = {
  key: string;
  header: string;
  /** text (words) · number (amounts, IDs, dates: LTR, tabular) · custom (render a Badge or LinkButton) */
  type?: 'text' | 'number' | 'custom';
  render?: (row: Row) => ReactNode;
  sortable?: boolean;
};
export type DataTableProps<Row> = {
  columns: Column<Row>[];
  rows: Row[];
  rowKey: (row: Row) => string;
  sort?: { key: string; direction: 'asc' | 'desc' };
  onSortChange?: (key: string) => void;
  selectedKey?: string;
  empty?: ReactNode;
  caption?: string;
};

/** List table. Put a FilterBar above and Pagination below. On mobile use cards instead. */
export function DataTable<Row extends Record<string, unknown>>({ columns, rows, rowKey, sort, onSortChange, selectedKey, empty, caption }: DataTableProps<Row>) {
  return (
    <div className={s.wrap}>
      <table className={s.table}>
        {caption && <caption className={s.caption}>{caption}</caption>}
        <thead><tr>{columns.map((c) => {
          const sorted = sort?.key === c.key;
          return (
            <th key={c.key} scope="col" aria-sort={sorted ? (sort!.direction === 'asc' ? 'ascending' : 'descending') : undefined}>
              {c.sortable && onSortChange
                ? <button type="button" className={s.sort} onClick={() => onSortChange(c.key)}>{c.header}{sorted && <ChevronDown className={sort!.direction === 'asc' ? s.asc : undefined} />}</button>
                : c.header}
            </th>);
        })}</tr></thead>
        <tbody>
          {rows.length === 0
            ? <tr><td colSpan={columns.length}>{empty}</td></tr>
            : rows.map((r) => (
              <tr key={rowKey(r)} aria-selected={selectedKey === rowKey(r) || undefined} className={selectedKey === rowKey(r) ? s.selected : undefined}>
                {columns.map((c) => (
                  <td key={c.key} className={c.type === 'number' ? s.number : undefined}>{c.render ? c.render(r) : String(r[c.key] ?? '')}</td>
                ))}
              </tr>))}
        </tbody>
      </table>
    </div>
  );
}
