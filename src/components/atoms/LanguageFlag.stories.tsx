import type { Meta, StoryObj } from '@storybook/react';
import LanguageFlag from './LanguageFlag';

const meta: Meta<typeof LanguageFlag> = {
  title: 'Atoms/LanguageFlag',
  component: LanguageFlag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: { type: 'select' },
      options: ['spanish', 'uk'],
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'bottom-right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageFlag>;

export const SpanishTopLeft: Story = {
  args: {
    language: 'spanish',
    position: 'top-left',
  },
};

export const SpanishBottomRight: Story = {
  args: {
    language: 'spanish',
    position: 'bottom-right',
  },
};

export const UKTopLeft: Story = {
  args: {
    language: 'uk',
    position: 'top-left',
  },
};

export const UKBottomRight: Story = {
  args: {
    language: 'uk',
    position: 'bottom-right',
  },
}; 