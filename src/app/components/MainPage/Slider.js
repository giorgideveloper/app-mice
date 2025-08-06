"use client";
import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Slider.module.css';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import image1 from '../../image/slider1.webp';
import Button from '../Button/Button';

export const Slider = () => {
    const swiperRef = useRef(null);
    const swiperInstanceRef = useRef(null);
    
    useEffect(() => {
        // Initialize Swiper when component mounts
        if (swiperRef.current && !swiperInstanceRef.current) {
            swiperInstanceRef.current = new Swiper(swiperRef.current, {
                // configure Swiper to use modules
                modules: [Navigation, Pagination],
                navigation: true,   
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
        
        // Cleanup on unmount
        return () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy();
                swiperInstanceRef.current = null;
            }
        };
    }, []);
return (
    <>
        <div className={`swiper ${styles.slider}`} ref={swiperRef} style={{ width: '100vw', height: '84.4vh', position: 'relative' }}>
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image 
                        src={image1} 
                        alt="Slide 1" 
                        fill 
                        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                        priority
                    />
                    {/* Black overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.34)',
                        zIndex: 1
                    }}></div>
                    <div className="container">
                        <div className="row">
                            <div className={styles.textOverlay}>
                        <h1>შეხვედრების ქალაქი</h1>
                        <p>ბათუმი ბიზნეს მითინგების თავშეყრის ერთ-ერთი საუკეთესო ქალაქია საქართველოში</p>
                        {/* <Button>მეტი ინფორმაცია</Button> */}
                    </div>
                        </div>
                    </div>
                   
                </div>
                <div className="swiper-slide" style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image 
                        src={image1} 
                        alt="Slide 1" 
                        fill 
                        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                        priority
                    />
                    {/* Black overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        left: '50px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '20px',
                        maxWidth: '400px',
                        color: 'white',
                        zIndex: 2
                    }}>
                        <h2>Second Slide</h2>
                        <p>Your text content here</p>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination" style={{ 
                position: 'absolute', 
                bottom: '140px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                '--swiper-pagination-color': 'white',
                '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.5)',
                '--swiper-pagination-bullet-inactive-opacity': '1'
            }}></div>
        </div>
    </>
)
}
