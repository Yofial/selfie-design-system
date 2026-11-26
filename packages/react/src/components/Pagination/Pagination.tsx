import { ChevronLeft, ChevronRight } from '../../icons';
import s from './Pagination.module.css';

export type PaginationProps = { page: number; pageCount: number; onChange: (page: number) => void; maxPages?: number; 'aria-label'?: string };

/** Paging for tables and lists. RTL: page 1 and "previous" on the right. */
export function Pagination({ page, pageCount, onChange, maxPages = 5, ...aria }: PaginationProps) {
  const start = Math.max(1, Math.min(page - Math.floor(maxPages / 2), pageCount - maxPages + 1));
  const pages = Array.from({ length: Math.min(maxPages, pageCount) }, (_, i) => start + i);
  return (
    <nav className={s.nav} aria-label={aria['aria-label'] ?? 'דפדוף'}>
      <button type="button" className={s.arrow} aria-label="הקודם" disabled={page <= 1} onClick={() => onChange(page - 1)}><ChevronRight /></button>
      {pages.map((p) => (
        <button key={p} type="button" className={[s.page, p === page && s.current].filter(Boolean).join(' ')} aria-current={p === page ? 'page' : undefined} onClick={() => onChange(p)}>{p}</button>
      ))}
      <button type="button" className={s.arrow} aria-label="הבא" disabled={page >= pageCount} onClick={() => onChange(page + 1)}><ChevronLeft /></button>
    </nav>
  );
}
