'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Contact', href: 'mailto:andy@a-plus-languages.com' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Brand - left side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="overflow-hidden rounded-full">
              <Image
                src="/images/aplusenglishLogo.jpg"
                alt="A Plus Languages Logo"
                width={60}
                height={60}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-[60px] md:h-[60px] object-cover"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-500">
              A Plus Languages
            </span>
          </div>

          {/* Mobile menu button */}
          <button 
            className="sm:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6 text-gray-600"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative py-2 font-medium transition-all duration-200 ease-in-out
                  ${hoveredItem === item.name 
                    ? 'text-blue-500 -translate-y-0.5' 
                    : 'text-gray-600'
                  }
                  ${hoveredItem === item.name && item.name !== 'Contact' 
                    ? 'border-b-2 border-blue-500' 
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
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="sm:hidden pt-4 pb-3 border-t border-gray-200 mt-3">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-600 hover:text-blue-500 font-medium"
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