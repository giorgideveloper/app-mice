import styles from './HeaderVenues.module.css';
export default function HeaderVenues() {
  return (
    <div className={`container-fluid px-0 ${styles.header}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className={styles.title}>Header Venues</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
