import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode, type Ref } from 'react';
import { Icon, type IconName } from '../Icon';
import { VisuallyHidden } from '../../utils/VisuallyHidden';
import { cx } from '../../utils/cx';
import styles from './LinkButton.module.css';

export type LinkButtonSize = 'lg' | 'md' | 'sm';

interface CommonProps {
  /** Text size: `lg` 18, `md` 14, `sm` 12. */
  size?: LinkButtonSize;
  /** Optional 16px icon at the end of the label. */
  icon?: IconName;
  children: ReactNode;
}

type AsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    /** With `href` it renders a link (navigation). Without it, a button (an action). */
    href: string;
    /** Opens in a new tab: adds `icon/external-link` and tells screen readers. */
    external?: boolean;
    disabled?: never;
  };

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    external?: never;
  };

export type LinkButtonProps = AsLink | AsButton;

/** Hebrew screen-reader hint for links that open a new tab. */
const NEW_TAB_HINT = '(נפתח בכרטיסייה חדשה)';

/**
 * A text action or navigation inside content. Purple means interactive.
 * Figma: `Link button` (Size × State). Not for the main CTA or destructive actions.
 */
export const LinkButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkButtonProps>(
  function LinkButton(props, ref) {
    const { size = 'md', icon, className, children } = props;
    const classes = cx(styles.link, styles[size], className);

    if (props.href !== undefined) {
      const { size: _s, icon: _i, external, children: _c, className: _cn, ...rest } = props;
      const shownIcon = icon ?? (external ? 'external-link' : undefined);
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...rest}
        >
          <span>{children}</span>
          {external && <VisuallyHidden>{NEW_TAB_HINT}</VisuallyHidden>}
          {shownIcon && <Icon name={shownIcon} className={styles.icon} />}
        </a>
      );
    }

    const { size: _s, icon: _i, children: _c, className: _cn, type = 'button', ...rest } = props;
    return (
      <button ref={ref as Ref<HTMLButtonElement>} type={type} className={classes} {...rest}>
        <span>{children}</span>
        {icon && <Icon name={icon} className={styles.icon} />}
      </button>
    );
  },
);
