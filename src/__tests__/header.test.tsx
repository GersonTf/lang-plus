import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '@/components/organisms/Header';

// Create a basic mock for the TranslationContext
vi.mock('@/app/contexts/TranslationContext', () => {
  return {
    useTranslation: () => ({
      t: {
        navigation: {
          about: 'About',
          classes: 'Classes',
          contact: 'Contact',
        },
        header: {
          title: 'A Plus Languages',
          langSwitch: 'Language',
        },
      },
      locale: 'en',
    }),
  };
});

describe('Header Component', () => {
  it('renders the site title', () => {
    render(<Header />);
    
    const siteTitle = screen.getByText('A Plus Languages');
    expect(siteTitle).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Header />);
    
    const aboutLink = screen.getByText('About');
    const classesLink = screen.getByText('Classes');
    const contactLink = screen.getByText('Contact');
    
    expect(aboutLink).toBeInTheDocument();
    expect(classesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
}); 