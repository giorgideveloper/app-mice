import React from 'react'
import styles from './AboutBatumi.module.css'
import ImageApp from '@/app/plugins/ImageApp'

export default function AboutBatumi() {
  return (
    <>
    <div className="container-fluid m-0">
        <div className="row">
            <div className="col-12 col-lg-6  order-2 order-lg-1 g-0">
                <div className={styles.imageContainer}>
                    <ImageApp />
                </div>
            </div>
             <div className="col-12 col-lg-6  order-1 order-lg-2 g-0">
            <div className={styles.textContainer}>
                <h2>Why to Choose Batumi?</h2>
                <p>Batumi, located between the crossroads of European and Asian countries, offers a great combination of international brand hotels, breathtaking surroundings, and warm hospitality, ready to host and create unforgettable MICE experience.</p>
                </div>
            </div>
        </div>
        <div className="row">
            
             <div className="col-12 col-lg-6 g-0">
            <div className={styles.textContainerLeft}>
                <h2>Why to Choose Batumi?</h2>
                <p>Batumi, located between the crossroads of European and Asian countries, offers a great combination of international brand hotels, breathtaking surroundings, and warm hospitality, ready to host and create unforgettable MICE experience.</p>
                </div>
            </div>
            <div className="col-12 col-lg-6 g-0">
                <div className={styles.imageContainer}>
                    <ImageApp />
                </div>
            </div>
        </div>
    </div>

    
     
 
    </>
  )
}
