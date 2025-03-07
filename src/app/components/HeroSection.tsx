'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat bg-center"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/80"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Personalized <span className="text-yellow-300">Online</span> Language Lessons
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-2xl md:max-w-none">
              Transform your English or Spanish skills with one-on-one lessons from a bilingual native speaker. 
              Modern, interactive sessions using Google Meet and Miro boards, designed for individuals and businesses alike.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="mailto:andy@a-plus-languages.com?subject=Inquiry%20about%20Classes"
                className={`
                  inline-flex items-center justify-center
                  py-4 px-8 
                  text-base font-semibold
                  bg-yellow-400 hover:bg-yellow-300
                  text-gray-800
                  rounded-lg
                  transition-all duration-300
                  shadow-lg hover:shadow-xl hover:-translate-y-1
                `}
              >
                <span>Book Free Consultation</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="#classes"
                className={`
                  inline-flex items-center justify-center
                  py-4 px-8 
                  text-base font-semibold
                  bg-transparent 
                  text-white
                  border-2 border-white hover:border-yellow-300 hover:text-yellow-300
                  rounded-lg
                  transition-all duration-300
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Explore Classes
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start items-center text-blue-100">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>Bilingual Native</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Interactive Tools</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
          
          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-blue-400/20 backdrop-blur-sm transform -rotate-6"></div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-100/20 to-white/10 backdrop-blur-md">
                <Image
                  src="/images/student-learning-online.svg"
                  alt="Online language learning"
                  fill
                  className="object-cover p-8"
                  priority
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 -left-4 w-20 h-20 bg-yellow-400/20 rounded-full backdrop-blur-sm animate-float-slow hidden md:block">
              <div className="absolute inset-0 flex items-center justify-center text-yellow-500 text-2xl font-bold opacity-60">ES</div>
            </div>
            <div className="absolute bottom-1/4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full backdrop-blur-sm animate-float-slow-reverse hidden md:block">
              <div className="absolute inset-0 flex items-center justify-center text-blue-100 text-2xl font-bold opacity-60">EN</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto text-slate-50 fill-current" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C150,20 350,0 500,20 C650,40 700,60 900,60 C1100,60 1250,40 1440,20 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 