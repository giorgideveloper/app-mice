
import ImageApp from '@/app/plugins/ImageApp';
import styles from './InnerEvent.module.css';
import ImageGallery from '@/app/plugins/ImageGallery';

export default function InnerEvent({ eventData }) {
  console.log('InnerEvent eventData:', eventData.image);
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className={styles.imageContainer}>
             <ImageApp img={eventData?.image} alt={eventData?.name} />
          </div>
          <div className={styles.textContainer}>{eventData.name}</div>
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
