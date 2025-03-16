import type { Meta, StoryObj } from '@storybook/react';
import ScrollTopButton from './ScrollTopButton';

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
    onClick: () => console.log('Scroll to top clicked'),
  },
}; 