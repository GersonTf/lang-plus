'use client';

import { useState } from 'react';
import Button from './Button';

// Class types data
const classTypes = [
  {
    icon: "👤",
    title: "Online One-on-one Lessons",
    description: "Accelerate your learning with my personalized attention and customized lesson plans. Perfect for focused language acquisition with the convenience of learning from home."
  },
  {
    icon: "👥",
    title: "Virtual Group Classes",
    description: "Learn collaboratively in small online groups of 2-4 students. Practice real-world conversations and share cultural insights while enjoying reduced rates."
  },
  {
    icon: "💼",
    title: "Online Business Language Training",
    description: "Master professional communication skills for the digital workplace. Tailored training for remote teams, international business relations, and virtual networking."
  },
  {
    icon: "💭",
    title: "Virtual Conversation Practice",
    description: "Build confidence through guided online discussions, interactive pronunciation workshops, and cultural exchange. Practice with a native speaker from the comfort of your home."
  }
];

const ClassesSection = () => {
  const [hoveredClassCards, setHoveredClassCards] = useState<{[key: number]: boolean}>({});
  
  const setClassCardHovered = (index: number, hovered: boolean) => {
    setHoveredClassCards(prev => ({...prev, [index]: hovered}));
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
          Classes Offered
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-24">
          {classTypes.map((classType, index) => (
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
                ${hoveredClassCards[index] 
                  ? 'border-2 border-primary-darker shadow-medium -translate-y-1' 
                  : 'border border-standard shadow-standard translate-y-0'}
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
                {classType.icon}
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
              Ready to Start Your Language Journey?
            </h3>
            <p className="text-primary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
              Book your <strong>free consultation</strong> today and discover how my personalized approach can help you achieve your language goals. Limited spots available!
            </p>
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <Button
                href="mailto:andy@a-plus-languages.com?subject=Class%20Inquiry"
                size="lg"
              >
                Schedule Free Consultation
              </Button>
              <p className="text-body-light text-xs sm:text-sm mt-2 sm:mt-4">
                ✓ No commitment required &nbsp;&nbsp; ✓ Flexible scheduling &nbsp;&nbsp; ✓ Personalized learning plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection; 