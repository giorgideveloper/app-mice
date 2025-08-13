import InnerImage from './InnerImage';
import style from './InnerVenues.module.css';

export default function InnerVenue({ data }) {
	return (
		<>
			<div className={`container ${style.innerContainer}`}>
				<div className='row'>
					<div className='col-12 mt-5'>
						<InnerImage image={data.image} />
					</div>
				</div>
				<div className={`row ${style.innerRow}`}>
					<div className='col-12 col-md-6 mt-2'>
						<div className={`${style.innerTitle}`}>
							<h3>{data?.name}</h3>
						</div>
					</div>
					<div className='col-12 col-md-6 mt-2'>
						<div className={`${style.innerLocation}`}>
							<h3>{data?.location?.name}</h3>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div
							dangerouslySetInnerHTML={{
								__html: data?.description,
							}}
						></div>
					</div>
				</div>
			</div>
		</>
	);
}
