
import 'bootstrap/dist/css/bootstrap.min.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { firago, arialCaps } from '../fonts/Fonts';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function RootLayout({children}) {
	return (
		<html>
			<body className={`${geistSans.variable} ${geistMono.variable} ${firago.className} ${arialCaps.className}`}>
				{children}
			</body>
		</html>
	)
}