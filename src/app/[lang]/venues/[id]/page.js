import Venues from '@/app/components/venues/Venues';
import { party } from '@/fonts/Fonts';
import { fetchVenues } from '@/service/service';
import { getDictionary } from '../../dictionaries';

export const metadata = {
	title: 'Venues | Visit Batumi',
	description: 'Internationalized App Router example',
};

export default async function page({ params }) {
	const { lang, id, slug } = await params;
    const dict = await getDictionary(lang); 
	const data = await fetchVenues(lang, id);

	return (
		<div className={`${party.className}`}>
			<Venues data={data} lang={lang} id={id} dict={dict} />
		</div>
	);
}
