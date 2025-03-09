'use client';

import { useTranslation } from '../contexts/TranslationContext';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="about" 
      className="bg-section-primary shadow-standard rounded-xl border border-standard"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <h2 
          id="about-heading" 
          className="heading-primary text-2xl sm:text-3xl mb-6 sm:mb-8 md:mb-10"
        >
          {t.about.title}
        </h2>
        <p className="text-primary text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl">
          {t.about.description}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {t.about.benefits.map((benefit: string, index: number) => (
            <li key={index} className="flex items-center gap-2 sm:gap-3 text-primary text-base sm:text-lg p-4 sm:p-6 bg-section-secondary rounded-lg border border-standard shadow-standard">
              <span className="text-heading font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection; 