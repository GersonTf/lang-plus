import type { Meta, StoryObj } from '@storybook/react';
import LanguageFlag from '@/components/atoms/LanguageFlag';

/**
 * Language flag component used to display language options in the hero section
 */
const meta = {
  title: 'Atoms/LanguageFlag',
  component: LanguageFlag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Animated flag component that displays language options with hover effects.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'radio',
      options: ['top-left', 'bottom-right'],
      description: 'Position of the flag component',
    },
    language: {
      control: 'radio',
      options: ['spanish', 'uk'],
      description: 'Which language flag to display',
    },
  },
} satisfies Meta<typeof LanguageFlag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Spanish flag in top-left position
 */
export const SpanishTopLeft: Story = {
  args: {
    position: 'top-left',
    language: 'spanish',
  },
};

/**
 * UK flag in top-left position
 */
export const UKTopLeft: Story = {
  args: {
    position: 'top-left',
    language: 'uk',
  },
};

/**
 * Spanish flag in bottom-right position
 */
export const SpanishBottomRight: Story = {
  args: {
    position: 'bottom-right',
    language: 'spanish',
  },
};

/**
 * UK flag in bottom-right position
 */
export const UKBottomRight: Story = {
  args: {
    position: 'bottom-right',
    language: 'uk',
  },
};
