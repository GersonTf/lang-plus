import type { Meta, StoryObj } from '@storybook/react';
import { FaArrowRight } from 'react-icons/fa';
import Button from './Button';

/**
 * Button components are the primary interactive elements that allow users to trigger actions.
 * They use visual emphasis to indicate importance and hierarchy.
 */
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Interactive button component with multiple variants and sizes for use throughout the application.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style of the button',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'text'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Size of the button',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    iconPosition: {
      description: 'Position of the icon relative to text',
      control: { type: 'radio' },
      options: ['left', 'right'],
      table: {
        defaultValue: { summary: 'right' },
      },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Standard primary button
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

/**
 * Secondary button for less important actions
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

/**
 * Outline button for tertiary actions
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
};

/**
 * Text button for inline actions
 */
export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
    size: 'md',
  },
};

/**
 * Small button for compact spaces
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

/**
 * Large button for important CTA elements
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

/**
 * Button with an icon for clear action indication
 */
export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    size: 'md',
    icon: <FaArrowRight />,
    iconPosition: 'right',
  },
};

/**
 * Button rendered as a link
 */
export const AsLink: Story = {
  args: {
    children: 'Button as Link',
    variant: 'primary',
    size: 'md',
    href: '#',
  },
};
