"use client"
import { useEffect, useState } from 'react';
import HeaderVenues from './HeaderVenues';
import styles from './Venues.module.css';
import VenuesCard from './VenuesCard';
import VenuesFilter from './VenuesFilter';
import { fetchVenuesFilter } from '@/service/service';

export default function Venues({ data, lang, id, dict }) {
	const [categories, setCategories] = useState('');
	const [locations, setLocations] = useState('');
	const [result, setResult] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchVenuesFilter(lang, id, locations, categories);
			console.log('Filtered Venues: ', result);
			setResult(result);
		};
		fetchData();
	}, [categories, locations]);

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
								<VenuesFilter data={data} id={id} setCategories={setCategories}  setLocations={setLocations}  dict={dict} />
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
