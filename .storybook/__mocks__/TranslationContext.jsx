'use client';

import React, { createContext, useContext } from 'react';

/**
 * @typedef {'en' | 'es' | 'zh' | 'ja' | 'ko'} Locale
 */

/**
 * @typedef {Object} TranslationContextType
 * @property {Object} t - Translation object
 * @property {Locale} locale - Current locale
 */

// Create mock context
/** @type {React.Context<TranslationContextType|undefined>} */
const TranslationContext = createContext(undefined);

/**
 * Creates mock translations
 * @param {Locale} locale 
 * @returns {Object} Mock translations
 */
function createMockTranslations(locale = 'en') {
  return {
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
      title: 'Personalized <highlight>Online</highlight> Language Lessons',
      description: 'Transform your language skills with one-on-one lessons from a native speaker.',
      buttons: {
        consultation: 'Book Free Consultation',
        explore: 'Explore Classes',
      },
      trust: {
        bilingual: 'Bilingual Native',
        tools: 'Interactive Tools',
        rating: '5-Star Rating',
      },
    },
    about: {
      title: 'About A+ Languages',
      description: 'Professional language lessons with a focus on conversation and practical skills.',
      benefits: [
        'Personalized curriculum',
        'Flexible scheduling',
        'Native speaker teacher',
        'All levels welcome',
      ],
    },
    classes: {
      title: 'Our Classes',
      types: [
        {
          title: 'Individual Classes',
          description: 'One-on-one lessons tailored to your specific needs and goals.',
        },
        {
          title: 'Group Classes',
          description: 'Learn with friends or family members for a more interactive experience.',
        },
        {
          title: 'Business Classes',
          description: 'Specialized courses for professionals and companies.',
        },
        {
          title: 'Conversation Practice',
          description: 'Focus on speaking and listening skills with a native speaker.',
        },
      ],
      cta: {
        title: 'Start Learning Today',
        description: 'Contact us to schedule your first lesson and begin your language journey.',
        button: 'Get Started',
        benefits: 'Free consultation available',
      },
    },
    stats: {
      title: 'Our Track Record',
      items: [
        { number: '500+', label: 'Students Taught' },
        { number: '15+', label: 'Years Experience' },
        { number: '100%', label: 'Satisfaction' },
      ],
    },
    cta: {
      title: 'Ready to Improve Your Language Skills?',
      description: 'Get in touch today to schedule your first lesson or ask any questions.',
      button: 'Contact Us',
    },
    footer: {
      contact: 'Contact:',
      copyright: '© {year} A+ Languages. All rights reserved.',
    },
  };
}

/**
 * Translation provider component - mocks the real one
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {Locale} [props.locale='en']
 */
export function TranslationProvider({ children, locale = 'en' }) {
  const t = createMockTranslations(locale);
  const value = { t, locale };
  
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

/**
 * Hook to access translations in components 
 * @returns {TranslationContextType}
 */
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
} 