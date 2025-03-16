import type { Meta, StoryObj } from '@storybook/react';
import CtaSection from '@/components/organisms/CtaSection';
import { translations } from '@/i18n';

/**
 * Call-to-action section that encourages users to contact
 */
const meta = {
  title: 'Organisms/CtaSection',
  component: CtaSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Call-to-action section with a prominent button to contact for classes.',
      },
    },
    backgrounds: {
      default: 'highlight',
      values: [{ name: 'highlight', value: '#f0f9ff' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    translations: {
      control: false,
      description: 'Translation object for the current locale (automatically provided)',
    },
  },
} satisfies Meta<typeof CtaSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * CtaSection with English locale
 */
export const English: Story = {
  args: {
    translations: translations.en,
  },
};

/**
 * CtaSection with Spanish locale
 */
export const Spanish: Story = {
  args: {
    translations: translations.es,
  },
};

/**
 * CtaSection with Chinese locale
 */
export const Chinese: Story = {
  args: {
    translations: translations.zh,
  },
};

/**
 * CtaSection with Japanese locale
 */
export const Japanese: Story = {
  args: {
    translations: translations.ja,
  },
};

/**
 * CtaSection with Korean locale
 */
export const Korean: Story = {
  args: {
    translations: translations.ko,
  },
};
