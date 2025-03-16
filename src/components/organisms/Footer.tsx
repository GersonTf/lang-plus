'use client';

import { useTranslation } from '../../app/contexts/TranslationContext';
import Link from 'next/link';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="bg-slate-50 border-t border-slate-100" role="contentinfo" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and contact */}
          <div className="flex items-center">
            <div className="h-1 w-6 bg-primary rounded-full mr-2"></div>
            <div className="text-xl font-bold text-primary">A+</div>
            <div className="text-xl font-bold text-heading ml-1">Languages</div>
          </div>

          {/* Contact button */}
          <a 
            href="mailto:andy@a-plus-languages.com" 
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            Contact Us
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            {t.footer.copyright.replace('{year}', currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
