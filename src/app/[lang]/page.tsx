import { Locale } from '@/i18n';
import { getDictionary } from './dictionaries';
import Header from '@/components/organisms/Header';
import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import ClassesSection from '@/components/organisms/ClassesSection';
import StatsSection from '@/components/organisms/StatsSection';
import CtaSection from '@/components/organisms/CtaSection';
import Footer from '@/components/organisms/Footer';
import ScrollButtonWrapper from '@/components/client/ScrollButtonWrapper';

/**
 * Localized homepage component that displays content in the current language
 */
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  // Properly await the params
  const { lang } = await params;
  const locale = (lang as Locale) || 'en';
  const dictionary = await getDictionary(locale);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header translations={dictionary} locale={locale} />

      {/* Hero Section */}
      <HeroSection translations={dictionary} />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {/* About Section - Light background */}
        <div className="bg-section-primary py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection translations={dictionary} />
          </div>
        </div>

        {/* Classes Section - Accent background */}
        <div className="bg-section-secondary py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ClassesSection translations={dictionary} />
          </div>
        </div>

        {/* Stats Section - Light background */}
        <div className="bg-section-primary py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StatsSection translations={dictionary} />
          </div>
        </div>

        {/* CTA Section - Highlight background */}
        <div className="bg-section-highlight py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CtaSection translations={dictionary} />
          </div>
        </div>
      </main>

      {/* Footer - separate from sections */}
      <Footer translations={dictionary} locale={locale} />

      {/* Scroll to Top Button - Client Component */}
      <ScrollButtonWrapper />
    </div>
  );
}
