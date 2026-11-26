import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import s from './IconButton.module.css';

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  /** Accessible name; also shown as a native tooltip. Required. */
  label: string;
  icon: ReactNode;
  variant?: 'primary' | 'secondary';
};

/** Round 32px button with one icon (e.g. run search). */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, icon, variant = 'secondary', className, type = 'button', ...rest }, ref,
) {
  return (
    <button ref={ref} type={type} aria-label={label} title={label} className={[s.button, s[variant], className].filter(Boolean).join(' ')} {...rest}>
      {icon}
    </button>
  );
});
