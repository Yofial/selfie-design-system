import type { SVGProps } from 'react';

/** UI icons from the studio's Agents 2024 file, 16px, stroke = currentColor. */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };
const base = (size = 16): SVGProps<SVGSVGElement> => ({
  width: size, height: size, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor',
  strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false,
});

export const ChevronDown = ({ size, ...p }: IconProps) => (<svg {...base(size)} {...p}><path d="M12.44 5.77L8 10.22 3.55 5.77" /></svg>);
export const ChevronUp = ({ size, ...p }: IconProps) => (<svg {...base(size)} {...p}><path d="M3.55 10.22L8 5.77l4.44 4.45" /></svg>);
/** Points left: the "forward" direction in RTL. */
export const ChevronLeft = ({ size, ...p }: IconProps) => (<svg {...base(size)} {...p}><path d="M10.22 3.55L5.77 8l4.45 4.44" /></svg>);
/** Points right: the "back" direction in RTL. */
export const ChevronRight = ({ size, ...p }: IconProps) => (<svg {...base(size)} {...p}><path d="M5.77 3.55L10.22 8l-4.45 4.44" /></svg>);
export const Close = ({ size, ...p }: IconProps) => (<svg {...base(size)} strokeWidth={1.5} {...p}><path d="M4 4l8 8M12 4l-8 8" /></svg>);
export const Search = ({ size, ...p }: IconProps) => (<svg {...base(size)} strokeWidth={1.3} {...p}><circle cx="7.3" cy="7.3" r="5.3" /><path d="M11.2 11.2l3 3" /></svg>);
export const Calendar = ({ size, ...p }: IconProps) => (<svg {...base(size)} {...p}><rect x="2.5" y="3.5" width="11" height="10.5" rx="1.5" /><path d="M10.5 2v3M5.5 2v3M2.5 7.5h11" /></svg>);
export const ExternalLink = ({ size, ...p }: IconProps) => (<svg {...base(size)} {...p}><path d="M9.5 2.5H13.5V6.5M7 9L13.3 2.7M12.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V5A1.5 1.5 0 014 3.5h2.5" /></svg>);
export const Bell = ({ size, ...p }: IconProps) => (<svg {...base(size)} {...p}><path d="M9.6 12.3a1.6 1.6 0 01-3.2 0M6.8 4V2.8a1.1 1.1 0 012.3 0V4M11.4 7.2a3.4 3.4 0 00-6.8 0c0 4.3-1.5 5.1-1.5 5.1h9.8s-1.5-.8-1.5-5.1z" /></svg>);
