'use client'
import React, { use } from 'react'
import Image from 'next/image'
import styles from './EventsFilter.module.css'
import calendar from '@/app/image/calendar.svg'
import filterLines from '@/app/image/filter-lines.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";

export default function EventsFilter({ dict, eventTags, setFilterTag, setSelectedDate, setSelectedEndDate, handleClickReset, selectedReset, lang }) {
    const [startDate, setStartDate] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const localDict = dict.events['filter-btn'];
    const [active, setActive] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    
    // Reset local state when selectedReset changes
    React.useEffect(() => {
      if (selectedReset) {
        setStartDate(null);
        setEndDate(null);
        setActive(null);
        setIsOpen(false);
      }
    }, [selectedReset]);


    const handleClick = (key, label) => {
        setActive(active === key ? null : key);
        setFilterTag(active === key ? null : label);
    }

     const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);

      if (start && end) {
          setIsOpen(!isOpen);
            const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          };
      
      const formattedStartDate = formatDate(start);
      const formattedEndDate = formatDate(end);
      
      setSelectedDate(formattedStartDate);
      setSelectedEndDate(formattedEndDate);
    }
  };


    const handleClickDate = (e) => {
      e.preventDefault();
      setIsOpen(true);

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
                            <span>{label + (lang === 'en' ? " Events" : '')}</span>
                                 {active === key ? <span className='ms-2'><IoMdClose/></span> : ''}
                            </button>
                                );
                        })}
                </div>
            <div className="col-6 justify-content-end d-flex">
              <div className={styles.dataFilter}>
              <button className={`btn bg-none ${startDate && endDate ? styles.bgInput : ''}`} onClick={handleClickDate}><Image src={calendar} 
               alt="Calendar" /> {startDate && endDate ? startDate?.toISOString()?.split('T')[0] + ' to ' + endDate?.toISOString()?.split('T')[0] : dict.events['date-picker']['select-date']} 
                   
                  </button>
                  {isOpen && (
                    <div className={styles.datePicker}>
                  <DatePicker
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      isClearable
                      inline
                      />
                      </div>
              )}
                  <button className='btn bg-none' onClick={handleClickReset}><Image src={filterLines} alt="Filter" /> {dict.events['date-picker']['clear']}</button>

              </div>
              
              
            </div>

            </div>
         
        </div>

    </div>
  )
}
