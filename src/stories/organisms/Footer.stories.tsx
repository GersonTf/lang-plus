import type { Meta, StoryObj } from '@storybook/react';
import Footer from '@/components/organisms/Footer';
import { Locale, translations } from '@/i18n';

/**
 * Footer section that appears at the bottom of every page
 */
const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Site-wide footer with copyright information and contact details.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'radio',
      options: ['en', 'es', 'zh', 'ja', 'ko'],
      description: 'The current language locale',
    },
    translations: {
      control: false,
      description: 'Translation object for the current locale (automatically provided)',
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Footer with English locale
 */
export const English: Story = {
  args: {
    locale: 'en' as Locale,
    translations: translations.en,
  },
};

/**
 * Footer with Spanish locale
 */
export const Spanish: Story = {
  args: {
    locale: 'es' as Locale,
    translations: translations.es,
  },
};

/**
 * Footer with Chinese locale
 */
export const Chinese: Story = {
  args: {
    locale: 'zh' as Locale,
    translations: translations.zh,
  },
};

/**
 * Footer with Japanese locale
 */
export const Japanese: Story = {
  args: {
    locale: 'ja' as Locale,
    translations: translations.ja,
  },
};

/**
 * Footer with Korean locale
 */
export const Korean: Story = {
  args: {
    locale: 'ko' as Locale,
    translations: translations.ko,
  },
}; 