import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next/navigation
vi.mock('next/navigation', () => {
  return {
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
    }),
    useSearchParams: () => ({
      get: vi.fn(),
    }),
    usePathname: () => '/',
  };
});

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => {
    return React.createElement('img', { src, alt, ...props });
  },
}));

// Create a mock for the TranslationContext
vi.mock('@/app/contexts/TranslationContext', () => {
  return {
    useTranslation: () => ({
      t: {
        hero: {
          title: 'Personalized <highlight>Online</highlight> Language Lessons',
          description: 'Transform your language skills with one-on-one lessons from a native speaker.',
          buttons: {
            consultation: 'Book Free Consultation',
            explore: 'Explore Classes',
          },
        },
        header: {
          title: 'A Plus Languages',
        },
        navigation: {
          about: 'About',
          classes: 'Classes',
          contact: 'Contact',
        },
      },
      locale: 'en',
    }),
    TranslationProvider: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
  };
}); 