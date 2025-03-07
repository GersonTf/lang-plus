'use client';

import React, { useState } from 'react';

const CtaSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  return (
    <div>
      {/* CTA Section */}
      <section className="bg-blue-50 shadow-md rounded-xl">
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl sm:text-3xl text-blue-700 mb-4 sm:mb-6 md:mb-8 font-bold">
            Start Your Language Journey Today
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
            Whether you're a beginner or looking to refine your skills, our personalized approach will help you achieve fluency faster than traditional methods.
          </p>
          <a
            href="mailto:andy@a-plus-languages.com?subject=Language%20Lesson%20Inquiry"
            className={`
              inline-block 
              py-4 px-8 sm:py-5 sm:px-10 md:py-6 md:px-16 
              rounded-lg 
              font-semibold
              text-base sm:text-lg 
              transition-all 
              duration-300
              ${isHovered ? 'bg-blue-700' : 'bg-blue-500'} 
              text-white
              ${isHovered 
                ? 'shadow-lg -translate-y-1' 
                : 'shadow-sm translate-y-0'}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="text-center pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 border-t border-slate-200 mt-12 sm:mt-16 md:mt-20 text-slate-500"
        role="contentinfo"
        aria-label="Site footer"
      >
        <p className="mb-4 sm:mb-6 text-base sm:text-lg">
          Contact us at{" "}
          <a 
            href="mailto:andy@a-plus-languages.com" 
            className={`
              font-medium
              ${isEmailHovered ? 'text-blue-700' : 'text-blue-500'}
              transition-colors duration-200
            `}
            aria-label="Send email to andy@a-plus-languages.com"
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => setIsEmailHovered(false)}
          >
            andy@a-plus-languages.com
          </a>
        </p>
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Aplus Languages. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CtaSection; 