import type { Meta, StoryObj } from '@storybook/react';
import Logo from '@/components/atoms/Logo';

/**
 * The company logo used throughout the site
 */
const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SVG logo component with the company branding.',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the logo component',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default sized logo
 */
export const Default: Story = {
  args: {
    className: 'w-24 h-24',
  },
};

/**
 * Small logo for mobile devices
 */
export const Small: Story = {
  args: {
    className: 'w-12 h-12',
  },
};

/**
 * Large logo for hero sections
 */
export const Large: Story = {
  args: {
    className: 'w-40 h-40',
  },
};
