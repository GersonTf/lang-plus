'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Locale, getTranslation } from '@/i18n';

type TranslationContextType = {
  t: any;
  locale: Locale;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ 
  children, 
  locale 
}: { 
  children: ReactNode;
  locale: Locale;
}) => {
  const t = getTranslation(locale);

  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}; 