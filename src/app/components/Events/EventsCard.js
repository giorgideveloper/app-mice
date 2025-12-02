"use client";
import Link from "next/link";
import styles from "./EventsCard.module.css";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

export default function EventsCard({ dict, events, lang }) {
  const eventDate = new Date(events?.event_start_date);
  const monthNames = {
    en: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    geo: [
      "იან",
      "თებ",
      "მარ",
      "აპრ",
      "მაი",
      "ივნ",
      "ივლ",
      "აგვ",
      "სექ",
      "ოქტ",
      "ნოე",
      "დეკ",
    ],
  };
  const month = monthNames[lang === "ka" ? "geo" : "en"][eventDate.getMonth()];

  const dayNames = {
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    geo: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
  };
  const dayOfWeek = dayNames[lang === "ka" ? "geo" : "en"][eventDate.getDay()];

  return (
    <div className={styles.eventsCard}>
      <Link href={`/${lang}/events/${events?.slug}`} className={styles.link}>
        <div className="col">
          <div className={styles.card}>
            <div className={styles.dataCard}>
              <h2>{events?.event_start_date?.slice(8, 10)}</h2> <h2>-</h2>{" "}
              <h2>{events?.event_end_date?.slice(8, 10)}</h2>
              <span>
                {" "}
                <br />
                {month}
                <br />
                {dayOfWeek}
              </span>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={events?.image}
                alt="Event Image"
                width={820}
                height={200}
                className={styles.image}
                priority={true}
              />
            </div>
            <div className={styles.content}>
              <p>{events?.name}</p>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{
                  __html:
                    events?.short_description || "No description available",
                }}
              ></p>
              <p>
                <IoLocationOutline /> {events?.place}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
