import type { Meta, StoryObj } from '@storybook/react';
import ScrollTopButton from '@/components/atoms/ScrollTopButton';

const meta: Meta<typeof ScrollTopButton> = {
  title: 'Atoms/ScrollTopButton',
  component: ScrollTopButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollTopButton>;

export const Default: Story = {
  args: {
    onClick: () => {
      /* Click handler would scroll to top */
    },
  },
};
