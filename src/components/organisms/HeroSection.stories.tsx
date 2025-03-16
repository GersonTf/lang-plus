import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';
import en from '@/i18n/locales/en.json';
import es from '@/i18n/locales/es.json';

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
 * Default hero section with English locale
 */
export const Default: Story = {
  args: {
    translations: en,
  },
};

/**
 * Hero section in Spanish locale
 */
export const Spanish: Story = {
  args: {
    translations: es,
  },
};
