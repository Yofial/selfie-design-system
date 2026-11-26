import type { SVGProps } from 'react';
import { icons, type IconName } from './icons';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  /** Which icon from the library. */
  name: IconName;
  /** Rendered size in px. Defaults to the icon's artboard size (16 or 24). */
  size?: 16 | 20 | 24 | 32;
  /**
   * Accessible name. Leave it out for decorative icons (next to a text label):
   * the icon is then hidden from assistive technology.
   */
  label?: string;
}

/** An icon from the Selfie library. It takes the text colour of its container. */
export function Icon({ name, size, label, ...rest }: IconProps) {
  const { viewBox, art } = icons[name];
  const px = size ?? viewBox;
  return (
    <svg
      width={px}
      height={px}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      fill="none"
      focusable="false"
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
      {...rest}
    >
      {art}
    </svg>
  );
}
