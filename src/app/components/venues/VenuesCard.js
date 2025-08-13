import styles from './VenuesCard.module.css';
import ClientLink from './ClientLink';
import ImageApp from '@/app/plugins/ImageApp';
export default function VenuesCard({ data, lang, id }) {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h4 className={`pb-4 ${styles.title}`}>{id}</h4>
					</div>
					{data?.results?.map(item => (
						<div key={item.id} className='col-lg-4 col-12'>
							<ClientLink href={`/${lang}/venues/${id}/${item.slug}`}>
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
											<li>address</li>
											<li>capacity</li>
										</ul>
									</div>
								</div>
							</ClientLink>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
