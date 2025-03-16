import type { Meta, StoryObj } from '@storybook/react';
import ScrollTopButton from '@/components/atoms/ScrollTopButton';

/**
 * Button component that scrolls the page back to the top
 */
const meta = {
  title: 'Atoms/ScrollTopButton',
  component: ScrollTopButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button that allows users to quickly scroll back to the top of the page.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
} satisfies Meta<typeof ScrollTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default scroll top button
 */
export const Default: Story = {
  args: {
    onClick: () => {
      // Action handled by Storybook
    },
  },
};
