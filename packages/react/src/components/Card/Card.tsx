import type { HTMLAttributes, ReactNode } from 'react';
import s from './Card.module.css';

export type CardProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  /** elevated (shadow) on the page canvas · outlined inside other surfaces or dense grids */
  variant?: 'elevated' | 'outlined';
  title?: ReactNode;
  /** Usually a LinkButton, shown at the end of the header. */
  action?: ReactNode;
  footer?: ReactNode;
};

/** Container for one widget or block. Never nest Cards. */
export function Card({ variant = 'elevated', title, action, footer, children, className, ...rest }: CardProps) {
  return (
    <section className={[s.card, s[variant], className].filter(Boolean).join(' ')} {...rest}>
      {(title || action) && (<header className={s.header}>{title && <h3 className={s.title}>{title}</h3>}{action}</header>)}
      <div className={s.body}>{children}</div>
      {footer && <footer className={s.footer}>{footer}</footer>}
    </section>
  );
}
