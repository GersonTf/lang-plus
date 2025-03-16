import type { Meta, StoryObj } from '@storybook/react';
import ClassesSection from '@/components/organisms/ClassesSection';
import { translations } from '@/i18n';

/**
 * Classes section that displays available language courses
 */
const meta = {
  title: 'Organisms/ClassesSection',
  component: ClassesSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Section that displays available language classes and their details.',
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
} satisfies Meta<typeof ClassesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ClassesSection with English locale
 */
export const English: Story = {
  args: {
    translations: translations.en,
  },
};

/**
 * ClassesSection with Spanish locale
 */
export const Spanish: Story = {
  args: {
    translations: translations.es,
  },
};

/**
 * ClassesSection with Chinese locale
 */
export const Chinese: Story = {
  args: {
    translations: translations.zh,
  },
};

/**
 * ClassesSection with Japanese locale
 */
export const Japanese: Story = {
  args: {
    translations: translations.ja,
  },
};

/**
 * ClassesSection with Korean locale
 */
export const Korean: Story = {
  args: {
    translations: translations.ko,
  },
}; 