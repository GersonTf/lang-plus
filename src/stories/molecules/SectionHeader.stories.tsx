import type { Meta, StoryObj } from '@storybook/react';
import SectionHeader from '@/components/molecules/SectionHeader';

/**
 * Section header component used for consistent section titles across the site
 */
const meta = {
  title: 'Molecules/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Header component used to create consistent section titles with optional subtitle and decorative elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the section',
    },
    subtitle: {
      control: 'text',
      description: 'Optional descriptive text below the title',
    },
    centered: {
      control: 'boolean',
      description: 'Whether the header should be center-aligned',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether to show decorative elements',
    },
    id: {
      control: 'text',
      description: 'Optional ID for the heading element',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default left-aligned header with decorative elements
 */
export const Default: Story = {
  args: {
    title: 'Our Services',
    subtitle: 'Learn more about the language courses we offer',
    centered: false,
    decorative: true,
  },
};

/**
 * Centered header with decorative elements
 */
export const Centered: Story = {
  args: {
    title: 'Our Services',
    subtitle: 'Learn more about the language courses we offer',
    centered: true,
    decorative: true,
  },
};

/**
 * Header without decorative elements
 */
export const NoDecorations: Story = {
  args: {
    title: 'Our Services',
    subtitle: 'Learn more about the language courses we offer',
    centered: false,
    decorative: false,
  },
};

/**
 * Title only without subtitle
 */
export const TitleOnly: Story = {
  args: {
    title: 'Our Services',
    centered: false,
    decorative: true,
  },
};
