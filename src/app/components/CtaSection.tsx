'use client';

import { useState } from 'react';
import Button from './Button';
import { useTranslation } from '../contexts/TranslationContext';

const CtaSection = () => {
  const [_isEmailHovered, _setIsEmailHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      {/* CTA Section */}
      <section className="bg-section-highlight shadow-standard rounded-xl border border-standard">
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
          <h2 className="heading-primary text-2xl sm:text-3xl mb-4 sm:mb-6 md:mb-8">
            {t.cta.title}
          </h2>
          <p className="text-primary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {t.cta.description}
          </p>
          <Button
            href="mailto:andy@a-plus-languages.com?subject=Language%20Lesson%20Inquiry"
            variant="primary"
            size="lg"
          >
            {t.cta.button}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 border-t border-slate-200 mt-12 sm:mt-16 md:mt-20 text-body-light"
        role="contentinfo"
        aria-label="Site footer"
      >
        <p className="mb-4 sm:mb-6 text-base sm:text-lg">
          {t.footer.contact}{' '}
          <a
            href="mailto:andy@a-plus-languages.com"
            className="text-primary font-medium inline hover:underline transition-all duration-300"
            aria-label="Send email to andy@a-plus-languages.com"
          >
            andy@a-plus-languages.com
          </a>
        </p>
        <p className="text-sm sm:text-base">
          {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
        </p>
      </footer>
    </div>
  );
};

export default CtaSection;
