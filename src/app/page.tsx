import { redirect } from 'next/navigation';
// Imports are commented out since they're only needed for the reference code below
// import { locales, Locale } from '@/i18n';

// Default language redirect for the root route
export default function RootPage() {
  // Redirect to the default language (en)
  redirect('/en');
}

// Note: The below code is commented out as we're using a direct redirect approach
// but kept for reference as it might be used in other parts of the application

/*
// This function generates the static paths for all supported languages
export async function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

// Server component wrapper to handle the promised params
export async function Page({ params }: { params: Promise<{ lang: string }> }) {
  // Add a fallback if middleware doesn't run
  // Forward to the language-specific page
  const { lang } = await params;

  // Import the default export from the language page
  const LocalizedPage = (await import('./[lang]/page')).default;

  // Pass the resolved params to the client component
  return <LocalizedPage params={{ lang: lang as Locale }} />;
}
*/

// This is a fallback for when middleware doesn't run
// The middleware will redirect to the appropriate language version
