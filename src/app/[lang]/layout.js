import { Geist, Geist_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '../components/BootstrapClient';
import { notFound } from 'next/navigation';
import Navbar from '../components/Navbar/Navbar';
import { Suspense } from 'react';
import '../globals.css';
import { fetchMainPage, fetchMenu } from '@/service/service';
import { getDictionary } from './dictionaries';
import Footer from '../components/Footer/Footer';
import { firago } from '@/fonts/Fonts';
import {arialCaps} from '@/fonts/Fonts';
import { party } from '@/fonts/Fonts';

export async function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'ka' }, { lang: 'ru' }];
}

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export async function generateMetadata({ params }) {
	const { lang } = await params;
	return {
		htmlAttributes: {
			lang,
		},
	};
}

export default async function LangLayout({ children, params }) {
	const { lang } = await params;
	// i need menu ssr
	const menu = await fetchMenu(lang);
	const dict = await getDictionary(lang);
	const footerData = await fetchMainPage(lang);

	const supportedLangs = ['en', 'ka', 'ru'];

	if (!supportedLangs.includes(lang)) return notFound();

	return (
		<>
			<Suspense fallback={null}>
				<Navbar className={lang === 'ka' ? `${params.className}` : `${firago.className}`} lang={lang} menu={menu} dict={dict} />
			</Suspense>
			{children}
			<BootstrapClient />
			<Footer className={`${firago.className}`} data={footerData} dict={dict} />
		</>
	);
}
