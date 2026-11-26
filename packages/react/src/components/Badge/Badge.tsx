import type { HTMLAttributes, ReactNode } from 'react';
import { Bell } from '../../icons';
import s from './Badge.module.css';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** warning = pending · error = rejected/debt · info = in process · success = approved/active · neutral = closed/draft */
  tone?: 'warning' | 'error' | 'info' | 'success' | 'neutral';
  size?: 'lg' | 'md' | 'sm';
  /** Icon before the label; defaults to a bell. Pass null to hide. */
  icon?: ReactNode | null;
  /** The status in words. Required: colour never carries meaning alone. */
  children: ReactNode;
};

/** Status of a record. */
export function Badge({ tone = 'neutral', size = 'md', icon, children, className, ...rest }: BadgeProps) {
  const ic = icon === undefined ? <Bell size={size === 'sm' ? 12 : 16} /> : icon;
  return (
    <span className={[s.badge, s[tone], s[size], className].filter(Boolean).join(' ')} {...rest}>
      {ic && <span className={s.icon}>{ic}</span>}{children}
    </span>
  );
}

export type ProductBadgeProps = HTMLAttributes<HTMLSpanElement> & { line: 'elementary' | 'pension'; children: ReactNode };
/** Product line of a policy: elementary (yellow) or pension & gemel (purple). */
export function ProductBadge({ line, children, className, ...rest }: ProductBadgeProps) {
  return <span className={[s.product, s[line], className].filter(Boolean).join(' ')} {...rest}>{children}</span>;
}

export type CountBadgeProps = HTMLAttributes<HTMLSpanElement> & { count: number; size?: 'md' | 'sm' };
/** A number on a tag or tab. Shows 99+ above 99. */
export function CountBadge({ count, size = 'md', className, ...rest }: CountBadgeProps) {
  return <span className={[s.count, s[`count-${size}`], className].filter(Boolean).join(' ')} {...rest}>{count > 99 ? '99+' : count}</span>;
}
