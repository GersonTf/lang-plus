import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

/**
 * Logo component used for branding throughout the application
 */
const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Company logo that represents the A+ Languages brand.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: { 
      description: 'CSS classes to apply custom styling',
      control: 'text' 
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default logo with no sizing
 */
export const Default: Story = {
  args: {},
};

/**
 * Small size logo for compact spaces
 */
export const Small: Story = {
  args: {
    className: 'w-16 h-16',
  },
};

/**
 * Medium size logo for standard usage
 */
export const Medium: Story = {
  args: {
    className: 'w-32 h-32',
  },
};

/**
 * Large size logo for high-impact areas
 */
export const Large: Story = {
  args: {
    className: 'w-64 h-64',
  },
}; 