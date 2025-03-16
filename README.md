# A Plus Languages

Professional online language teaching platform offering personalized English and Spanish lessons.

## About

A Plus Languages provides expert language instruction through:

- One-on-one online lessons
- Small group classes
- Business language training
- Conversation practice

Visit [www.apluslanguages.eu](https://www.apluslanguages.eu) to learn more.

## Features

- Personalized curriculum
- Native speaker instruction
- Flexible scheduling
- Interactive online learning
- Business-focused language training
- Cultural immersion

## Contact

For inquiries about classes:
Email: andy@a-plus-languages.com

## Technology

Built with:

- Next.js 15
- React 19
- TypeScript
- Modern web technologies for optimal performance

© 2024 A Plus Languages. All rights reserved.

# A+ Languages Website

A modern, responsive website for A+ Languages built with Next.js, Tailwind CSS, and Yarn 4.

## Prerequisites

- Node.js 18.x or later
- Yarn 4.x (via Corepack)

## Getting Started

This project uses Yarn 4 (Berry) as the package manager. Make sure you have Corepack enabled:

```bash
# Enable Corepack (included with Node.js 14.19.0+)
corepack enable
```

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <repository-url>
cd aplus-front

# Install dependencies
yarn
```

### Development

Start the development server:

```bash
# Using yarn directly
yarn dev

# Or using Make
make dev
```

### Building for Production

```bash
# Using yarn directly
yarn build

# Or using Make
make build
```

### Linting and Formatting

```bash
# Run ESLint
yarn lint
# or
make lint

# Fix ESLint issues
yarn lint:fix
# or
make lint-fix

# Format code with Prettier
yarn format
# or
make format

# Check formatting
yarn format:check
# or
make format-check

# Run all checks (lint + format check)
yarn check
# or
make check

# Fix all issues (lint fix + format)
yarn fix
# or
make fix
```

### Storybook

```bash
# Start Storybook development server
yarn storybook
# or
make storybook

# Build Storybook static site
yarn build-storybook
# or
make build-storybook
```

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components organized by atomic design principles
- `src/i18n/` - Internationalization files and utilities
- `.storybook/` - Storybook configuration
- `public/` - Static assets

## Yarn Configuration

This project uses Yarn 4 with the following configuration:

- `nodeLinker: node-modules` - Uses the traditional node_modules structure
- Standard compression level for better performance
- Local cache for faster installations

## License

[License information]
