import InnerVenue from '@/app/components/InnerVenue/InnerVenue';
import { fetchVenuesSlug } from '@/service/service';

export default async function page({ params }) {
	const { lang, id, slug } = await params;
	const data = await fetchVenuesSlug(lang, id, slug);
	console.log('Venue data:', data);
	return (
		<>
			<InnerVenue data={data} />
		</>
	);
}
