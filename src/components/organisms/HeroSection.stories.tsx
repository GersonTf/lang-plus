import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

/**
 * Hero section that appears on the homepage to capture user attention
 */
const meta = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    // Specify we need translation context (our global decorator will provide it)
    locale: 'en',
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
  parameters: {
    locale: 'en',
  },
};

/**
 * Hero section in Spanish locale
 */
export const Spanish: Story = {
  parameters: {
    locale: 'es',
  },
};
