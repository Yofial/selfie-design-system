import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon';
import { cx } from '../../utils/cx';
import styles from './IconButton.module.css';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** The one icon shown. */
  icon: IconName;
  /** Required accessible name, e.g. "חיפוש". On desktop, also show it in a Tooltip. */
  label: string;
  /** `primary` (yellow) counts as the view's one primary action. */
  variant?: 'primary' | 'secondary';
}

/** A round 32px button with one icon. Figma: `Icon button` (Variant × State). */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, label, variant = 'secondary', type = 'button', className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      className={cx(styles.button, styles[variant], className)}
      {...rest}
    >
      <Icon name={icon} size={16} />
    </button>
  );
});
