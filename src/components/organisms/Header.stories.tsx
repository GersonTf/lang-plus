import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { Locale, translations } from '@/i18n';

/**
 * Main navigation header that appears at the top of every page
 */
const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component:
          'Main navigation header that provides site-wide navigation and language selection.',
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
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default header with English locale
 */
export const English: Story = {
  args: {
    locale: 'en' as Locale,
    translations: translations.en,
  },
};

/**
 * Header with Spanish locale
 */
export const Spanish: Story = {
  args: {
    locale: 'es' as Locale,
    translations: translations.es,
  },
};

/**
 * Header with Chinese locale
 */
export const Chinese: Story = {
  args: {
    locale: 'zh' as Locale,
    translations: translations.zh,
  },
};

/**
 * Header with Japanese locale
 */
export const Japanese: Story = {
  args: {
    locale: 'ja' as Locale,
    translations: translations.ja,
  },
};

/**
 * Header with Korean locale
 */
export const Korean: Story = {
  args: {
    locale: 'ko' as Locale,
    translations: translations.ko,
  },
};
