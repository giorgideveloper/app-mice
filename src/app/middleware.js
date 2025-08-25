// middleware.js
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const locales = ['ka', 'en', 'ru'];
const defaultLocale = 'ka';

function detectLanguage(req) {
  // Get accept-language header from the browser
  const acceptLanguage = req.headers.get('accept-language') || '';
  
  // Parse the language preference from the header
  const browserLanguages = acceptLanguage
    .split(',')
    .map(lang => {
      const [language, priority] = lang.trim().split(';');
      return language.substring(0, 2).toLowerCase();
    });
  
  // Find the first language that matches our supported locales
  const detectedLocale = browserLanguages.find(lang => locales.includes(lang));
  
  // Return the detected language or default to 'ka'
  return detectedLocale || defaultLocale;
}

export function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Check if the request is for the root path
  if (pathname === '/' || pathname === '') {
    // Detect the browser language
    const detectedLanguage = detectLanguage(req);
    
    // Create a new URL with the detected language
    const url = req.nextUrl.clone();
    url.pathname = `/${detectedLanguage}`;
    
    // Rewrite to the language-specific path instead of redirecting
    // This will make the URL stay as '/' but load the content from '/{language}'
    return NextResponse.rewrite(url);
  }
  
  // Check if path doesn't have a locale prefix but should have one
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (!pathnameHasLocale && !pathname.includes('.')) {
    // Detect the browser language
    const detectedLanguage = detectLanguage(req);
    
    // Create a new URL with the detected language
    const url = req.nextUrl.clone();
    url.pathname = `/${detectedLanguage}${pathname}`;
    
    // Rewrite instead of redirect to keep the original URL
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
