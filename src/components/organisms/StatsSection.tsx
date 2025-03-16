'use client';

import { useTranslation } from '../../app/contexts/TranslationContext';
import SectionHeader from '../molecules/SectionHeader';

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header with SectionHeader component */}
        <SectionHeader title={t.stats.title} centered={true} />

        {/* Stats display */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {t.stats.items.map((stat: { number: string; label: string }, index: number) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-5 sm:p-6 text-center transform transition-all duration-300 shadow-standard hover:shadow-hover hover:-translate-y-1 group"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-lg transform origin-left transition-all duration-300 group-hover:scale-x-110"></div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-2 sm:mb-3">
                {stat.number}
              </div>

              <div className="text-sm sm:text-base text-primary uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
