import InnerVenue from '@/app/components/InnerVenue/InnerVenue';
import { fetchVenuesSlug } from '@/service/service';
import Link from 'next/link';
import { getDictionary } from '../../../dictionaries';

export default async function page({ params, searchParams }) {
	// Await params since it's a promise in newer Next.js
	const paramsResolved = await params;
	const { lang, id, slug } = paramsResolved;
	const data = await fetchVenuesSlug(lang, id, slug);
	const dict = await getDictionary(lang); 

	const filterParams = new URLSearchParams();
	const searchParamsResolved = await searchParams;
	if (searchParamsResolved?.category)
		filterParams.set('category', searchParamsResolved.category);
	if (searchParamsResolved?.location)
		filterParams.set('location', searchParamsResolved.location);


	const backToVenuesLink = `/${lang}/venues/${id}${
		filterParams.toString() ? `?${filterParams.toString()}` : ''
	}`;
	const formatTitle = id => {
		if (id === 'cultural') return dict.venue['cultural-venue'];
		if (id === 'conference') return dict.venue['conference-venue'];
		if (id === 'sport') return dict.venue['sports-venue'];
		return id;
	};

	return (
		<>
			<div className='container mb-4 mt-4'>
				<Link href={backToVenuesLink} className='btn btn-outline-secondary'>
					← {dict.venue.backToVenues} {formatTitle(id)}
				</Link>
			</div>
			<InnerVenue data={data} id={id} backLink={backToVenuesLink} dict={dict} />
		</>
	);
}
