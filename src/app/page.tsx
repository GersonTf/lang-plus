import { locales, Locale } from '@/i18n';

// This function generates the static paths for all supported languages
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Server component wrapper to handle the promised params
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  // Add a fallback if middleware doesn't run
  // Forward to the language-specific page
  const { lang } = await params;
  
  // Import the default export from the language page
  const LocalizedPage = (await import('./[lang]/page')).default;
  
  // Pass the resolved params to the client component
  return <LocalizedPage params={{ lang: lang as Locale }} />;
}

// This is a fallback for when middleware doesn't run
// The middleware will redirect to the appropriate language version
