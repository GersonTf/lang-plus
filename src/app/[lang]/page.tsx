'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/organisms/Header';
import HeroSection from '../../components/organisms/HeroSection';
import AboutSection from '../../components/organisms/AboutSection';
import ClassesSection from '../../components/organisms/ClassesSection';
import StatsSection from '../../components/organisms/StatsSection';
import CtaSection from '../../components/organisms/CtaSection';
import Footer from '../../components/organisms/Footer';
import ScrollTopButton from '../../components/atoms/ScrollTopButton';
import SectionWrapper from '../../components/molecules/SectionWrapper';

// Wave divider SVG components - reduced height
const WaveDivider = ({ color = 'fill-section-secondary', className = '' }) => (
  <div className={`divider-wave ${className}`} style={{ height: '50px', marginTop: '-1px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50" preserveAspectRatio="none">
      <path
        className={color}
        fillOpacity="1"
        d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,42.7C840,43,960,53,1080,58.7C1200,64,1320,64,1440,58.7C1560,53,1680,43,1800,37.3C1920,32,2040,32,2160,32C2280,32,2400,32,2520,37.3C2640,43,2760,53,2880,53.3C3000,53,3120,43,3240,42.7C3360,43,3480,53,3600,48C3720,43,3840,21,3960,16C4080,11,4200,21,4320,26.7C4440,32,4560,32,4680,32C4800,32,4920,32,5040,32C5160,32,5280,32,5400,37.3C5520,43,5640,53,5760,53.3C5880,53,6000,43,6120,37.3C6240,32,6360,32,6480,37.3C6600,43,6720,53,6840,53.3C6960,53,7080,43,7200,37.3C7320,32,7440,32,7560,32C7680,32,7800,32,7920,32C8040,32,8160,32,8280,37.3C8400,43,8520,53,8580,58.7L8640,64L8640,0L8580,0C8520,0,8400,0,8280,0C8160,0,8040,0,7920,0C7800,0,7680,0,7560,0C7440,0,7320,0,7200,0C7080,0,6960,0,6840,0C6720,0,6600,0,6480,0C6360,0,6240,0,6120,0C6000,0,5880,0,5760,0C5640,0,5520,0,5400,0C5280,0,5160,0,5040,0C4920,0,4800,0,4680,0C4560,0,4440,0,4320,0C4200,0,4080,0,3960,0C3840,0,3720,0,3600,0C3480,0,3360,0,3240,0C3120,0,3000,0,2880,0C2760,0,2640,0,2520,0C2400,0,2280,0,2160,0C2040,0,1920,0,1800,0C1680,0,1560,0,1440,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  </div>
);

/**
 * Localized homepage component that displays content in the current language
 * Renders the main sections of the site and handles scroll-to-top functionality
 */
export default function LocalizedHomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {/* About Section - Light background */}
        <div className="bg-section-primary py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionWrapper
              id="about"
              hasDots={true}
              hasGlow={true}
              className="py-6 sm:py-8 md:py-10"
            >
              <AboutSection />
            </SectionWrapper>
          </div>
        </div>

        {/* Wave divider */}
        <WaveDivider color="fill-section-secondary" />

        {/* Classes Section - Accent background */}
        <div className="bg-section-secondary py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionWrapper
              id="classes"
              colorVariant="secondary"
              hasGlow={true}
              className="py-6 sm:py-8 md:py-10"
            >
              <ClassesSection />
            </SectionWrapper>
          </div>
        </div>

        {/* Wave divider */}
        <WaveDivider color="fill-section-primary" className="divider-wave-down" />

        {/* Stats Section - Light background */}
        <div className="bg-section-primary py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionWrapper
              id="stats"
              colorVariant="primary"
              hasDots={true}
              className="py-6 sm:py-8 md:py-10"
            >
              <StatsSection />
            </SectionWrapper>
          </div>
        </div>

        {/* Wave divider */}
        <WaveDivider color="fill-section-highlight" />

        {/* CTA Section - Highlight background */}
        <div className="bg-section-highlight py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionWrapper
              id="contact"
              colorVariant="highlight"
              hasGlow={true}
              className="py-6 sm:py-8 md:py-10"
            >
              <CtaSection />
            </SectionWrapper>
          </div>
        </div>
      </main>

      {/* Footer - separate from sections */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && <ScrollTopButton onClick={scrollToTop} />}
    </div>
  );
}
