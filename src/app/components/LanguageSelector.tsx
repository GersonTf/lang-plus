'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, localeNames, localeFlags, Locale, getLocaleFromPath, getPathWithoutLocale } from '@/i18n';

interface LanguageSelectorProps {
  currentLocale: Locale;
}

const LanguageSelector = ({ currentLocale }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get path without locale prefix for switching
  const pathWithoutLocale = getPathWithoutLocale(pathname);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-gray-600 rounded-md px-2 py-1 text-xs transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Globe icon with blue color */}
        <svg className="w-3.5 h-3.5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium">{currentLocale.toUpperCase()}</span>
        <svg
          className="h-3 w-3 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-50 overflow-hidden border border-gray-100 backdrop-blur-sm">
          <ul className="py-0.5" role="menu" aria-orientation="vertical">
            {locales.map((locale) => (
              <li key={locale} className="relative">
                <Link
                  href={`/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`}
                  className={`flex items-center w-full px-3 py-1.5 text-xs ${
                    locale === currentLocale
                      ? 'bg-blue-50 text-blue-900 font-medium border-l-2 border-l-blue-900 pl-2.5'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800 hover:border-l-2 hover:border-l-blue-900 hover:pl-2.5'
                  } transition-all duration-100`}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  <span>{localeNames[locale]}</span>
                  {locale === currentLocale && (
                    <span className="absolute right-2 text-blue-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 