import HeaderVenues from './HeaderVenues';
import styles from './Venues.module.css';
import VenuesCard from './VenuesCard';
import VenuesFilter from './VenuesFilter';

export default function Venues({ data, lang, id }) {
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
								<VenuesFilter />
							</div>
							<div className='col-md-9'>
								<VenuesCard data={data} lang={lang} id={id} />
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
