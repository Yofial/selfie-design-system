import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Field } from './Field';
import { axeViolations } from '../../test/axe';

describe('Field', () => {
  it('labels the input and describes it with the helper', async () => {
    const { container } = render(<Field label="מספר פוליסה" helper="9 ספרות" />);
    const input = screen.getByRole('textbox', { name: 'מספר פוליסה' });
    expect(input).toHaveAccessibleDescription('9 ספרות');
    expect(await axeViolations(container)).toEqual([]);
  });

  it('shows an error instead of the helper and marks the input invalid', async () => {
    const { container } = render(
      <Field label="מספר פוליסה" helper="9 ספרות" error="יש להזין 9 ספרות" />,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('יש להזין 9 ספרות');
    expect(screen.queryByText('9 ספרות')).not.toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute('data-state', 'error');
    expect(await axeViolations(container)).toEqual([]);
  });

  it('keeps a hidden label as the accessible name', () => {
    render(<Field label="חיפוש" hideLabel />);
    expect(screen.getByRole('textbox', { name: 'חיפוש' })).toBeInTheDocument();
  });

  it('accepts typing and forwards the ref', async () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Field label="שם" ref={ref} />);
    await userEvent.type(screen.getByRole('textbox'), 'דנה');
    expect(ref.current?.value).toBe('דנה');
  });

  it('has no icon when read-only', () => {
    const { container } = render(<Field label="שם" icon="calendar" readOnly defaultValue="דנה" />);
    expect(container.querySelector('svg')).toBeNull();
    expect(container.firstElementChild).toHaveAttribute('data-state', 'readonly');
  });
});
