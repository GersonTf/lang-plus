'use client';

import { useState } from 'react';
import Button from '../atoms/Button';
import { useTranslation } from '../../app/contexts/TranslationContext';

// Define interface for class type
interface ClassType {
  title: string;
  description: string;
  cta?: string;
}

interface HoveredClassCards {
  [key: number]: boolean;
}

const ClassesSection = () => {
  const [hoveredClassCards, setHoveredClassCards] = useState<HoveredClassCards>({});
  const { t } = useTranslation();

  const setClassCardHovered = (index: number, hovered: boolean) => {
    setHoveredClassCards(prev => ({ ...prev, [index]: hovered }));
  };

  return (
    <section
      id="classes"
      className="bg-section-secondary shadow-standard rounded-xl border border-standard"
      role="region"
      aria-labelledby="classes-heading"
    >
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <h2
          id="classes-heading"
          className="heading-primary text-2xl sm:text-3xl mb-8 sm:mb-12 md:mb-16 font-bold text-center"
        >
          {t.classes.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-24">
          {t.classes.types.map((classType: ClassType, index: number) => (
            <div
              key={index}
              className={`
                p-6 sm:p-8 md:p-10
                rounded-xl 
                bg-section-primary 
                transition-all 
                duration-300 
                flex 
                flex-col
                gap-3 sm:gap-4 md:gap-5
                h-full
                ${
                  hoveredClassCards[index]
                    ? 'border-2 border-primary-darker shadow-medium -translate-y-1'
                    : 'border border-standard shadow-standard translate-y-0'
                }
              `}
              role="article"
              aria-labelledby={`class-title-${index}`}
              onMouseEnter={() => setClassCardHovered(index, true)}
              onMouseLeave={() => setClassCardHovered(index, false)}
            >
              <div
                className="text-4xl sm:text-5xl mb-3 sm:mb-4 md:mb-5"
                role="img"
                aria-label={`${classType.title} icon`}
              >
                {index === 0 ? '👤' : index === 1 ? '👥' : index === 2 ? '💼' : '💭'}
              </div>
              <h3
                id={`class-title-${index}`}
                className="text-xl sm:text-2xl text-heading font-semibold"
              >
                {classType.title}
              </h3>
              <p className="text-primary text-base sm:text-lg leading-relaxed flex-1">
                {classType.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-section-accent rounded-xl p-6 sm:p-8 md:p-10 lg:p-16 border border-standard shadow-standard mt-10 sm:mt-12 md:mt-16">
          <div className="text-center">
            <h3 className="heading-primary text-xl sm:text-2xl mb-4 sm:mb-6 md:mb-8 font-semibold">
              {t.classes.cta.title || 'Start Learning Today'}
            </h3>
            <p
              className="text-primary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10"
              dangerouslySetInnerHTML={{
                __html: t.classes.cta.description || 'Contact us to schedule your first lesson.',
              }}
            />
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <Button href="mailto:andy@a-plus-languages.com?subject=Class%20Inquiry" size="lg">
                {t.classes.cta?.button || 'Get Started'}
              </Button>
              <p className="text-body-light text-xs sm:text-sm mt-2 sm:mt-4">
                {t.classes.cta?.benefits || 'Free consultation available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
