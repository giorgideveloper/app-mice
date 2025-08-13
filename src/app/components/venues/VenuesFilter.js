import React from 'react';
import style from './VenuesFilter.module.css'; 

export default function VenuesFilter() {
    return (
        <div className={style.venuesFilter}>
                <div className={style.filterMap}>
                        <button className='btn'>View on Map</button>
                </div>
                <div className={style.border}>
                        <h4>Bussiness/Corporate Venues</h4>
                                <ul className={style.checkboxList}>
                                        <li>
                                             <input id="venue1" className={style.roundCheckbox} type="checkbox" /> 
                                             <label htmlFor="venue1">Venue 1</label>
                                        </li>
                                </ul>
                </div>
                <div className={style.border}>
                        <h4>location</h4>
                                <ul className={style.checkboxList}>
                                        <li>
                                             <input id="venue2" className={style.roundCheckbox} type="checkbox" /> 
                                             <label htmlFor="venue2">Venue 1</label>
                                        </li>
                                </ul>
                </div>
        </div>
    )
}
