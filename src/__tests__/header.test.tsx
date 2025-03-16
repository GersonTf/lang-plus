import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '@/components/organisms/Header';
import { Locale, TranslationObject } from '@/i18n';

// Mock translations for testing
const mockTranslations: TranslationObject = {
  navigation: {
    about: 'About',
    classes: 'Classes',
    contact: 'Contact',
  },
  header: {
    title: 'A Plus Languages',
    langSwitch: 'Language',
  },
  hero: {
    title: 'Learn Languages Online',
    description: 'Professional language lessons with native speakers',
    buttons: {
      consultation: 'Free Consultation',
      explore: 'Explore Classes',
    },
    trust: {
      title: 'Why Choose Us',
      items: ['Native Speakers', 'Flexible Schedule', 'Personalized Approach'],
    },
  },
  about: {
    title: 'About Us',
    description: 'We are a team of professional language teachers',
    benefits: ['Professional Teachers', 'Flexible Schedule', 'Personalized Approach'],
  },
  classes: {
    title: 'Our Classes',
    types: [
      {
        title: 'Business English',
        description: 'For professionals who need English for work',
      },
    ],
    cta: {
      title: 'Ready to start?',
      description: 'Book your free consultation today',
      button: 'Contact Us',
    },
  },
  cta: {
    title: 'Start Learning Today',
    description: 'Book your free consultation',
    button: 'Contact Us',
  },
  stats: {
    title: 'Our Stats',
    items: [
      { number: '100+', label: 'Students' },
      { number: '5+', label: 'Years' },
      { number: '10+', label: 'Countries' },
    ],
  },
  footer: {
    contact: 'Contact Us',
    copyright: '© 2023 A Plus Languages',
  },
};

describe('Header Component', () => {
  it('renders the site title', () => {
    render(<Header translations={mockTranslations} locale={'en' as Locale} />);

    const siteTitle = screen.getByText('A Plus Languages');
    expect(siteTitle).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Header translations={mockTranslations} locale={'en' as Locale} />);

    const aboutLink = screen.getByText('About');
    const classesLink = screen.getByText('Classes');
    const contactLink = screen.getByText('Contact');

    expect(aboutLink).toBeInTheDocument();
    expect(classesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
