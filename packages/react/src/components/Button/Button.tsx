import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import s from './Button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** primary = the one main step forward in a view (yellow). secondary = every other action. */
  variant?: 'primary' | 'secondary';
  /** lg 50px (page CTAs, modals) · md 40px (default) · sm 28px (dense rows) */
  size?: 'lg' | 'md' | 'sm';
  /** 16px icon shown at the end of the label (left in RTL). */
  icon?: ReactNode;
};

/** Selfie Button. Label must be a verb that says what happens ("שמירה", "להמשך"). */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'secondary', size = 'md', icon, className, children, type = 'button', ...rest }, ref,
) {
  return (
    <button ref={ref} type={type} className={[s.button, s[variant], s[size], className].filter(Boolean).join(' ')} {...rest}>
      <span>{children}</span>
      {icon && <span className={s.icon}>{icon}</span>}
    </button>
  );
});
