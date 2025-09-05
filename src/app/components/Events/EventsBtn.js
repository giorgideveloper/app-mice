"use client"

import React from 'react'
import styles from './EventsBtn.module.css'

export default function EventsBtn() {
const [active, setActive] = React.useState(true);
 
  return (
    <>
    <div className={styles.btnContainer}>
        <button className='btn border-0'> 
            <span className={active ? styles.active : ''} onClick={() => {setActive(true)}}>EVENTS</span>
        </button>
        <button className='btn border-0'> 
            <span className={!active ? styles.active : ''} onClick={() => {setActive(false)}}>EXHIBITIONS</span>
        </button>
    </div>
    </>
  )
}
