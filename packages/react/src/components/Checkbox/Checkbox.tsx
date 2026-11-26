import { forwardRef, type InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** The label. It is clickable too. */
  label: string;
  /** Hide the label visually (Figma "Show label" off). It stays the accessible name. */
  hideLabel?: boolean;
}

/**
 * An independent yes/no choice, or consent. Figma: `Checkbox` with Type=Checkbox.
 * For one choice out of 2–5 visible options use `RadioGroup`; more than 5 → Dropdown.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, hideLabel, className, ...rest },
  ref,
) {
  return (
    <label className={cx(styles.choice, className)}>
      <input ref={ref} type="checkbox" className={styles.native} {...rest} />
      <span className={cx(styles.box, styles.square)} aria-hidden="true">
        <span className={styles.mark} />
      </span>
      <span className={cx(styles.label, hideLabel && styles.hiddenLabel)}>{label}</span>
    </label>
  );
});
