import React from 'react'
import styles from './HeaderEvents.module.css'
import eventsHeader from '@/app/image/events-header.jpg'
import ImageApp from '@/app/plugins/ImageApp'

export default function HeaderEvents() {
  return (
    <div className='container-fluid px-0'>
      <div className="row">
        <div className="col-12">
          <div className={styles.headerImage}>
          <ImageApp img={eventsHeader} alt="Events Header" />
          <div className="container"></div>
           <div className={styles.headerContent}>
                  <h1 className="">Events</h1>
          </div>

          </div>
         
        </div>
      </div>
    </div>
  )
}
