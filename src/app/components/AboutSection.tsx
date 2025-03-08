'use client';

import React from 'react';

const benefits = [
  "Native speaker with online teaching certification",
  "Flexible scheduling across all time zones",
  "Proven success with hundreds of online students",
  "Personalized attention and dedicated support"
];

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="bg-white shadow-md rounded-xl"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <h2 
          id="about-heading" 
          className="text-2xl sm:text-3xl text-blue-500 mb-6 sm:mb-8 md:mb-10 font-bold"
        >
          Why Choose A Plus Languages?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl">
          With over a decade of experience in online language teaching, I specialize in helping students achieve fluency through personalized, engaging virtual lessons. My proven methodology combines live conversation practice, interactive grammar instruction, and cultural immersion to ensure the best learning experience for every student.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 sm:gap-3 text-slate-600 text-base sm:text-lg p-4 sm:p-6 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-blue-500 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection; 