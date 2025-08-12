import React from 'react'
import styles from './BlogCard.module.css';
import card from '@/app/image/card1.webp'
import Image from 'next/image';

export default function BlogCard({data}) {
  return (
    <>
        <div className={styles.card}>
            <Image src={data.main_image || card} width={1920}  height={400}alt="Blog Image" className={styles.image} />
          <div className={styles.title}> <h2>{data.title}</h2> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.83337 14.1668L14.1667 5.8335M14.1667 5.8335H5.83337M14.1667 5.8335V14.1668" stroke="#0C2D57" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
        </div>
   
    </>
    
  )
}
