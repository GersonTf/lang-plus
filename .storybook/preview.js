import React from 'react';
import { TranslationProvider } from './__mocks__/TranslationContext';
import '../src/app/globals.css';

const preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Get locale from story parameters or default to English
      const locale = context.parameters.locale || 'en';

      return (
        <TranslationProvider locale={locale}>
          <div className="font-sans p-4">
            <Story />
          </div>
        </TranslationProvider>
      );
    },
  ],
};

export default preview;
