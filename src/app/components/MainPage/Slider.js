"use client";
import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import image1 from '../../image/slider1.webp';

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
        <div className="swiper" ref={swiperRef} style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ width: '100%', height: '85vh' }}>
                    <Image 
                        src={image1} 
                        alt="Slide 1" 
                        fill 
                        style={{ objectFit: 'cover',height: '100%', width: '100%' }}
                        priority
                    />
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </>
)
}
