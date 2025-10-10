"use client"
import React from 'react'
import styles from './VenueVideo.module.css';
import SimpleParallax from "simple-parallax-js";
import ImageApp from '@/app/plugins/ImageApp';
import Image from 'next/image';
import thumbnail from '@/app/image/cultural.jpg';

export default function VenueVideo({data}) {
    const [hasBeenVisible, setHasBeenVisible] = React.useState(false);
    const videoRef = React.useRef(null);
    
    // Convert regular YouTube URL to embed URL
    const getEmbedUrl = (url) => {
        if (!url) return '';
        // Extract video ID from YouTube URL
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        
        // Adding vq=hd1080 for high quality and additional parameters for better filling
        return (match && match[2].length === 11) 
            ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&loop=1&playlist=${match[2]}&color=white&enablejsapi=1&vq=hd1080&origin=${encodeURIComponent(window.location.origin)}`
            : url;
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the video comes into view, set hasBeenVisible to true
                // This will ensure the video continues playing even after scrolling away
                if (entry.isIntersecting) {
                    setHasBeenVisible(true);
                    
                    // Once the video has been visible once, we can disconnect the observer
                    if (videoRef.current) {
                        observer.unobserve(videoRef.current);
                    }
                }
            },
            { threshold: 0.1 } // Reduced threshold to start video earlier
        );
        
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className='container-fluid p-0'>
            <div className='row m-0'>
                <div className="col-12">
                     {/* <SimpleParallax  scale={1.7}>
                         <Image src={thumbnail} alt={"image"} width={768} height={430} />
                     </SimpleParallax> */}
                </div>
                <div className='col-12 p-0'>
              
                    {data?.video_on_main?.video_url && (
                        <div 
                            className={styles.videoWrapper} 
                            style={{ 
                                height: '100vh',  /* Force full viewport height */
                                maxHeight: '700px',
                                overflow: 'hidden',
                            
                            }}
                        >
                            <div 
                                className={styles.videoContainer} 
                                ref={videoRef}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden'
                                }}
                            >
                               
                                {hasBeenVisible && (
                                           <SimpleParallax scale={1.5}>
                                    <iframe
                                        className={styles.fullVideo}
                                        src={getEmbedUrl(data?.video_on_main?.video_url)}
                                        title="YouTube video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        frameBorder="0"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            objectFit: 'cover',
                                            transform: 'scale(1.5)', /* Slightly scale up to remove black bars */
                                        }}
                                    ></iframe>
                                    </SimpleParallax>
                                )}
                            </div>
                        </div>
                    )}
                 
                </div>
            </div>
        </div>
    )
}
