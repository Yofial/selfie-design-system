import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Radio, RadioGroup } from '../Radio';
import { axeViolations } from '../../test/axe';

describe('Checkbox', () => {
  it('toggles when its label is clicked', async () => {
    const { container } = render(<Checkbox label="אני מאשר/ת את התנאים" />);
    const box = screen.getByRole('checkbox', { name: 'אני מאשר/ת את התנאים' });
    expect(box).not.toBeChecked();
    await userEvent.click(screen.getByText('אני מאשר/ת את התנאים'));
    expect(box).toBeChecked();
    expect(await axeViolations(container)).toEqual([]);
  });

  it('toggles with the space key', async () => {
    render(<Checkbox label="תזכורת" />);
    await userEvent.tab();
    await userEvent.keyboard(' ');
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});

describe('RadioGroup', () => {
  const Options = (props: { onChange?: (v: string) => void; defaultValue?: string }) => (
    <RadioGroup legend="סוג מוצר" {...props}>
      <Radio value="elementary" label="אלמנטרי" />
      <Radio value="pension" label="פנסיה וגמל" />
      <Radio value="life" label="חיים" disabled />
    </RadioGroup>
  );

  it('is a named group with one selection', async () => {
    const onChange = vi.fn();
    const { container } = render(<Options onChange={onChange} defaultValue="elementary" />);
    expect(screen.getByRole('group', { name: 'סוג מוצר' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'אלמנטרי' })).toBeChecked();
    await userEvent.click(screen.getByText('פנסיה וגמל'));
    expect(screen.getByRole('radio', { name: 'פנסיה וגמל' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'אלמנטרי' })).not.toBeChecked();
    expect(onChange).toHaveBeenCalledWith('pension', expect.anything());
    expect(await axeViolations(container)).toEqual([]);
  });

  it('shares one generated name and respects disabled options', async () => {
    render(<Options />);
    const radios = screen.getAllByRole('radio');
    const names = new Set(radios.map((r) => r.getAttribute('name')));
    expect(names.size).toBe(1);
    await userEvent.click(screen.getByText('חיים'));
    expect(screen.getByRole('radio', { name: 'חיים' })).not.toBeChecked();
  });

  it('works controlled', async () => {
    function Controlled() {
      const [value, setValue] = useState('pension');
      return (
        <>
          <RadioGroup legend="סוג מוצר" value={value} onChange={setValue}>
            <Radio value="elementary" label="אלמנטרי" />
            <Radio value="pension" label="פנסיה וגמל" />
          </RadioGroup>
          <output>{value}</output>
        </>
      );
    }
    render(<Controlled />);
    await userEvent.click(screen.getByText('אלמנטרי'));
    expect(screen.getByRole('status')).toHaveTextContent('elementary');
  });
});
