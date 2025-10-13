import Blog from '@/app/components/Blog/Blog';
import { party } from '@/fonts/Fonts';
import { fetchBlog } from '@/service/service';
import { getDictionary } from '../dictionaries';

export const metadata = {
	title: 'Blog | Visit Batumi',
	description: 'Internationalized App Router example',
};

export default async function page({ params }) {
	const { lang } = await params;
	const data = await fetchBlog(lang);
	const dict = await getDictionary(lang);
	return (
		<div className={`${party.className}`}>
			<Blog data={data} lang={lang} dict={dict} />
		</div>
	);
}
