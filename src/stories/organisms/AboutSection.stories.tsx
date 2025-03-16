import type { Meta, StoryObj } from '@storybook/react';
import AboutSection from '@/components/organisms/AboutSection';
import { translations } from '@/i18n';

/**
 * About section that explains the services offered
 */
const meta = {
  title: 'Organisms/AboutSection',
  component: AboutSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Section that describes the company and services in detail.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    translations: {
      control: false,
      description: 'Translation object for the current locale (automatically provided)',
    },
  },
} satisfies Meta<typeof AboutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * AboutSection with English locale
 */
export const English: Story = {
  args: {
    translations: translations.en,
  },
};

/**
 * AboutSection with Spanish locale
 */
export const Spanish: Story = {
  args: {
    translations: translations.es,
  },
};

/**
 * AboutSection with Chinese locale
 */
export const Chinese: Story = {
  args: {
    translations: translations.zh,
  },
};

/**
 * AboutSection with Japanese locale
 */
export const Japanese: Story = {
  args: {
    translations: translations.ja,
  },
};

/**
 * AboutSection with Korean locale
 */
export const Korean: Story = {
  args: {
    translations: translations.ko,
  },
};
