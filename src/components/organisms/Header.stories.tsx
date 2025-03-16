import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import en from '@/i18n/locales/en.json';
import es from '@/i18n/locales/es.json';
import { Locale } from '@/i18n';

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
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default header with English locale
 */
export const Default: Story = {
  args: {
    translations: en,
    locale: 'en' as Locale,
  },
};

/**
 * Header with Spanish locale
 */
export const Spanish: Story = {
  args: {
    translations: es,
    locale: 'es' as Locale,
  },
};
