
import ImageApp from '@/app/plugins/ImageApp';
import styles from './InnerEvent.module.css';

export default function InnerEvent({ slug, lang }) {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className={styles.imageContainer}>
             <ImageApp/>
          </div>
          <div className={styles.textContainer}>InnerEvent - {slug} - {lang}</div>
          <div className={styles.descriptionContainer}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim fuga alias, dicta adipisci iusto minus labore eius omnis sequi consectetur impedit dolore laudantium voluptate, assumenda nostrum, laboriosam magnam nesciunt. Asperiores!</div>
        </div>
      </div>
    </div>
    </>
  )
}
