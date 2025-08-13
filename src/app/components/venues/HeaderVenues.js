import styles from './HeaderVenues.module.css';
export default function HeaderVenues() {
  return (
    <div className={`container-fluid px-0 ${styles.header}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className={styles.title}>Header Venues</h1>
            <p className={styles.description}>Discover a variety of venues for your events.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
