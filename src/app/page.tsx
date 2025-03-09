import { redirect } from 'next/navigation';

/**
 * Root page that automatically redirects to the default language (English)
 */
export default function RootPage() {
  redirect('/en');
}
