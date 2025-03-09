'use client';

import Image from 'next/image';
import LanguageFlag from './LanguageFlag';
import Button from './Button';
import { useTranslation } from '../contexts/TranslationContext';

const HeroSection = () => {
  const { t } = useTranslation();
  
  // Helper function to handle HTML in translations
  const renderHTML = (html: string) => {
    return html.replace(/<highlight>(.*?)<\/highlight>/g, '<span class="highlight-text">$1</span>');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern - Removed vertical lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-blue-50/10"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/80"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              dangerouslySetInnerHTML={{ __html: renderHTML(t.hero.title) }}
            />
            
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-2xl md:max-w-none">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                href="mailto:andy@a-plus-languages.com?subject=Inquiry%20about%20Classes"
                variant="secondary"
                size="md"
                className="highlight-bg font-bold text-gray-900"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                }
              >
                {t.hero.buttons.consultation}
              </Button>
              
              <Button
                href="#classes"
                variant="outline"
                size="md"
                className="border-white text-white hover:bg-white hover:text-primary-darker hover:border-white font-semibold"
              >
                {t.hero.buttons.explore}
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start items-center text-white">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="#F4C635" viewBox="0 0 24 24" stroke="none">
                  <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                </svg>
                <span className="font-medium">{t.hero.trust.bilingual}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="#F4C635" viewBox="0 0 24 24" stroke="none">
                  <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                </svg>
                <span className="font-medium">{t.hero.trust.tools}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="#F4C635" viewBox="0 0 24 24" stroke="none">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-medium">{t.hero.trust.rating}</span>
              </div>
            </div>
          </div>
          
          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative background elements */}
              <div className="absolute inset-0 rounded-full bg-blue-300/10 backdrop-blur-sm transform -rotate-3"></div>
              
              {/* Only keep the dotted animated ring */}
              <div className="absolute inset-[10px] rounded-full border-2 border-dashed border-blue-200/30 animate-spin-slow"></div>
              
              {/* Main image container */}
              <div className="absolute inset-5 rounded-full overflow-hidden bg-gradient-to-br from-blue-200/20 to-white/10 backdrop-blur-sm shadow-lg">
                <picture>
                  <source srcSet="/images/student-learning.webp" type="image/webp" />
                  <Image
                    src="/images/student-learning.jpg"
                    alt="Online language learning"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center rounded-full p-1"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAACAQMFAQAAAAAAAAAAAAAAAQIDESESBDFBYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAQADAQEAAAAAAAAAAAAAAAEAAhEhMf/aAAwDAQACEQMRAD8AhrG92tJO19sUcbdKs6NKOzL02KyC1sdcJ//Z'/%3E%3C/svg%3E"
                  />
                </picture>
              </div>
              
              {/* Decorative glow effect */}
              <div className="absolute inset-0 rounded-full bg-blue-400/5 blur-xl"></div>
            </div>
            
            {/* Language flag components */}
            <LanguageFlag 
              language="spanish"
              position="top-left"
            />
            
            <LanguageFlag 
              language="uk"
              position="bottom-right"
            />
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto text-white fill-current" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C150,20 350,0 500,20 C650,40 700,60 900,60 C1100,60 1250,40 1440,20 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 