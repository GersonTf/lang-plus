import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import LanguageSelector from '@/components/molecules/LanguageSelector';
// Rename unused imports with underscore prefix as suggested by the linter
import { usePathname } from 'next/navigation';

// Mock the next/navigation module
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({})),
  usePathname: vi.fn(() => '/en'),
}));

describe('LanguageSelector Component', () => {
  beforeEach(() => {
    cleanup();
    // Reset mocks between tests
    vi.clearAllMocks();
  });

  it('renders with the current locale', () => {
    render(<LanguageSelector locale="en" />);

    // Should show the current locale in uppercase
    expect(screen.getByText('EN')).toBeInTheDocument();

    // Should have a button with the globe icon
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', () => {
    render(<LanguageSelector locale="en" />);

    // Initially dropdown should be closed
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    // Click the button to open dropdown
    fireEvent.click(screen.getByRole('button'));

    // Now dropdown should be visible
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // All locales should be in the dropdown
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
    expect(screen.getByText('中文')).toBeInTheDocument();
    expect(screen.getByText('日本語')).toBeInTheDocument();
    expect(screen.getByText('한국어')).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', () => {
    render(
      <div>
        <LanguageSelector locale="en" />
        <div data-testid="outside-element">Outside Element</div>
      </div>
    );

    // Open the dropdown
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // Click outside the dropdown
    fireEvent.mouseDown(screen.getByTestId('outside-element'));

    // Dropdown should be closed
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('highlights the active locale in the dropdown', () => {
    render(<LanguageSelector locale="en" />);

    // Open the dropdown
    fireEvent.click(screen.getByRole('button'));

    // Get all list items
    const menuItems = screen.getAllByRole('menuitem');

    // Find the English item
    const englishItem = menuItems.find(item => item.textContent?.includes('English'));
    expect(englishItem).toHaveClass('bg-blue-50');
    expect(englishItem).toHaveClass('text-blue-900');

    // Other items should not have the active class
    const spanishItem = menuItems.find(item => item.textContent?.includes('Español'));
    expect(spanishItem).not.toHaveClass('bg-blue-50');
  });

  it('works with the currentLocale prop for backward compatibility', () => {
    render(<LanguageSelector locale="en" currentLocale="es" />);

    // Should use currentLocale (es) instead of locale (en)
    expect(screen.getByText('ES')).toBeInTheDocument();

    // Open dropdown
    fireEvent.click(screen.getByRole('button'));

    // Spanish should be highlighted
    const menuItems = screen.getAllByRole('menuitem');
    const spanishItem = menuItems.find(item => item.textContent?.includes('Español'));
    expect(spanishItem).toHaveClass('bg-blue-50');
  });

  it('handles locale changes when clicking on a language option', () => {
    // Mock Next.js pathname
    const usePathnameMock = vi.fn(() => '/en/some/page');
    vi.mocked(usePathname).mockImplementation(usePathnameMock);

    render(<LanguageSelector locale="en" />);

    // Open dropdown
    fireEvent.click(screen.getByRole('button'));

    // Find and click the Spanish option
    const menuItems = screen.getAllByRole('menuitem');
    const spanishItem = menuItems.find(item => item.textContent?.includes('Español'));

    expect(spanishItem).toBeInTheDocument();
    if (spanishItem) {
      // The link should point to the Spanish version of the current page
      expect(spanishItem).toHaveAttribute('href', '/es/some/page');

      // Click the Spanish option
      fireEvent.click(spanishItem);

      // Dropdown should close after selection
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    }
  });
});
