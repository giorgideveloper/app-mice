'use client';
import ImageApp from '@/app/plugins/ImageApp';
import InnerImage from './InnerImage';
import style from './InnerVenues.module.css';
import { CiGlobe, CiLocationOn, CiMail } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { IoMdAirplane } from 'react-icons/io';
import { FaDoorClosed } from 'react-icons/fa6';
import useFancybox from './useFancybox';


export default function InnerVenue({ data, backLink }) {
	const groupByMeetingSpace = (data = []) => {
		return data.reduce((acc, item) => {
			const id = item.meeting_space?.id;
			if (!acc[id]) {
				acc[id] = {
					meeting_space_name: item?.meeting_space?.meeting_space_name,
					items: [],
				};
			}
			acc[id].items.push(item);
			return acc;
		}, {});
	};

	const grouped = groupByMeetingSpace(data?.seating_types || []);
	
	const uniqueSeatingNames = [
		...new Set(
			Object.values(grouped).flatMap(group =>
				group.items.map(item => item.seating_name)
			)
		),
	];
	const [fancyboxRef] = useFancybox({
		// Your custom options
	});

	return (
		<>
			<div className={`container ${style.innerContainer}`}>
				<div className='row'>
					<div className='col-12 mt-5'>
						<div className={style.imageContainer} ref={fancyboxRef}>
							{data?.image_gallery && data?.image_gallery.length > 0 && (
								<div className={style.imageGallery}>
									{data.image_gallery.map((image, index) => (
										<a
											key={index}
											className={style.imageGalleryImage}
											data-fancybox='gallery'
											href={image.image}
											style={{ display: index === 0 ? 'block' : 'none' }}
										>
											<img
												src={image.image}
												alt={`Gallery image ${index + 1}`}
												style={{
													width: '100%',
													height: 'auto',
													display: 'block',
												}}
											/>
										</a>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				{/* <div className={`row ${style.innerRow}`}>
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
				</div> */}

				<div className='row mt-3'>
					<div className={style.titleContainer}>
						<h3 className={style.title}>{data?.name}</h3>
						<span className={style.outdoorBadge}>{data?.location?.name}</span>
					</div>
					<h3 className='mt-3' style={{ marginBottom: '1em' }}>
						Contact info:
					</h3>
					<div className={style.contactInfoContainers}>
						<div className={style.contactInfo}>
							<ul>
								<li className={style.contactLogo}>
									<ImageApp src={data?.logo} alt={data.name} />
								</li>
							</ul>
						</div>

						<div className={style.contactInfo}>
							<ul>
								<li>
									<IoMdAirplane />
									Distance from airport: {data?.distance_from_airport} km
								</li>
								<li>
									<FaDoorClosed />
									Number of rooms: {data?.number_of_rooms}
								</li>
								<li>
									<CiGlobe />
									<a target='blank' href={data?.website}>
										{data?.website}
									</a>
								</li>
							</ul>
						</div>
						<div className={style.contactInfo}>
							<ul>
								<li>
									<CiMail />
									{data?.email}
								</li>
								<li>
									<CiPhone />
									{data?.phone}
								</li>
								<li>
									<CiLocationOn />
									{data?.address}
								</li>
							</ul>
						</div>
					</div>
					<h3 className='mt-3'>Description:</h3>
					<div
						className={style.description}
						dangerouslySetInnerHTML={{ __html: data?.description }}
					/>
					<div className={style.meetingSpacesContainer}>
						<h3 className={style.sectionTitle}>Meeting Spaces</h3>
						<div className={style.tableContainer}>
							<table className={style.meetingSpacesTable}>
								<thead>
									<tr>
										<th>Room</th>
										{uniqueSeatingNames.map(name => (
											<th key={name}>{name}</th>
										))}
									</tr>
								</thead>
								<tbody>
									{Object.values(grouped).map(group => (
										<tr key={group.meeting_space_name}>
											<td>{group.meeting_space_name}</td>
											{uniqueSeatingNames.map(name => {
												const match = group.items.find(
													i => i.seating_name === name
												);
												return (
													<td key={name}>{match ? match.capacity : '-'}</td>
												);
											})}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
