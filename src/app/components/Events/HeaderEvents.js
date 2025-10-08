import React from 'react'
import styles from './HeaderEvents.module.css'
import eventsHeader from '@/app/image/exebitions.png'
import ImageApp from '@/app/plugins/ImageApp'
import event from '@/app/image/event-header2.png'


export default function HeaderEvents({title}) {
  console.log("Title in HeaderEvents:", title);
  return (
    <div className='container-fluid px-0'>
      <div className="row">
        <div className="col-12">
          <div className={styles.headerImage}>
          <ImageApp img={title === "Events" ? event : eventsHeader} alt="Events Header" />
           <div className={styles.headerContent}>
                  <h1 className="">{title}</h1>
                  {/* <p className="">Discover upcoming events, workshops, and activities to engage with our community and enhance your experience.</p> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
