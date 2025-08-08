
'use client';
import styles from './WigetEvents.module.css'; 
import Image from 'next/image'; 
import card from '../../image/card.webp'; 
import EventOverlay from './EventOverlay';
import { useState } from 'react';


export default function WigetEvents() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className={`container-fluid px-0 py-5 ${styles.eventsSection}`}>
            <div className="row text-center py-5">
                <h1>ღონისძიებების ადგილები</h1>
                <p>აქ შეგიძლიათ მოიძიოთ და მოაწყოთ ღონისძიებები</p>
            </div>
            <div className="row g-0">
                <div className="col-12 col-md-4"  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className={styles.imageContainer}>
                        {isHovered ? (
                            <EventOverlay />
                        ) : (
                            <>
                                <Image
                                    src={card}
                                    alt="Event Card"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div className={styles.overlayContent}>
                                    <h3>სპორტული ვენიუები</h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className={styles.imageContainer}>
                        <Image
                            src={card}
                            alt="Event Card"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div className={styles.overlayContent}>
                            <h3>სპორტული ვენიუები</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className={styles.imageContainer}>
                        <Image
                            src={card}
                            alt="Event Card"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div className={styles.overlayContent}>
                            <h3>სპორტული ვენიუები</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
