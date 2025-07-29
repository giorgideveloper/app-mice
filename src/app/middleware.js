import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// Supported locales with US English, Georgian, and Russian
const locales = ['en-US', 'ka-GE', 'ru-RU'];
const defaultLocale = 'en-US';

function getLocale(request) {
	const headers = {
		'accept-language': request.headers.get('accept-language') || '',
	};
	const languages = new Negotiator({ headers }).languages();

	// 2. Match against supported locales
	try {
		return match(languages, locales, defaultLocale);
	} catch (e) {
		return defaultLocale;
	}
}

export function middleware(request) {
	const { pathname } = request.nextUrl;

	// Skip if already has locale or is public file
	if (
		locales.some(
			locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
		) ||
		pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js)$/)
	) {
		return NextResponse.next();
	}

	// Get locale and redirect
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
