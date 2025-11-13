import ImageApp from '@/app/plugins/ImageApp';
import styles from './HeaderVenues.module.css';
import slider from '@/app/image/sport.jpg';

export default function HeaderVenues({ id, dict, data, lang }) {
	const fc = itm => {
		if (itm === 'conference')
			return dict['venue-header']['conference']['title'];
		if (itm === 'cultural') return dict['venue-header']['cultural']['title'];
		if (itm === 'sport') return dict['venue-header']['sports']['title'];
	};

	const dc = itm => {
		if (itm === 'conference')
			return dict['venue-header']['conference']['subtitle'];
		if (itm === 'cultural') return dict['venue-header']['cultural']['subtitle'];
		if (itm === 'sport') return dict['venue-header']['sports']['subtitle'];
	};

	return (
		<div
			className={`container-fluid px-0 ${styles.header}`}
			style={{
				//   backgroundImage: `url(${slider.src || slider})`,
				background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${data?.cover?.image || slider}) no-repeat center center`,
				backgroundSize: 'cover',
				height: '400px',
				display: 'flex',
				objectFit: 'fill',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div className={styles.backgroundImage}></div>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						{data?.cover && (
							<>
								<h1 className={styles.title} style={lang === "ka" ? { fontFamily: 'arialCaps' } : {}}>{data?.cover?.title}</h1>
								<div
									style={lang === "ka" ? { fontFamily: 'firago' } : {}}
									dangerouslySetInnerHTML={{
										__html: data?.cover?.description || '',
									}}
									className={styles.description}
								></div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
