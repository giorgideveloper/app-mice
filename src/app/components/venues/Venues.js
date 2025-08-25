"use client"
import { useEffect, useState } from 'react';
import HeaderVenues from './HeaderVenues';
import styles from './Venues.module.css';
import VenuesCard from './VenuesCard';
import VenuesFilter from './VenuesFilter';
import { fetchVenuesFilter } from '@/service/service';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Venues({ data, lang, id, dict, locationData, categoryVenues }) {
	const router = useRouter();
	const searchParams = useSearchParams();
	
	// Initialize states from URL search params if available
	const [categories, setCategories] = useState(searchParams.get('category') || '');
	const [locations, setLocations] = useState(searchParams.get('location') || '');
	const [result, setResult] = useState(null);
	
	
	useEffect(() => {
		const params = new URLSearchParams();
		if (categories) params.set('category', categories);
		if (locations) params.set('location', locations);
		
		const newUrl = `/${lang}/venues/${id}${params.toString() ? `?${params.toString()}` : ''}`;
		router.push(newUrl, { scroll: false });
		
		const fetchData = async () => {
			try {
				const result = await fetchVenuesFilter(lang, id, locations, categories);
				setResult(result);
			} catch (error) {
				console.error("Error fetching filtered data:", error);
				setResult(null);
			}
		};
		
		fetchData();
	}, [categories, locations, lang, id, router]);

	return (
		<>
			<div className={styles.venues}>
				<section className={styles.venuesHeader}>
					<HeaderVenues id={id} />
				</section>
				<section className={styles.venuesContent}>
					<div className='container-fluid'>
						<div className='row g-0'>
							<div className='col-md-3'>
								<VenuesFilter data={data} id={id} setCategories={setCategories} setLocations={setLocations} dict={dict} locationData={locationData} categoryVenues={categoryVenues} />
							</div>
							<div className='col-md-9'>
								<VenuesCard data={result ? result : data} lang={lang} id={id} />
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
