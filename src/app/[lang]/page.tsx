'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/organisms/Header';
import HeroSection from '../../components/organisms/HeroSection';
import AboutSection from '../../components/organisms/AboutSection';
import ClassesSection from '../../components/organisms/ClassesSection';
import StatsSection from '../../components/organisms/StatsSection';
import CtaSection from '../../components/organisms/CtaSection';
import ScrollTopButton from '../../components/atoms/ScrollTopButton';

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-24 w-full">
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-28 lg:gap-32">
          {/* About Section */}
          <AboutSection />

          {/* Classes Section */}
          <ClassesSection />

          {/* Stats Section */}
          <StatsSection />

          {/* CTA Section */}
          <CtaSection />
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && <ScrollTopButton onClick={scrollToTop} />}
    </div>
  );
}
