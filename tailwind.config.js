/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-darker': 'var(--color-primary-darker)',
        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',
        highlight: 'var(--color-highlight)',
        heading: 'var(--color-heading)',
        body: 'var(--color-text)',
        'body-light': 'var(--color-text-light)',
        'accent-blue': 'var(--color-accent-blue)',
        'accent-yellow': 'var(--color-accent-yellow)',
      },
      backgroundColor: {
        page: 'var(--color-background)',
        card: 'var(--color-card)',
        button: 'var(--color-button)',
        'button-hover': 'var(--color-button-hover)',
        'button-secondary': 'var(--color-button-secondary)',
        'button-secondary-hover': 'var(--color-button-secondary-hover)',
        'section-primary': 'var(--color-section-primary)',
        'section-secondary': 'var(--color-section-secondary)',
        'section-accent': 'var(--color-section-accent)',
        'section-highlight': 'var(--color-section-highlight)',
      },
      textColor: {
        button: 'var(--color-button)',
        'button-hover': 'var(--color-button-hover)',
        'button-text': 'var(--color-button-text)',
        'button-secondary-text': 'var(--color-button-secondary-text)',
        highlight: 'var(--color-highlight)',
      },
      borderColor: {
        button: 'var(--color-button)',
        'button-hover': 'var(--color-button-hover)',
        highlight: 'var(--color-highlight)',
        standard: 'var(--color-border-standard)',
        accent: 'var(--color-border-accent)',
      },
      boxShadow: {
        standard: 'var(--shadow-standard)',
        medium: 'var(--shadow-medium)',
        large: 'var(--shadow-large)',
        hover: 'var(--shadow-hover)',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-highlight': 'var(--gradient-highlight)',
      },
    },
  },
  plugins: [],
};
