'use client';

import { useTranslation } from '../../app/contexts/TranslationContext';
import SectionHeader from '../molecules/SectionHeader';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <SectionHeader id="about-heading" title={t.about.title} subtitle={t.about.description} />

        <div className="mt-6 sm:mt-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {t.about.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <span className="text-primary text-base sm:text-lg font-medium">{benefit}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
