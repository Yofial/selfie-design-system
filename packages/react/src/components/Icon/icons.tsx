/**
 * Icon artwork exported from the Figma library "Selfie DS" (🎨 Foundations › Icons).
 * Colours are `currentColor`, so an icon takes the text colour of its container.
 * To add an icon: add it to Figma first, export it as SVG, then add it here.
 */
import type { ReactElement } from 'react';

interface IconArt {
  /** Native artboard size in the Figma file. */
  viewBox: 16 | 24;
  /** Figma node id of the source component. */
  figma: string;
  art: ReactElement;
}

const round = { strokeLinecap: 'round' as const, stroke: 'currentColor' };
const roundJoin = { ...round, strokeLinejoin: 'round' as const };

export const icons = {
  'chevron-down': {
    viewBox: 16,
    figma: '7:3',
    art: <path d="M12.4447 5.7749L7.99463 10.2246L3.55469 5.7749" {...round} />,
  },
  'chevron-up': {
    viewBox: 16,
    figma: '39:470',
    art: <path d="M3.54999 10.22L7.99999 5.77L12.44 10.22" {...round} />,
  },
  /** Points left: "forward" in RTL. */
  'chevron-left': {
    viewBox: 16,
    figma: '15:9',
    art: <path d="M10.2231 3.55481L5.77344 8.00488L10.2231 12.4448" {...round} />,
  },
  /** Points right: "back" in RTL. */
  'chevron-right': {
    viewBox: 16,
    figma: '7:6',
    art: <path d="M5.77686 3.55481L10.2266 8.00488L5.77686 12.4448" {...round} />,
  },
  close: {
    viewBox: 16,
    figma: '7:9',
    art: (
      <>
        <path d="M4 4L12 12" strokeWidth={1.5} {...round} />
        <path d="M12 4L4 12" strokeWidth={1.5} {...round} />
      </>
    ),
  },
  search: {
    viewBox: 16,
    figma: '7:13',
    art: (
      <path
        d="M2.66536 7.3335C2.66536 4.75617 4.7547 2.66683 7.33203 2.66683C9.90936 2.66683 11.9987 4.75617 11.9987 7.3335C11.9987 8.59079 11.5015 9.73196 10.693 10.5711C10.6701 10.5886 10.6482 10.6079 10.6273 10.6288C10.6064 10.6497 10.5872 10.6716 10.5696 10.6944C9.73049 11.5029 8.58933 12.0002 7.33203 12.0002C4.7547 12.0002 2.66536 9.91082 2.66536 7.3335ZM11.0772 12.0214L10.6273 11.5716C10.3878 11.3321 10.3686 10.9558 10.5696 10.6944C10.6115 10.6541 10.6526 10.613 10.693 10.5711C10.9544 10.3701 11.3307 10.3893 11.5701 10.6288L12.02 11.0786C11.7416 11.4267 11.4252 11.743 11.0772 12.0214ZM11.0772 12.0214L13.5273 14.4716C13.7876 14.7319 14.2098 14.7319 14.4701 14.4716C14.7305 14.2112 14.7305 13.7891 14.4701 13.5288L12.02 11.0786C12.841 10.0522 13.332 8.75017 13.332 7.3335C13.332 4.01979 10.6457 1.3335 7.33203 1.3335C4.01832 1.3335 1.33203 4.01979 1.33203 7.3335C1.33203 10.6472 4.01832 13.3335 7.33203 13.3335C8.74871 13.3335 10.0507 12.8425 11.0772 12.0214Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    ),
  },
  calendar: {
    viewBox: 16,
    figma: '7:16',
    art: (
      <>
        <path
          d="M1.60001 4C1.60001 3.57566 1.76858 3.16868 2.06864 2.86863C2.36869 2.56858 2.77566 2.4 3.20001 2.4H12.8C13.2243 2.4 13.6314 2.56858 13.9314 2.86863C14.2315 3.16868 14.4 3.57566 14.4 4V13.6C14.4 14.0243 14.2315 14.4314 13.9314 14.7314C13.6314 15.0315 13.2243 15.2 12.8 15.2H3.20001C2.77566 15.2 2.36869 15.0315 2.06864 14.7314C1.76858 14.4314 1.60001 14.0243 1.60001 13.6V4Z"
          strokeWidth={1.06667}
          {...roundJoin}
        />
        <path d="M11.2 0.800003V4" strokeWidth={1.06667} {...round} />
        <path d="M4.8 0.800003V4" strokeWidth={1.06667} {...round} />
        <path d="M1.60001 7.2H14.4" strokeWidth={1.06667} {...round} />
      </>
    ),
  },
  'external-link': {
    viewBox: 16,
    figma: '7:22',
    art: (
      <>
        <path
          d="M14.1167 6.76568V3.72405C14.1167 2.68849 13.2773 1.84905 12.2418 1.84905H9.22081M5.52814 10.4584L13.5778 2.40871"
          strokeWidth={0.96}
          {...roundJoin}
        />
        <path
          d="M6.24477 2.4H3.18595C1.86047 2.4 0.78595 3.47452 0.78595 4.8V12.8C0.78595 14.1255 1.86047 15.2 3.18595 15.2H11.1859C12.5115 15.2 13.5859 14.1255 13.5859 12.8V9.7412"
          strokeWidth={0.96}
          {...round}
        />
      </>
    ),
  },
  bell: {
    viewBox: 16,
    figma: '15:4',
    art: (
      <>
        <path
          d="M9.87211 13.1276C9.90364 13.2663 9.92027 13.4106 9.92027 13.5587C9.92027 14.6277 9.05364 15.4943 7.98459 15.4943C6.91555 15.4943 6.04892 14.6277 6.04892 13.5587C6.04892 13.4251 6.06244 13.2946 6.08825 13.1686"
          strokeWidth={0.955224}
          {...roundJoin}
        />
        <path
          d="M6.60788 3.2255V1.83713C6.60788 1.11982 7.19476 0.532928 7.91205 0.532928H8.05878C8.77607 0.532928 9.36295 1.11982 9.36295 1.83713V3.22562"
          strokeWidth={0.955224}
          {...roundJoin}
        />
        <path
          d="M12.0205 7.02108L12.0202 7.02265M12.0205 7.02108C12.0205 4.79167 10.2129 2.98439 7.98347 2.98439C5.75405 2.98439 3.94675 4.79167 3.94675 7.02108C3.94675 12.2138 2.16367 13.1276 2.16367 13.1276H13.8036C13.8036 13.1276 12.0205 12.2138 12.0205 7.02108Z"
          strokeWidth={0.955224}
          {...roundJoin}
        />
      </>
    ),
  },
  actions: {
    viewBox: 24,
    figma: '23:87',
    art: (
      <>
        <path
          d="M21.5 12C21.5 13.87 20.94 15.71 19.89 17.27C18.85 18.84 17.37 20.05 15.63 20.77C13.89 21.49 11.98 21.68 10.14 21.31C8.29999 20.95 6.60999 20.04 5.27999 18.71C3.94999 17.38 3.03999 15.69 2.67999 13.85C2.30999 12.01 2.49999 10.1 3.21999 8.36C3.93999 6.62 5.14999 5.14 6.71999 4.1C8.27999 3.05 10.12 2.5 12 2.5C18 2.5 21.5 7 21.5 12Z"
          strokeWidth={1.2}
          {...round}
        />
        <path d="M14.68 12H9.31M11.99 9.31V14.68" strokeWidth={1.2} {...round} />
      </>
    ),
  },
  menu: {
    viewBox: 24,
    figma: '23:91',
    art: (
      <>
        <path d="M20 7H4" strokeWidth={1.5} {...round} />
        <path d="M20 12H4" strokeWidth={1.5} {...round} />
        <path d="M20 17H4" strokeWidth={1.5} {...round} />
      </>
    ),
  },
} satisfies Record<string, IconArt>;

export type IconName = keyof typeof icons;
export const iconNames = Object.keys(icons) as IconName[];
