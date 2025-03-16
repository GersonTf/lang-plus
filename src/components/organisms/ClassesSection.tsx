'use client';

import { useState } from 'react';
import Button from '../atoms/Button';
import SectionHeader from '../molecules/SectionHeader';
import { TranslationObject } from '@/i18n';

// Define interface for class type
interface ClassType {
  title: string;
  description: string;
  cta?: string;
}

interface HoveredClassCards {
  [key: number]: boolean;
}

interface ClassesSectionProps {
  translations: TranslationObject;
}

const ClassesSection = ({ translations }: ClassesSectionProps) => {
  const [hoveredClassCards, setHoveredClassCards] = useState<HoveredClassCards>({});
  const t = translations;

  const setClassCardHovered = (index: number, hovered: boolean) => {
    setHoveredClassCards(prev => ({ ...prev, [index]: hovered }));
  };

  // Class card icons with modern styling
  const classIcons = [
    <svg
      key="individual"
      className="w-12 h-12 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg
      key="group"
      className="w-12 h-12 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M16.6438 16.1429C15.6229 14.3481 13.8474 13.1429 11.8 13.1429C9.7526 13.1429 7.97707 14.3481 6.95623 16.1429M7 20V18C7 17.3438 7.12641 16.717 7.35624 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35624 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg
      key="business"
      className="w-12 h-12 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 13.2539V17.5C21 20 19.5 22 16.5 22H7.5C4.5 22 3 20 3 17.5V13.2539M12 2V14M12 14L16 10M12 14L8 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg
      key="conversation"
      className="w-12 h-12 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10H16M8 14H13M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header with decorative line */}
        <SectionHeader id="classes-heading" title={t.classes.title} centered={true} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {t.classes.types.map((classType: ClassType, index: number) => (
            <div
              key={index}
              className={`
                p-6 sm:p-8
                rounded-xl 
                bg-white 
                transition-all 
                duration-300 
                flex 
                flex-col
                gap-4 sm:gap-5
                h-full
                relative
                overflow-hidden
                ${
                  hoveredClassCards[index]
                    ? 'shadow-hover translate-y-[-4px]'
                    : 'shadow-standard translate-y-0'
                }
              `}
              role="article"
              aria-labelledby={`class-title-${index}`}
              onMouseEnter={() => setClassCardHovered(index, true)}
              onMouseLeave={() => setClassCardHovered(index, false)}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary bg-opacity-5 rounded-bl-3xl"></div>

              <div className="text-primary mb-1">{classIcons[index]}</div>

              <h3
                id={`class-title-${index}`}
                className="text-xl sm:text-2xl text-heading font-semibold"
              >
                {classType.title}
              </h3>

              <p className="text-primary text-base sm:text-lg leading-relaxed flex-1">
                {classType.description}
              </p>

              <div
                className={`h-1 w-12 rounded bg-primary transition-all duration-300 ${
                  hoveredClassCards[index] ? 'w-20' : 'w-12'
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="section-card bg-gradient-highlight">
          <div className="relative p-8 sm:p-10">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-yellow opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent-yellow opacity-20"></div>

            <div className="relative text-center max-w-xl mx-auto">
              <h3 className="heading-primary text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 font-semibold">
                {t.classes.cta.title || 'Start Learning Today'}
              </h3>
              <p
                className="text-primary text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                dangerouslySetInnerHTML={{
                  __html: t.classes.cta.description || 'Contact us to schedule your first lesson.',
                }}
              />
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <Button href="mailto:andy@a-plus-languages.com?subject=Class%20Inquiry" size="lg">
                  {t.classes.cta?.button || 'Get Started'}
                </Button>
                <p className="text-body-light text-sm mt-3 font-medium">
                  {t.classes.cta?.benefits || 'Free consultation available'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesSection;
