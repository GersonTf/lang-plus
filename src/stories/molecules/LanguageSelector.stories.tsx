import type { Meta, StoryObj } from '@storybook/react';
import LanguageSelector from '@/components/molecules/LanguageSelector';
import { Locale } from '@/i18n';

/**
 * Language selector dropdown for switching between available languages
 */
const meta = {
  title: 'Molecules/LanguageSelector',
  component: LanguageSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown component for selecting the language of the application.',
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
  },
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * English locale selector
 */
export const English: Story = {
  args: {
    locale: 'en' as Locale,
  },
};

/**
 * Spanish locale selector
 */
export const Spanish: Story = {
  args: {
    locale: 'es' as Locale,
  },
};

/**
 * Chinese locale selector
 */
export const Chinese: Story = {
  args: {
    locale: 'zh' as Locale,
  },
};

/**
 * Japanese locale selector
 */
export const Japanese: Story = {
  args: {
    locale: 'ja' as Locale,
  },
};

/**
 * Korean locale selector
 */
export const Korean: Story = {
  args: {
    locale: 'ko' as Locale,
  },
};
