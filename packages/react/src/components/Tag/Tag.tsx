import type { HTMLAttributes, ReactNode } from 'react';
import { CountBadge } from '../Badge/Badge';
import s from './Tag.module.css';

export type TagProps = HTMLAttributes<HTMLSpanElement> & { size?: 'md' | 'sm'; count?: number; children: ReactNode };
/** Category or product-line label on cards and lists. Not clickable; not a status (use Badge). */
export function Tag({ size = 'md', count, children, className, ...rest }: TagProps) {
  return (
    <span className={[s.tag, s[size], className].filter(Boolean).join(' ')} {...rest}>
      {children}{count !== undefined && <CountBadge count={count} size={size} />}
    </span>
  );
}
