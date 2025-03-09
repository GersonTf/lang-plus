import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales } from './i18n';

// Get the preferred locale from the request
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Check if we have a NEXT_LOCALE cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }
  
  // Parse the Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map(item => {
      const [locale, q = 'q=1.0'] = item.trim().split(';');
      const quality = parseFloat(q.split('=')[1]);
      return { locale: locale.split('-')[0], quality };
    })
    .sort((a, b) => b.quality - a.quality);
  
  // Find the first matching locale
  for (const { locale } of languages) {
    if (locales.includes(locale as any)) {
      return locale;
    }
  }
  
  // Default to English
  return 'en';
}

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl;
  
  // Skip for certain paths
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.includes('/images/') ||
    pathname.includes('.') // e.g. /favicon.ico
  ) {
    return NextResponse.next();
  }
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return NextResponse.next();
  
  // Redirect if there is no locale
  const locale = getLocale(request);
  
  // Create a new URL with the selected locale
  const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
  
  // Copy the search params
  newUrl.search = request.nextUrl.search;
  
  // Redirect to the localized URL
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|images|favicon.ico).*)',
  ],
}; 