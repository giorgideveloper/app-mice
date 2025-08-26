'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// lightbox დინამიკურად (თავიდანვე გამორთავს SSR-ს, щоб არ იყოს ჰიდრაციის შეცდომები)
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });

export default function Gallery({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={12}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: 24 }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <button
              type="button"
              onClick={() => { setIndex(i); setOpen(true); }}
              style={{
                width: '100%',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                borderRadius: 12,
                overflow: 'hidden',
              }}
              aria-label="Open image"
            >
              <Image
                src={img.src}
                alt={img.alt || ''}
                width={img.width || 1600}
                height={img.height || 900}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }}
                priority={i < 3}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* fullscreen lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((img) => ({ src: img.src }))}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </>
  );
}
