import InnerVenue from '@/app/components/InnerVenue/InnerVenue';
import { fetchVenuesSlug } from '@/service/service';
import Link from 'next/link';

export default async function page({ params, searchParams }) {
	// Await params since it's a promise in newer Next.js
	const paramsResolved = await params;
	const { lang, id, slug } = paramsResolved;
	const data = await fetchVenuesSlug(lang, id, slug);

	const filterParams = new URLSearchParams();
	const searchParamsResolved = await searchParams;
	if (searchParamsResolved?.category)
		filterParams.set('category', searchParamsResolved.category);
	if (searchParamsResolved?.location)
		filterParams.set('location', searchParamsResolved.location);

	console.log(data);
	const backToVenuesLink = `/${lang}/venues/${id}${
		filterParams.toString() ? `?${filterParams.toString()}` : ''
	}`;

	return (
		<>
			<div className='container mb-4 mt-4'>
				<Link href={backToVenuesLink} className='btn btn-outline-secondary'>
					← Back to {id} venues
				</Link>
			</div>
			<InnerVenue data={data} id={id} backLink={backToVenuesLink} />
		</>
	);
}
