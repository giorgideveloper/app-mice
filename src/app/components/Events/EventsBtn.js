"use client"

import React from 'react'
import styles from './EventsBtn.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function EventsBtn({ dict, lang }) {
const [active, setActive] = React.useState(true);
const pathname = usePathname();


React.useEffect(() => {
  if (pathname.includes('/events')) {
    setActive(true);
  } else if (pathname.includes('/exhibitions')) {
    setActive(false);
  }
}, [pathname]);
 
  return (
    <>
    <div className={styles.btnContainer}>
   
          <Link href={`/${lang}/events`}>
               <button className='btn border-0'> 
            <span className={active ? styles.active : ''} onClick={() => {setActive(true)}}>{dict?.events?.title}</span>
             </button>
          </Link>
       
        <Link href={`/${lang}/exhibitions`}>
          <button className='btn border-0'> 
            <span className={!active ? styles.active : ''} onClick={() => {setActive(false)}}>{dict?.exhibitions?.title}</span>
          </button>
        </Link>
    </div>
    </>
  )
}
