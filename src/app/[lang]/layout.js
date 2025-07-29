// app/[lang]/layout.js
import { Geist, Geist_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '../components/BootstrapClient';
import { notFound } from 'next/navigation';

// Ensure these are correctly specified as per your actual path segments
export async function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'ka' }, { lang: 'ru' }];
}

export const dynamicParams = false; // Important for static generation consistency

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'MICE Platform',
	description: 'Internationalized App Router example',
};

// Ensure this is an async function as you are accessing `params`
export default async function RootLayout({ children, params }) {
	// Destructure `lang` directly from `params`
	const { lang } = await params;

	// Define your supported languages
	const supportedLangs = ['en', 'ka', 'ru'];

	// If the language from the URL is not supported, show 404
	if (!supportedLangs.includes(lang)) {
		notFound();
	}

	// Map the URL lang to the appropriate HTML lang attribute value
	// This is crucial for consistency.
	const htmlLangMap = {
		en: 'en',
		ka: 'ka',
		ru: 'ru',
	};

	// Get the HTML lang attribute, falling back to the URL lang if not explicitly mapped
	const htmlLang = htmlLangMap[lang] || lang;

	return (
		<html lang={htmlLang}>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
				{/* BootstrapClient should be a Client Component and ideally not cause hydration issues */}
				<BootstrapClient />
			</body>
		</html>
	);
}
