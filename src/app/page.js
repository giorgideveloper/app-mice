
import { redirect } from 'next/navigation';
import { cookies, headers } from 'next/headers';

export default async function Page() {
  // Get the user's accept-language header to determine their preferred language
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Parse the browser language
  const browserLanguages = acceptLanguage
    .split(',')
    .map(lang => {
      const [language] = lang.trim().split(';');
      return language.substring(0, 2).toLowerCase();
    });
  
  // Our supported languages
  const locales = ['ka', 'en', 'ru'];
  
  // Find the first language that matches our supported locales
  const detectedLocale = browserLanguages.find(lang => locales.includes(lang)) || 'ka';
  
  // Redirect to the detected language page
  return redirect(`/${detectedLocale}`);
}