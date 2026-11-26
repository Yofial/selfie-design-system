import type { ReactNode } from 'react';
import s from './EmptyState.module.css';

export type EmptyStateProps = { title: string; text?: string; illustration?: ReactNode; action?: ReactNode };
/** Shown when a table, list or widget has no data (not for errors). */
export function EmptyState({ title, text, illustration, action }: EmptyStateProps) {
  return (
    <div className={s.empty} role="status">
      {illustration}
      <p className={s.title}>{title}</p>
      {text && <p className={s.text}>{text}</p>}
      {action}
    </div>
  );
}
