export async function generateStaticParams() {
	return [{ lang: 'en-US' }, { lang: 'ka-GE' }, { lang: 'ru-RU' }];
}

export const metadata = {
	title: 'MICE Platform',
	description: 'Internationalized App Router example',
};

export default async function RootLayout({ children, params }) {
	const { lang } = await params;
	return (
		<html lang={lang}>
			<body>{children}</body>
		</html>
	);
}
