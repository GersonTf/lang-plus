import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from '@/components/atoms/Logo';

describe('Logo Component', () => {
  it('renders the logo with default sizing', () => {
    render(<Logo />);

    // The logo should be an SVG
    const svg = screen.getByRole('img', { name: /a plus languages logo/i });
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 512 512');
  });

  it('applies additional className when provided', () => {
    const testClass = 'w-24 h-24 custom-class';
    render(<Logo className={testClass} />);

    // Get the logo container using the wrapper of the SVG
    const logoContainer = screen.getByRole('img', { name: /a plus languages logo/i }).parentElement;
    expect(logoContainer).toHaveClass('w-24');
    expect(logoContainer).toHaveClass('h-24');
    expect(logoContainer).toHaveClass('custom-class');
  });

  it('renders with aria-label for accessibility', () => {
    render(<Logo />);

    // The SVG should have an accessible name
    const svg = screen.getByRole('img', { name: /a plus languages logo/i });
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-label', 'A Plus Languages Logo');
  });
});
