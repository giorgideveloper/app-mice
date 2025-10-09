'use client'
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import styles from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  const scrollContainerRef = useRef(null);
  

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      compact: false,
      idle: false,
      animated: true,
      showClass: "fancybox-zoomIn",
      hideClass: "fancybox-zoomOut",
    });


    return () => {
      Fancybox.destroy();
    };
  }, []);
  

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className={styles.galleryContainer}>
        <h3>Gallery</h3>
        <div className={styles.galleryWrapper}>
          <button 
            className={styles.navButton} 
            onClick={scrollLeft} 
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div 
            ref={scrollContainerRef}
            className={styles.imageScrollContainer} 
            style={{
              display: 'flex',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '10px 0',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch' // For better touch scrolling on iOS
            }}
          >
            {images.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <a
                  href={image.image || ""}
                  data-fancybox="gallery"
                  data-caption={`Image ${index + 1}`}
                  className={styles.fancyboxLink}
                >
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={image.image || ""} 
                      alt={`Image ${index + 1}`} 
                      width={500} 
                      height={300} 
                      className={styles.galleryImage}
                      priority={index < 2} // Prioritize loading of first few images
                    />
                    <div className={styles.imageOverlay}>
                      <svg className={styles.zoomIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <button 
            className={styles.navButton} 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
