
'use client';
import styles from './WigetEvents.module.css'; 
import EventOverlay from './EventOverlay';
import { useState } from 'react';
import ImageApp from '@/app/plugins/ImageApp';

export default function WigetEvents({dict,data,lang}) {

    const EventsVenues = ({imageSrc, title, category, description}) => {
        const [isHovered, setIsHovered] = useState(false);
        
        return (
           
            <div className="col-12 col-md-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className={styles.imageContainer}>
                    {isHovered ? (
                        <EventOverlay dict={dict} data={data} title={title} lang={lang} category={category} description={description} />
                        ) : (
                            <>
                                <ImageApp img={imageSrc} alt={title} />
                                <div className={styles.overlayContent}>
                                   <h3>{title}</h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>
    )}
    
    return (
        <div className={`container-fluid px-0 py-5 ${styles.eventsSection}`}>
            <div className="row text-center py-5">
                <h1>{dict?.["venue-title"]}</h1>
                <p>აქ შეგიძლიათ მოიძიოთ და მოაწყოთ ღონისძიებები</p>
            </div>
            <div className="row g-0">
              {data?.venues?.map(item => {
                return <EventsVenues key={item?.id} imageSrc={item?.image} title={item?.title} category={item?.venue_category} description={item?.description} />;
              })}              
            </div>
        </div>
    )
}
