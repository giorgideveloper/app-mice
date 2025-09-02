import Venues from '@/app/components/venues/Venues';
import { party } from '@/fonts/Fonts';
import { fetchCategory, fetchLocation, fetchVenues, fetchVenuesFilter } from '@/service/service';
import { getDictionary } from '../../dictionaries';

export const metadata = {
	title: 'Venues | Visit Batumi',
	description: 'Internationalized App Router example',
};

export default async function page({ params, searchParams }) {
	// Await both params and searchParams since they're promises in newer Next.js
	const paramsResolved = await params;
	const { lang, id } = paramsResolved;
    const dict = await getDictionary(lang); 
    
    // Get filter parameters from URL - await searchParams since it's a promise in newer Next.js
    const searchParamsResolved = await searchParams;
    const category = searchParamsResolved?.category || '';
    const location = searchParamsResolved?.location || '';
    
    // If filter parameters exist, fetch filtered data
    let data;
    if (category || location) {
        data = await fetchVenuesFilter(lang, id, location, category);
    } else {
        // Otherwise fetch all venues
        data = await fetchVenues(lang, id);
    }

    


    const locationData = await fetchLocation(lang);
    const categoryVenues = await fetchCategory(lang)
    

	return (
		<div className={`${party.className}`}>
			<Venues data={data} lang={lang} id={id} dict={dict} locationData={locationData} categoryVenues={categoryVenues} />
		</div>
	);
}
