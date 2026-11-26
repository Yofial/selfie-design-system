import {
  createContext,
  forwardRef,
  useContext,
  useState,
  type ChangeEvent,
  type FieldsetHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { cx } from '../../utils/cx';
import { useFieldId } from '../../utils/useId';
import choice from '../Checkbox/Checkbox.module.css';
import styles from './Radio.module.css';

interface GroupContext {
  name: string;
  value: string | undefined;
  disabled?: boolean;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroupContext = createContext<GroupContext | null>(null);

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'value'> {
  /** The option's value, unique within its group. */
  value: string;
  /** The label. It is clickable too. */
  label: string;
}

/** One option of a `RadioGroup`. Figma: `Checkbox` with Type=Radio. */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { value, label, className, disabled, onChange, ...rest },
  ref,
) {
  const group = useContext(RadioGroupContext);
  const isDisabled = disabled || group?.disabled;
  const groupProps = group
    ? {
        name: group.name,
        checked: group.value === value,
        disabled: isDisabled,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          if (isDisabled) return;
          group.onChange(value, e);
          onChange?.(e);
        },
      }
    : { disabled, onChange };

  return (
    <label className={cx(choice.choice, className)}>
      <input ref={ref} type="radio" value={value} className={choice.native} {...rest} {...groupProps} />
      <span className={cx(choice.box, choice.round)} aria-hidden="true">
        <span className={choice.mark} />
      </span>
      <span className={choice.label}>{label}</span>
    </label>
  );
});

export interface RadioGroupProps
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange' | 'defaultValue'> {
  /** The question, shown above the options (it is the group's accessible name). */
  legend: string;
  /** Form name shared by the options. Generated if left out. */
  name?: string;
  /** Selected value (controlled). */
  value?: string;
  /** Initially selected value (uncontrolled). */
  defaultValue?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  /** Lay the options out in a row instead of a column. */
  inline?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

/** One choice out of 2–5 visible options. More than 5 → Dropdown. */
export function RadioGroup({
  legend,
  name,
  value,
  defaultValue,
  onChange,
  inline,
  disabled,
  className,
  children,
  ...rest
}: RadioGroupProps) {
  const generatedName = useFieldId(name);
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const current = value !== undefined ? value : uncontrolled;

  return (
    <fieldset className={cx(styles.group, className)} disabled={disabled} {...rest}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={cx(styles.options, inline && styles.inline)}>
        <RadioGroupContext.Provider
          value={{
            name: generatedName,
            value: current,
            disabled,
            onChange: (v, e) => {
              if (value === undefined) setUncontrolled(v);
              onChange?.(v, e);
            },
          }}
        >
          {children}
        </RadioGroupContext.Provider>
      </div>
    </fieldset>
  );
}
