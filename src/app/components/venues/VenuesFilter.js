'use client'
import React from 'react';
import style from './VenuesFilter.module.css'; 

export default function VenuesFilter({ dict, id, setCategories, setLocations }) {

        function handleCategories(e) {
                setCategories(e.target.value);
        }
        
        function handleLocation(e) {
                setLocations(e.target.value);
                console.log('Location selected:', e.target.value);
        }

    return (
        <div className={style.venuesFilter}>
                <div className={style.filterMap}>
                        <button className='btn'>View on Map</button>
                </div>
                {id !== 'conference' ? 
                <div className={style.border}>
                        <h4>{dict.filter.categoryName}</h4>
                                <ul className={style.checkboxList}>
                                       {dict?.filter?.category && Object.entries(dict.filter.category).map(([key, value], index) => (
                                        <li key={index}>
                                             <input id={`venue${index + 5}`} className={style.roundCheckbox} value={key} name='category' onChange={(e) => handleCategories(e)} type="radio" /> 
                                             <label htmlFor={`venue${index + 5}`}>{value}</label>
                                        </li>
                                ))}
                                </ul>
                </div>
: ""}
                <div className={style.border}>
                        <h4>{dict.filter.locationName}</h4>
                                <ul className={style.checkboxList}>
                                        {dict?.filter?.location && Object.entries(dict.filter.location).map(([key, value], index) => (
                                        <li key={index}>
                                             <input id={`venue${index + 3}`} className={style.roundCheckbox} value={key} name='location' onChange={(e) => handleLocation(e)} type="radio" /> 
                                             <label htmlFor={`venue${index + 3}`}>{value}</label>
                                        </li>
                                ))}
                                </ul>
                </div>
        </div>
    )
}
