import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/atoms/Button';

describe('Button Component', () => {
  it('renders a button with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-[#2563eb]'); // Default primary variant
  });

  it('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-[#2563eb]');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-[#F4C635]');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-2');
    expect(screen.getByRole('button')).toHaveClass('border-[#2563eb]');

    rerender(<Button variant="text">Text</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="xs">XS</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-xs');

    rerender(<Button size="sm">SM</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-sm');

    rerender(<Button size="md">MD</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-base');

    rerender(<Button size="lg">LG</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-lg');
  });

  it('renders as an anchor tag when href is provided', () => {
    render(<Button href="https://example.com">Link Button</Button>);

    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('applies additional className when provided', () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('renders with an icon on the right by default', () => {
    render(<Button icon={<span data-testid="test-icon">→</span>}>With Icon</Button>);

    const button = screen.getByRole('button');
    const icon = screen.getByTestId('test-icon');

    expect(icon).toBeInTheDocument();
    expect(button.firstChild).not.toBe(icon); // Icon should be after text (on the right)
  });

  it('renders with an icon on the left when specified', () => {
    render(
      <Button icon={<span data-testid="test-icon">←</span>} iconPosition="left">
        With Left Icon
      </Button>
    );

    const button = screen.getByRole('button');
    const icon = screen.getByTestId('test-icon');

    expect(icon).toBeInTheDocument();
    expect(button.firstChild).toBe(icon.parentElement); // Icon should be before text (on the left)
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles mouse enter and leave events for hover effects', () => {
    render(<Button>Hover Me</Button>);
    const button = screen.getByRole('button');

    // Before hover
    expect(button).not.toHaveClass('-translate-y-1');

    // On hover
    fireEvent.mouseEnter(button);
    expect(button).toHaveClass('-translate-y-1');

    // After hover
    fireEvent.mouseLeave(button);
    expect(button).not.toHaveClass('-translate-y-1');
  });
});
