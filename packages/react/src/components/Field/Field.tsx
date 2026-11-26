import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';
import s from './Field.module.css';

export type FieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string;
  /** Helper text below. With `error`, it must say how to fix the problem. */
  helper?: string;
  /** Error message; puts the field in the error state. */
  error?: string;
  /** Trailing icon: ChevronDown for selects, Calendar for dates, Search, Close to clear. */
  icon?: ReactNode;
};

/** Single-line input in the Selfie underline style. Use `readOnly` to display data without a line. */
export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, helper, error, icon, id, className, readOnly, disabled, ...rest }, ref,
) {
  const autoId = useId(); const inputId = id ?? autoId; const helpId = `${inputId}-help`;
  const msg = error ?? helper;
  return (
    <div className={[s.field, error && s.error, readOnly && s.readOnly, disabled && s.disabled, className].filter(Boolean).join(' ')}>
      {label && <label className={s.label} htmlFor={inputId}>{label}</label>}
      <div className={s.control}>
        <input ref={ref} id={inputId} className={s.input} readOnly={readOnly} disabled={disabled}
          aria-invalid={error ? true : undefined} aria-describedby={msg ? helpId : undefined} {...rest} />
        {icon && !readOnly && <span className={s.icon}>{icon}</span>}
      </div>
      {msg && <span id={helpId} className={s.helper} role={error ? 'alert' : undefined}>{msg}</span>}
    </div>
  );
});
