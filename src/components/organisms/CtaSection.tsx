'use client';

import Button from '../atoms/Button';
import { useTranslation } from '../../app/contexts/TranslationContext';
import SectionHeader from '../molecules/SectionHeader';

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader title={t.cta.title} subtitle={t.cta.description} centered={true} />

        <div className="inline-block relative mb-6">
          <Button
            href="mailto:andy@a-plus-languages.com?subject=Language%20Lesson%20Inquiry"
            variant="primary"
            size="lg"
            className="relative z-10 px-8 py-4 shadow-large"
          >
            {t.cta.button}
          </Button>
          {/* Button decorative shadow */}
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-secondary opacity-20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
