'use client'
import React from 'react'
import Image from 'next/image'
import styles from './EventsFilter.module.css'
import calendar from '@/app/image/calendar.svg'
import filterLines from '@/app/image/filter-lines.svg'


import { IoMdClose } from "react-icons/io";

export default function EventsFilter({ dict, eventTags, setFilterTag }) {
    const localDict = dict.events['filter-btn'];
    const [active, setActive] = React.useState(null);

    const handleClick = (key, label) => {
        setActive(active === key ? null : key);
        setFilterTag(active === key ? null : label);
    }
     
  return (
    <div className={styles.EventsFilter}>
        <div className={styles.filterItem}>
            <div className="row">
             <div className="col-6">     
                  {(Array.isArray(eventTags) ? eventTags : Object.values(eventTags || {}))
                    .map((item, index) => {
                      const label = typeof item === 'string' ? item : item?.name ?? '';
                      const key = (item && typeof item === 'object' && 'id' in item) ? item.id : index;
                        return (
                          <button key={key} className={`btn border-0 ${active === key ? styles.focus : ''}`} onClick={() =>  handleClick(key, label)}>
                            <span>{label + " Events"}</span>
                                 {active === key ? <span className='ms-2'><IoMdClose/></span> : ''}
                            </button>
                                         );
                        })}
                </div>
            <div className="col-6 justify-content-end d-flex">
              <div className={styles.dataFilter}>
                  <button className='btn  bg-none'><Image src={calendar} alt="Calendar" /> Select dates</button>
                  <button className='btn  bg-none'><Image src={filterLines} alt="Filter" /> Clear filters</button>

              </div>
              
              
            </div>

            </div>
         
        </div>

    </div>
  )
}
