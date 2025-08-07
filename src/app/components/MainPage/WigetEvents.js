
import styles from './WigetEvents.module.css'; // Assuming you have a CSS module for WigetEvents styles
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import card from '../../image/card.webp'; // Adjust the path as necessary

export default function WigetEvents() {
return (
    <div className={`container-fluid px-0 py-5 ${styles.eventsSection}`}>
        <div className="row text-center py-5">
            <h1>ღონისძიებების ადგილები</h1>
            <p>აქ შეგიძლიათ მოიძიოთ და მოაწყოთ ღონისძიებები</p>
        </div>
        <div className="row g-0">
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
