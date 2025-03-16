import type { Meta, StoryObj } from '@storybook/react';
import SectionWrapper from '@/components/molecules/SectionWrapper';

/**
 * Section wrapper component for consistent styling of content sections
 */
const meta = {
  title: 'Molecules/SectionWrapper',
  component: SectionWrapper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Container component that provides consistent styling, backgrounds, and effects for content sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to be rendered inside the section wrapper',
    },
    id: {
      control: 'text',
      description: 'Optional ID for the section element',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    hasDots: {
      control: 'boolean',
      description: 'Whether to show a dotted background pattern',
    },
    hasGlow: {
      control: 'boolean',
      description: 'Whether to show glowing corner effects',
    },
    colorVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'highlight'],
      description: 'Color theme for the section background',
    },
  },
} satisfies Meta<typeof SectionWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default primary section
 */
export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3 className="text-xl font-bold">Sample Section Content</h3>
      </div>
    ),
    colorVariant: 'primary',
  },
};

/**
 * Secondary background variant
 */
export const Secondary: Story = {
  args: {
    children: (
      <div
        style={{
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3 className="text-xl font-bold">Sample Section Content</h3>
      </div>
    ),
    colorVariant: 'secondary',
  },
};

/**
 * With dot pattern background
 */
export const WithDots: Story = {
  args: {
    children: (
      <div
        style={{
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3 className="text-xl font-bold">Sample Section Content</h3>
      </div>
    ),
    hasDots: true,
  },
};

/**
 * With glowing corner effects
 */
export const WithGlow: Story = {
  args: {
    children: (
      <div
        style={{
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3 className="text-xl font-bold">Sample Section Content</h3>
      </div>
    ),
    hasGlow: true,
  },
};

/**
 * Highlight background with both effects
 */
export const HighlightWithEffects: Story = {
  args: {
    children: (
      <div
        style={{
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3 className="text-xl font-bold">Sample Section Content</h3>
      </div>
    ),
    colorVariant: 'highlight',
    hasDots: true,
    hasGlow: true,
  },
};
