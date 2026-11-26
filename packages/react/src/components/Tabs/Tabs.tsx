import { useRef, type KeyboardEvent, type ReactNode } from 'react';
import { CountBadge } from '../Badge/Badge';
import s from './Tabs.module.css';

export type TabItem = { id: string; label: ReactNode; count?: number; disabled?: boolean; soon?: boolean };
export type TabsProps = { items: TabItem[]; value: string; onChange: (id: string) => void; size?: 'desktop' | 'mobile'; 'aria-label'?: string };

function useRovingKeys(items: TabItem[], value: string, onChange: (id: string) => void) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKeyDown = (e: KeyboardEvent) => {
    const enabled = items.map((t, i) => ({ t, i })).filter(({ t }) => !t.disabled && !t.soon);
    const cur = enabled.findIndex(({ t }) => t.id === value);
    // RTL: ArrowLeft moves forward, ArrowRight moves back.
    const delta = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = enabled[(cur + delta + enabled.length) % enabled.length];
    onChange(next.t.id); refs.current[next.i]?.focus();
  };
  return { refs, onKeyDown };
}

/** Underline tabs: switch between views of the same page. */
export function Tabs({ items, value, onChange, size = 'desktop', ...aria }: TabsProps) {
  const { refs, onKeyDown } = useRovingKeys(items, value, onChange);
  return (
    <div role="tablist" className={[s.bar, s[size]].join(' ')} onKeyDown={onKeyDown} {...aria}>
      {items.map((t, i) => {
        const selected = t.id === value; const off = t.disabled || t.soon;
        return (
          <button key={t.id} ref={(el) => { refs.current[i] = el; }} role="tab" type="button" aria-selected={selected} tabIndex={selected ? 0 : -1}
            disabled={off} className={[s.tab, selected && s.selected].filter(Boolean).join(' ')} onClick={() => onChange(t.id)}>
            <span>{t.label}</span>
            {t.soon ? <span className={s.soon}>בקרוב</span> : t.count !== undefined && <CountBadge count={t.count} />}
          </button>
        );
      })}
    </div>
  );
}

/** Segmented control: 2–4 options switching a filter or sub-view inside a card. */
export function SegmentedControl({ items, value, onChange, ...aria }: Omit<TabsProps, 'size'>) {
  const { refs, onKeyDown } = useRovingKeys(items, value, onChange);
  return (
    <div role="tablist" className={s.segmented} onKeyDown={onKeyDown} {...aria}>
      {items.map((t, i) => (
        <button key={t.id} ref={(el) => { refs.current[i] = el; }} role="tab" type="button" aria-selected={t.id === value} tabIndex={t.id === value ? 0 : -1}
          className={[s.segment, t.id === value && s.segmentSelected].filter(Boolean).join(' ')} onClick={() => onChange(t.id)}>
          {t.label}{t.count !== undefined && <CountBadge count={t.count} />}
        </button>
      ))}
    </div>
  );
}
