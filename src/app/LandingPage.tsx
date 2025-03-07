"use client";

import React, { useState, useEffect } from "react";
import Head from 'next/head';
import JsonLd from './components/JsonLd';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ClassesSection from './components/ClassesSection';
import StatsSection from './components/StatsSection';
import CtaSection from './components/CtaSection';
import ScrollTopButton from './components/ScrollTopButton';

// Add metadata for SEO
const metadata = {
  title: 'Aplus Languages - Expert Online English & Spanish Language Classes',
  description: 'Transform your language skills with personalized online English and Spanish lessons from native-speaking teachers. Learn from anywhere in the world with Aplus Languages.',
  keywords: 'online language classes, English lessons, Spanish lessons, language learning, online tutoring, ESL, language teacher',
};

const LandingPage: React.FC = () => {
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
    <>
      <JsonLd />
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.apluslanguages.eu" />
      </Head>

      <div className="flex flex-col min-h-screen bg-slate-50">
        {/* Header */}
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-24 w-full">
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
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
    </>
  );
};

export default LandingPage; 