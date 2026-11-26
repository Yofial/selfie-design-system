import type { ReactNode } from 'react';
import styles from './VisuallyHidden.module.css';

/** Text read by screen readers but not shown. */
export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className={styles.hidden}>{children}</span>;
}
