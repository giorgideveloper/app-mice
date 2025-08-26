import styles from './HeaderVenues.module.css';
export default function HeaderVenues({ id }) {

	const fc = (itm) => {
		if (itm === 'conference') return 'BUSINESS / CORPORATE VENUES';
		if (itm === 'cultural') return 'CULTURAL VENUES';
		if (itm === 'sport') return 'SPORT VENUES'

	}

	const dc = (itm) => {
		if (itm === 'conference') return 'Meeting and Conference venues, where ideas meet success';
		if (itm === 'cultural') return 'Trip to Crossroads';
		if (itm === 'sport') return 'Celebrating every moment of victory';
	}

	return (
		<div className={`container-fluid px-0 ${styles.header}`}>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h1 className={styles.title}>{fc(id)}</h1>
						<p className={styles.description}>
							{dc(id)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
