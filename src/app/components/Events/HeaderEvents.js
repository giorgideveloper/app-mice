import React, { useEffect } from 'react'
import styles from './HeaderEvents.module.css'
import eventsHeader from '@/app/image/exebitions.png'
import ImageApp from '@/app/plugins/ImageApp'
import event from '@/app/image/event-header2.png'
import { fetchEventCategories } from '@/service/service'


export default function HeaderEvents({title,lang}) {
  const [eventCategory, setEventCategory] = React.useState([]);
  
  useEffect(() => {
    const fetchCategorys = async () => {
      try {
        const data = await fetchEventCategories(lang);
        setEventCategory(data.results);

      } catch (error) {
        console.error('Error fetching event categories:', error);
      }
    }

    fetchCategorys();
  }, []);


  return (
    <div className='container-fluid px-0'>
      <div className="row">
        <div className="col-12">
          <div className={styles.headerImage}>
          <ImageApp img={title.slug === "events" ? event : eventsHeader} alt="Events Header" />
           <div className={styles.headerContent}>
                  <h1 className="">{title.slug === "events" ? eventCategory?.[0]?.name : eventCategory?.[1]?.name}</h1>
                  {/* <p className="">Discover upcoming events, workshops, and activities to engage with our community and enhance your experience.</p> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
