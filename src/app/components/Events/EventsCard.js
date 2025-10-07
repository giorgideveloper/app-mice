  "use client"
  import Link from 'next/link';
  import styles from './EventsCard.module.css'
  import Image from 'next/image';

  export default function EventsCard({ dict, events, lang }) {
    const eventDate = new Date(events?.event_start_date);
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[eventDate.getMonth()];
    

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = dayNames[eventDate.getDay()];
    
console.log(events)
    return (
      <div className={styles.eventsCard}>
        <Link onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `/${lang}/events/${events?.slug}`;
                        }}
                        href={"/"} className={styles.link}>
        <div className="col">
          <div className={styles.card}>
            <div className={styles.dataCard}>
            <h2>{events?.event_start_date?.slice(8, 10)}</h2> <h2>-</h2> <h2>{events?.event_end_date?.slice(8, 10)}</h2>  

            <span> <br/>{month}<br/>{dayOfWeek}</span> 
            </div>
            <div className={styles.imageContainer}>
              <Image src={events?.image} alt="Event Image" width={320} height={200} className={styles.image} />
            </div>
            <div className={styles.content}>
              <p>{events?.name}</p>
              <p  className={styles.description} dangerouslySetInnerHTML={
                { __html: events?.description || 'No description available' }
              }></p>
              <p>WHERE: {events?.place}</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    )
  }
