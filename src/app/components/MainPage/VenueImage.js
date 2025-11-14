"use client";
import mainimage from "@/app/image/park-batumi2.jpeg";
import { useState } from "react";
import styles from "./VenueImage.module.css";
import { ImPlay2 } from "react-icons/im";
import { IoCloseCircle } from "react-icons/io5";

export default function VenueImage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className={styles.venueImageContainer}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageOverlay}>
            <button onClick={handleClick} className="btn">
              <ImPlay2 />
            </button>
          </div>
          <div
            className={styles.parallaxImage}
            style={{
              backgroundImage: `url(${mainimage.src})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "600px",
            }}
          />
        </div>
      </div>

      {isPlaying && (
        <div className={styles.modal} onClick={handleClick}>
          <div className={styles.modalContent}>
            <button onClick={handleClick} className={styles.closeButton}>
              <IoCloseCircle size={30} color="#fff" />
            </button>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/YG00FyDRFZI?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
