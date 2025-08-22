import styles from './VenuesCard.module.css';
import ClientLink from './ClientLink';
import ImageApp from '@/app/plugins/ImageApp';
import location from '../../image/location.svg'
import reserve from '../../image/reserve.svg'
import Image from 'next/image';
export default function VenuesCard({ data, lang, id }) {
	console.log(data);
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
											<li>
												<Image src={location} width={20} height={20} alt="location" />
												address
											</li>
											<li>
												<Image src={reserve} width={20} height={20} alt="reserve" />{id}</li>
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
