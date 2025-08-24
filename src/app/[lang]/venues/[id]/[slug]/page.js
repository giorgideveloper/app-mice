import InnerVenue from '@/app/components/InnerVenue/InnerVenue';
import { fetchVenuesSlug } from '@/service/service';
import Link from 'next/link';

export default async function page({ params, searchParams }) {
	const { lang, id, slug } = params;
	const data = await fetchVenuesSlug(lang, id, slug);

	const filterParams = new URLSearchParams();
	if (searchParams?.category) filterParams.set('category', searchParams.category);
	if (searchParams?.location) filterParams.set('location', searchParams.location);
	

	const backToVenuesLink = `/${lang}/venues/${id}${filterParams.toString() ? `?${filterParams.toString()}` : ''}`;
	
	return (
		<>
			<div className="container mb-4 mt-4">
				<Link href={backToVenuesLink} className="btn btn-outline-secondary">
					← Back to {id} venues
				</Link>
			</div>
			<InnerVenue data={data} backLink={backToVenuesLink} />
		</>
	);
}
