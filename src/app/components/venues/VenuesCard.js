import styles from './VenuesCard.module.css';
import ClientLink from './ClientLink';
import ImageApp from '@/app/plugins/ImageApp';
import location from '../../image/location.svg';
import reserve from '../../image/reserve.svg';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function VenuesCard({ data, lang, id }) {
	const searchParams = useSearchParams();
	const category = searchParams.get('category');
	const locationParam = searchParams.get('location');

	// Create a URL with preserved filter parameters
	const createVenueUrl = slug => {
		let baseUrl = `/${lang}/venues/${id}/${slug}`;

		// If we have filter parameters, add them to the URL
		const params = new URLSearchParams();
		if (category) params.set('category', category);
		if (locationParam) params.set('location', locationParam);

		if (params.toString()) {
			baseUrl += `?${params.toString()}`;
		}

		return baseUrl;
	};

	const formatTitle = id => {
		if (id === 'cultural') return 'Cultural Venues';
		if (id === 'conference') return 'Conference Venues';
		if (id === 'sport') return 'Sports Venues';
		return id;
	};

	return (
		<>
			<div className='container'>
				<div className='row g-4'>
					<div className='col-12'>
						<h4 className={`${styles.title}`}>{formatTitle(id)}</h4>
					</div>
					{data?.venues?.map(item => (
						<div key={item.id} className='col-lg-4 col-12'>
							<ClientLink href={createVenueUrl(item.slug)}>
								<div className='card border-0 rounded-4 bg-white shadow-sm'>
									<div className={styles.cardImage}>
										<ImageApp img={item?.image} alt={item?.name} />
									</div>
									<div className={styles.cardBody}>
										<h3>{item?.name}</h3>
										<button className='btn'>
											{item?.location?.name}, Georgia
										</button>
									</div>
									<div className={styles.cardFooter}>
										<ul>
											<li>
												<Image
													src={location}
													width={20}
													height={20}
													alt='location'
												/>
												{item?.address?.slice(0, 10) + ' ...'}
											</li>
											<li>
												<Image
													src={reserve}
													width={20}
													height={20}
													alt='reserve'
												/>
												{id}
											</li>
										</ul>
									</div>
								</div>
							</ClientLink>
						</div>
					))}
					<div className='mb-5'></div>
				</div>
			</div>
		</>
	);
}
