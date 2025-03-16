import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from '@/components/organisms/HeroSection';
import { Locale, translations } from '@/i18n';

/**
 * Hero section that appears on the homepage to capture user attention
 */
const meta = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main hero section for the landing page with call-to-action buttons.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default HeroSection with English locale
 */
export const Default: Story = {
  args: {
    translations: translations.en,
  },
};

/**
 * HeroSection with Spanish locale
 */
export const Spanish: Story = {
  args: {
    translations: translations.es,
  },
};
