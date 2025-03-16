import type { Meta, StoryObj } from '@storybook/react';
import StatsSection from '@/components/organisms/StatsSection';
import { translations } from '@/i18n';

/**
 * Statistics section that displays key metrics
 */
const meta = {
  title: 'Organisms/StatsSection',
  component: StatsSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Section that highlights key statistics and achievements.',
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
} satisfies Meta<typeof StatsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * StatsSection with English locale
 */
export const English: Story = {
  args: {
    translations: translations.en,
  },
};

/**
 * StatsSection with Spanish locale
 */
export const Spanish: Story = {
  args: {
    translations: translations.es,
  },
};

/**
 * StatsSection with Chinese locale
 */
export const Chinese: Story = {
  args: {
    translations: translations.zh,
  },
};

/**
 * StatsSection with Japanese locale
 */
export const Japanese: Story = {
  args: {
    translations: translations.ja,
  },
};

/**
 * StatsSection with Korean locale
 */
export const Korean: Story = {
  args: {
    translations: translations.ko,
  },
};
