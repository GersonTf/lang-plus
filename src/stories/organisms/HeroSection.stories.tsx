import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from '@/components/organisms/HeroSection';
import { translations } from '@/i18n';

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
  argTypes: {
    translations: {
      control: false,
      description: 'Translation object for the current locale (automatically provided)',
    },
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * HeroSection with English locale
 */
export const English: Story = {
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

/**
 * HeroSection with Chinese locale
 */
export const Chinese: Story = {
  args: {
    translations: translations.zh,
  },
};

/**
 * HeroSection with Japanese locale
 */
export const Japanese: Story = {
  args: {
    translations: translations.ja,
  },
};

/**
 * HeroSection with Korean locale
 */
export const Korean: Story = {
  args: {
    translations: translations.ko,
  },
};
