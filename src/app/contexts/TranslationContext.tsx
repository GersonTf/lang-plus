'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Locale, getTranslation, TranslationObject } from '@/i18n';

/**
 * Type definition for the translation context
 */
type TranslationContextType = {
  /** The translation object for the current locale */
  t: TranslationObject;
  /** The current locale code */
  locale: Locale;
};

/**
 * Context for providing translations throughout the application
 */
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

/**
 * Provider component that makes translations available to all children
 */
export const TranslationProvider = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) => {
  const t = getTranslation(locale);

  return (
    <TranslationContext.Provider value={{ t, locale }}>{children}</TranslationContext.Provider>
  );
};

/**
 * Hook to access translations in client components
 * @returns The translation object and current locale
 * @throws Error if used outside of TranslationProvider
 */
export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
