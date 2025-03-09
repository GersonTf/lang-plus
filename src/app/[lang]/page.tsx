'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ClassesSection from '../components/ClassesSection';
import StatsSection from '../components/StatsSection';
import CtaSection from '../components/CtaSection';
import ScrollTopButton from '../components/ScrollTopButton';
import { Locale } from '@/i18n';

// Client components don't need to await params
export default function LocalizedHomePage({
  params,
}: {
  // This is a client component, so we can't use Promise<{ lang: string }>
  // Instead, we use { lang: Locale } directly
  params: { lang: Locale }
}) {
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
      {showScrollTop && (
        <ScrollTopButton onClick={scrollToTop} />
      )}
    </div>
  );
} 