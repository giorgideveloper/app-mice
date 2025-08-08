import { Geist, Geist_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '../components/BootstrapClient';
import { notFound } from 'next/navigation';
import Navbar from '../components/Navbar/Navbar';
import '../globals.css';
import { firago } from '../../fonts/Fonts';
import { fetchMenu } from '@/service/service';
import { arialCaps } from '../../fonts/Fonts';
import { getDictionary } from './dictionaries';

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

export default async function RootLayout({ children, params }) {

	const { lang } = await params;
	// i need menu ssr
	const menu = await fetchMenu(lang);
	const dict = await getDictionary(lang);

	const supportedLangs = ['en', 'ka', 'ru'];

	if (!supportedLangs.includes(lang)) return notFound();

	return (
		<html lang={lang}>
			<body className={`${geistSans.variable} ${geistMono.variable} ${firago.className} ${arialCaps.className}`}>
				<Navbar lang={lang} menu={menu}  dict={dict}/>
				{children}
				<BootstrapClient />
			</body>
		</html>
	);
}
