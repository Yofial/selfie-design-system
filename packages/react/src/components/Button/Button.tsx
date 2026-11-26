import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon';
import { cx } from '../../utils/cx';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'lg' | 'md' | 'sm';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** `primary` (yellow): the one main step forward in a view. `secondary` (outlined): every other action. */
  variant?: ButtonVariant;
  /** `lg` 50px: page CTAs and modals. `md` 40px: the default in cards and tables. `sm` 28px: dense rows. */
  size?: ButtonSize;
  /** Optional 16px icon, shown at the end of the label. */
  icon?: IconName;
}

/**
 * The main way to act. Figma: `Button` (Variant × Size × State).
 * The label is a verb that says what happens ("שמירה", "להמשך"), never "לחצו כאן".
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'secondary', size = 'md', icon, type = 'button', className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx(styles.button, styles[variant], styles[size], className)}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
      {icon && <Icon name={icon} className={styles.icon} />}
    </button>
  );
});
