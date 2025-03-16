'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import LanguageSelector from '../molecules/LanguageSelector';
import { useTranslation } from '../../app/contexts/TranslationContext';

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale } = useTranslation();

  const navItems = [
    { name: t.navigation.about, href: '#about' },
    { name: t.navigation.classes, href: '#classes' },
    { name: t.navigation.contact, href: 'mailto:andy@a-plus-languages.com' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-standard border-b border-standard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Brand - left side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Logo className="w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px]" />
            <span className="heading-primary text-lg sm:text-xl md:text-2xl">{t.header.title}</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <LanguageSelector currentLocale={locale} />
            <Button
              variant="text"
              size="xs"
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-heading"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              }
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative py-2 font-medium transition-all duration-200 ease-in-out
                  ${hoveredItem === item.name ? 'text-heading -translate-y-0.5' : 'text-body-light'}
                  ${
                    hoveredItem === item.name && item.name !== t.navigation.contact
                      ? 'border-b-2 border-primary-darker'
                      : ''
                  }
                `}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSelector currentLocale={locale} />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="sm:hidden pt-4 pb-3 border-t border-gray-200 mt-3">
            <ul className="flex flex-col space-y-3">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-body hover:text-heading font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
