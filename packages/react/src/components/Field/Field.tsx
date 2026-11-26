import { forwardRef, type InputHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon';
import { cx } from '../../utils/cx';
import { useFieldId } from '../../utils/useId';
import styles from './Field.module.css';

export interface FieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The field's name, shown above it. Always required: it is the accessible name too. */
  label: string;
  /** Hide the label visually (Figma "Show label" off). It is still read by screen readers. */
  hideLabel?: boolean;
  /** Help text below the field. */
  helper?: string;
  /**
   * Error message. When set, the field shows the Error state and this text replaces the helper.
   * Say how to fix it: "יש להזין 9 ספרות", not "שגיאה".
   */
  error?: string;
  /**
   * Icon at the end of the field: `chevron-down` for selects, `calendar` for dates,
   * `search` for search. It is decorative; the field must work without it.
   */
  icon?: IconName;
}

/**
 * A single-line input in Selfie's underline style. Figma: `Field`
 * (State = Default / Filled / Focus / Error / Disabled / Read-only).
 * Default, Filled and Focus come from the input itself; Error from `error`;
 * Disabled from `disabled`; Read-only from `readOnly` (shows data, no line).
 */
export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, hideLabel, helper, error, icon, id, className, disabled, readOnly, ...rest },
  ref,
) {
  const inputId = useFieldId(id);
  const messageId = `${inputId}-message`;
  const message = error ?? helper;
  const state = disabled ? 'disabled' : readOnly ? 'readonly' : error ? 'error' : undefined;

  return (
    <div className={cx(styles.field, className)} data-state={state}>
      <label htmlFor={inputId} className={cx(styles.label, hideLabel && styles.hiddenLabel)}>
        {label}
      </label>
      <div className={styles.control}>
        <input
          ref={ref}
          id={inputId}
          className={styles.input}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          {...rest}
        />
        {icon && !readOnly && <Icon name={icon} className={styles.icon} />}
      </div>
      {message && (
        <p id={messageId} className={styles.message}>
          {message}
        </p>
      )}
    </div>
  );
});
