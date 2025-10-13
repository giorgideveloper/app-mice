
import ImageApp from '@/app/plugins/ImageApp';
import styles from './InnerEvent.module.css';
import ImageGallery from '@/app/plugins/ImageGallery';
import { CiGlobe, CiLocationOn, CiMail } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";



export default function InnerEvent({ eventData }) {
  console.log('InnerEvent eventData:', eventData);
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className={styles.imageContainer}>
             <ImageApp img={eventData?.images[0]?.image} alt={eventData?.name} />
          </div>
          <div className={styles.textContainer}>{eventData.name}</div>
          <div className={styles.contactInfoContainers}>
						<div className={styles.contactInfo}>
							<ul>
                
								<li className={styles.contactLogo}>
									<ImageApp img={eventData?.image} alt={eventData?.name} />
								</li>
							</ul>
						</div> 

						<div className={styles.contactInfo}>
							<ul>
                <li>
									<CiPhone />
                  <a href={`tel:${eventData?.phone}`}>{eventData?.phone}</a>
								</li>	
                 <li>
									<CiMail />
                  <a href={`mailto:${eventData?.email}`}>{eventData?.email}</a>
								</li>						
								<li>
									<CiGlobe />
									<a target='blank' href={eventData?.website}>
										{eventData?.website}
									</a>
								</li>
               
							</ul>
						</div>
						<div className={styles.contactInfo}>
							<ul>
								<li>
									<CiLocationOn />
									{eventData?.eventhall_address}
								</li>
                		<li>
									<IoHomeOutline />
									{eventData?.place}
								</li>
                		<li>
									<FaRegCalendarAlt />
									{eventData?.event_start_date} - {eventData?.event_end_date}
								</li>
							</ul>
						</div>
					</div>
          <div className={styles.descriptionContainer}><div dangerouslySetInnerHTML={{ __html: eventData?.description || ""}}></div></div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {eventData?.images && eventData.images.length > 0 && (
            <ImageGallery images={eventData.images} />
          )}
        </div>
      </div>
    </div>
    </>
  )
}
