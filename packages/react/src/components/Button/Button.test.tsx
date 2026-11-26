import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { IconButton } from '../IconButton';
import { LinkButton } from '../LinkButton';
import { axeViolations } from '../../test/axe';

describe('Button', () => {
  it('is a type="button" secondary md button by default', () => {
    render(<Button>שמירה</Button>);
    const button = screen.getByRole('button', { name: 'שמירה' });
    expect(button).toHaveAttribute('type', 'button');
    expect(button.className).toMatch(/secondary/);
    expect(button.className).toMatch(/md/);
  });

  it('applies variant and size', () => {
    render(
      <Button variant="primary" size="lg">
        להמשך
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/primary/);
    expect(button.className).toMatch(/lg/);
  });

  it('calls onClick, but not when disabled', async () => {
    const onClick = vi.fn();
    const { rerender } = render(<Button onClick={onClick}>שמירה</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
    rerender(
      <Button onClick={onClick} disabled>
        שמירה
      </Button>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('hides its icon from assistive technology', () => {
    const { container } = render(<Button icon="chevron-left">להמשך</Button>);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('button')).toHaveAccessibleName('להמשך');
  });
});

describe('IconButton', () => {
  it('uses the label as its accessible name', async () => {
    const { container } = render(<IconButton icon="search" label="חיפוש" />);
    expect(screen.getByRole('button', { name: 'חיפוש' })).toBeInTheDocument();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('LinkButton', () => {
  it('renders a link with href and a button without', () => {
    render(
      <>
        <LinkButton href="/policies">לכל הפוליסות</LinkButton>
        <LinkButton onClick={() => {}}>לפרטים נוספים</LinkButton>
      </>,
    );
    expect(screen.getByRole('link', { name: 'לכל הפוליסות' })).toHaveAttribute('href', '/policies');
    expect(screen.getByRole('button', { name: 'לפרטים נוספים' })).toHaveAttribute('type', 'button');
  });

  it('marks external links for sighted and screen-reader users', async () => {
    const { container } = render(
      <LinkButton href="https://www.menora.co.il" external>
        אתר מנורה
      </LinkButton>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAccessibleName('אתר מנורה (נפתח בכרטיסייה חדשה)');
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(await axeViolations(container)).toEqual([]);
  });
});
