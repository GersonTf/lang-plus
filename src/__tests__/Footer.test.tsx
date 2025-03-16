import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/organisms/Footer';
import en from '@/i18n/locales/en.json';
import es from '@/i18n/locales/es.json';

describe('Footer Component', () => {
  it('renders the footer with correct content', () => {
    render(<Footer translations={en} locale="en" />);

    // Check for the logo text since there's no actual img element
    expect(screen.getByText('A+')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();

    // Check for contact button
    const contactButton = screen.getByRole('link', { name: /contact us at/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute('href', 'mailto:andy@a-plus-languages.com');

    // Check for copyright text with current year
    const currentYear = new Date().getFullYear().toString();
    expect(
      screen.getByText(content => {
        return content.includes(currentYear) && content.includes('A Plus Languages');
      })
    ).toBeInTheDocument();
  });

  it('applies the correct locale to the component', () => {
    render(<Footer translations={es} locale="es" />);

    // The footer container should have the appropriate locale
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    // Contact button should have the Spanish text
    expect(screen.getByText(es.footer.contact)).toBeInTheDocument();
  });

  it('renders the copyright with the current year', () => {
    render(<Footer translations={en} locale="en" />);

    const currentYear = new Date().getFullYear().toString();
    const copyright = screen.getByText(content => content.includes('© ' + currentYear));
    expect(copyright).toBeInTheDocument();
  });
});
