'use client';

import { useEffect } from 'react';

interface LangAttributeSetterProps {
  lang: string;
}

/**
 * Client component that sets the HTML lang attribute dynamically
 * Used to fix hydration issues with nested HTML elements
 */
export default function LangAttributeSetter({ lang }: LangAttributeSetterProps) {
  useEffect(() => {
    // Set the lang attribute on the html element
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
