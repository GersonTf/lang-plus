// This file allows for compatibility with both CommonJS and ESM
const path = require('path');

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // Support absolute imports and context mocking
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "../../app/contexts/TranslationContext": path.resolve(__dirname, "./__mocks__/TranslationContext"),
      "../app/contexts/TranslationContext": path.resolve(__dirname, "./__mocks__/TranslationContext"),
      "@/app/contexts/TranslationContext": path.resolve(__dirname, "./__mocks__/TranslationContext"),
    };
    return config;
  },
  docs: {
    autodocs: true
  }
}; 