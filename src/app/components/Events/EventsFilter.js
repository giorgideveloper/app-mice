'use client'
import React from 'react'
import styles from './EventsFilter.module.css'
import { IoMdClose } from "react-icons/io";

export default function EventsFilter({ dict }) {
    const localDict = dict.events['filter-btn'];
    const [active, setActive] = React.useState(null);

    const handleClick = (key) => {
        setActive(active === key ? null : key);
    }
     
  return (
    <div className={styles.EventsFilter}>
        <div className={styles.filterItem}>
            <div className="row">
             <div className="col-6">     
                  {(Array.isArray(localDict) ? localDict : Object.values(localDict || {}))
                    .map((item, index) => {
                      const label = typeof item === 'string' ? item : item?.name ?? '';
                      const key = (item && typeof item === 'object' && 'id' in item) ? item.id : index;
                        return (
                          <button key={key} className='btn border-0' onClick={() =>  handleClick(key)}>
                            <span>{label}</span>
                                 {active === key ? <span className='ms-2'><IoMdClose/></span> : ''}
                            </button>
                                         );
                        })}
                </div>
            <div className="col-6">
                <button className='btn border-0'>Filter 2</button>
            </div>

            </div>
         
        </div>

    </div>
  )
}
