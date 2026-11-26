import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import s from './LinkButton.module.css';

type Common = { size?: 'lg' | 'md' | 'sm'; icon?: ReactNode; children: ReactNode };
export type LinkButtonProps = Common & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

/** Text action or navigation inside content (purple = interactive). Not for the main CTA. */
export function LinkButton({ size = 'md', icon, children, className, ...rest }: LinkButtonProps) {
  const cls = [s.link, s[size], className].filter(Boolean).join(' ');
  const inner = (<>{children}{icon && <span className={s.icon}>{icon}</span>}</>);
  if ('href' in rest && rest.href) return <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{inner}</a>;
  return <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{inner}</button>;
}
