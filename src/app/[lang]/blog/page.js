import Blog from '@/app/components/Blog/Blog';
import { party } from '@/fonts/Fonts';
import { fetchBlog } from '@/service/service';

export const metadata = {
	title: 'Blog | Visit Batumi',
	description: 'Internationalized App Router example',
};

export default async function page({ params }) {
	const { lang } = await params;
	const data = await fetchBlog(lang);
	console.log(data);
	return (
		<div className={`${party.className}`}>
			<Blog data={data} lang={lang} />
		</div>
	);
}
