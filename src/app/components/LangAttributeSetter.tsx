'use client';

import { useEffect } from 'react';

/**
 * Props for the LangAttributeSetter component
 */
interface LangAttributeSetterProps {
  /** The language code to set on the HTML element */
  lang: string;
}

/**
 * Client component that dynamically sets the HTML lang attribute
 *
 * This component helps with accessibility and SEO by ensuring the
 * HTML lang attribute matches the current content language.
 * It runs only on the client side after hydration.
 */
export default function LangAttributeSetter({ lang }: LangAttributeSetterProps) {
  useEffect(() => {
    // Update the HTML element's lang attribute with the current language
    document.documentElement.lang = lang;
  }, [lang]);

  // This component doesn't render anything
  return null;
}
