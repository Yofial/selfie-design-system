import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import s from './Checkbox.module.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { children?: ReactNode };

/** Independent yes/no choice or consent. The whole row is clickable. */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ children, className, ...rest }, ref) {
  return (
    <label className={[s.row, className].filter(Boolean).join(' ')}>
      <input ref={ref} type="checkbox" className={[s.control, s.checkbox].join(' ')} {...rest} />
      {children && <span className={s.label}>{children}</span>}
    </label>
  );
});

/** One choice from 2–5 visible options (group radios with the same `name`). */
export const Radio = forwardRef<HTMLInputElement, CheckboxProps>(function Radio({ children, className, ...rest }, ref) {
  return (
    <label className={[s.row, className].filter(Boolean).join(' ')}>
      <input ref={ref} type="radio" className={[s.control, s.radio].join(' ')} {...rest} />
      {children && <span className={s.label}>{children}</span>}
    </label>
  );
});
