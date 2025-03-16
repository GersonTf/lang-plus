import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionHeader from '@/components/molecules/SectionHeader';

describe('SectionHeader Component', () => {
  it('renders a header with title only', () => {
    render(<SectionHeader title="Test Title" />);

    const heading = screen.getByRole('heading', { name: /test title/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('heading-primary');

    // Should have decorative element by default
    const container = heading.parentElement;
    expect(container?.firstChild).not.toBe(heading);
  });

  it('renders with an optional subtitle', () => {
    render(<SectionHeader title="Test Title" subtitle="This is a test subtitle" />);

    expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument();
    expect(screen.getByText('This is a test subtitle')).toBeInTheDocument();
  });

  it('renders in centered mode when specified', () => {
    render(<SectionHeader title="Centered Title" subtitle="Centered subtitle" centered={true} />);

    const container = screen.getByText('Centered Title').closest('div');
    expect(container).toHaveClass('text-center');

    // Centered headers have different decorative elements
    const decorative = container?.firstChild;
    expect(decorative).toHaveClass('flex');
    expect(decorative).toHaveClass('justify-center');
  });

  it('does not render decorative elements when decorative=false', () => {
    render(<SectionHeader title="No Decoration" decorative={false} />);

    const heading = screen.getByRole('heading', { name: /no decoration/i });
    const container = heading.parentElement;

    // First child should be the heading itself (no decorative elements)
    expect(container?.firstChild).toBe(heading);
  });

  it('applies additional className when provided', () => {
    render(<SectionHeader title="Custom Class" className="custom-test-class" />);

    const container = screen.getByText('Custom Class').closest('div');
    expect(container).toHaveClass('custom-test-class');
  });

  it('applies an id to the heading when provided', () => {
    render(<SectionHeader title="With ID" id="test-section-id" />);

    const heading = screen.getByRole('heading', { name: /with id/i });
    expect(heading).toHaveAttribute('id', 'test-section-id');
  });

  it('applies different margin classes based on whether subtitle is present', () => {
    const { rerender } = render(<SectionHeader title="With Subtitle" subtitle="Has subtitle" />);

    let heading = screen.getByRole('heading');
    expect(heading).toHaveClass('mb-3');

    rerender(<SectionHeader title="No Subtitle" />);

    heading = screen.getByRole('heading');
    expect(heading).not.toHaveClass('mb-3');
  });
});
