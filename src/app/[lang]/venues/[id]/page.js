import Venues from '@/app/components/venues/Venues';
import { party } from '@/fonts/Fonts';
import { fetchVenues, fetchVenuesFilter } from '@/service/service';
import { getDictionary } from '../../dictionaries';

export const metadata = {
	title: 'Venues | Visit Batumi',
	description: 'Internationalized App Router example',
};

export default async function page({ params, searchParams }) {
	const { lang, id } = params;
    const dict = await getDictionary(lang); 
    
    // Get filter parameters from URL
    const category = searchParams?.category || '';
    const location = searchParams?.location || '';
    
    // If filter parameters exist, fetch filtered data
    let data;
    if (category || location) {
        data = await fetchVenuesFilter(lang, id, location, category);
    } else {
        // Otherwise fetch all venues
        data = await fetchVenues(lang, id);
    }

	return (
		<div className={`${party.className}`}>
			<Venues data={data} lang={lang} id={id} dict={dict} />
		</div>
	);
}
