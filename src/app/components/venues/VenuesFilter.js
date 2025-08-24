'use client'
import React, { useEffect, useState } from 'react';
import style from './VenuesFilter.module.css';
import { useSearchParams, useRouter } from 'next/navigation';

export default function VenuesFilter({ dict, id, setCategories, setLocations }) {
        const router = useRouter();
        const searchParams = useSearchParams();
        const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
        const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || '');

        // Set initial values based on URL parameters
        useEffect(() => {
            if (searchParams.get('category')) {
                setSelectedCategory(searchParams.get('category'));
                setCategories(searchParams.get('category'));
            }
            if (searchParams.get('location')) {
                setSelectedLocation(searchParams.get('location'));
                setLocations(searchParams.get('location'));
            }
        }, [searchParams, setCategories, setLocations]);

        function handleCategories(e) {
                const value = e.target.value;
                setSelectedCategory(value);
                setCategories(value);
        }
        
        function handleLocation(e) {
                const value = e.target.value;
                setSelectedLocation(value);
                setLocations(value);
        }

        function resetFilters() {
                setSelectedCategory('');
                setSelectedLocation('');
                setCategories('');
                setLocations('');
                
                // Force reload original data by updating the state
                const currentPath = window.location.pathname;
                router.push(currentPath, { scroll: false });
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
                                             <input 
                                                id={`venue${index + 5}`} 
                                                className={style.roundCheckbox} 
                                                value={key} 
                                                name='category' 
                                                onChange={(e) => handleCategories(e)} 
                                                type="radio"
                                                checked={selectedCategory === key} 
                                             /> 
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
                                             <input 
                                                id={`venue${index + 3}`} 
                                                className={style.roundCheckbox} 
                                                value={key} 
                                                name='location' 
                                                onChange={(e) => handleLocation(e)} 
                                                type="radio"
                                                checked={selectedLocation === key}
                                             /> 
                                             <label htmlFor={`venue${index + 3}`}>{value}</label>
                                        </li>
                                ))}
                                </ul>
                </div>
                <div className={style.resetFilters}>
                        <button onClick={resetFilters} className='btn btn-sm btn-secondary'>
                            {dict.filter.resetFilters || "Reset Filters"}
                        </button>
                </div>
        </div>
    )
}
