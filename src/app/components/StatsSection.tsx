'use client';

import { useTranslation } from '../contexts/TranslationContext';

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-section-accent shadow-standard rounded-xl border border-standard">
      <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
        <h2 className="heading-primary text-2xl sm:text-3xl mb-8 sm:mb-12 md:mb-16 font-bold">
          {t.stats.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {t.stats.items.map((stat: { number: string; label: string }, index: number) => (
            <div
              key={index}
              className="text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8 w-full sm:w-auto"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-2 sm:mb-3 md:mb-4">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-body-light uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
