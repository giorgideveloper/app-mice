'use client'
import React, { useEffect, useState } from 'react';
import style from './VenuesFilter.module.css';
import { useSearchParams, useRouter } from 'next/navigation';

export default function VenuesFilter({ dict, id, setCategories, setLocations, locationData, categoryVenues }) {
       
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
                                         {categoryVenues?.results?.sort((a, b) => a.id - b.id).map(item => {
                                            
                                                return (
                                                <li key={item.id}>
                                                     <input 
                                                        id={`category${item.id}`} 
                                                        className={style.roundCheckbox} 
                                                        value={item.name} 
                                                        name='category' 
                                                        onChange={(e) => handleCategories(e)} 
                                                        type="radio"
                                                        checked={selectedCategory === item.name}
                                                     /> 
                                                     <label htmlFor={`category${item.id}`}>{item.name}</label>
                                                </li>
                                                );
                                        })}
                                </ul>
                </div>
: ""}
                <div className={style.border}>
                        <h4>{dict.filter.locationName}</h4>
                                <ul className={style.checkboxList}>
                                        {locationData?.results?.sort((a, b) => a.id - b.id).map(item => {
                                                return (
                                                <li key={item.id}>
                                                     <input 
                                                        id={`venue${item.id}`} 
                                                        className={style.roundCheckbox} 
                                                        value={item.name} 
                                                        name='location' 
                                                        onChange={(e) => handleLocation(e)} 
                                                        type="radio"
                                                        checked={selectedLocation === item.name}
                                                     /> 
                                                     <label htmlFor={`venue${item.id}`}>{item.name}</label>
                                                </li>
                                                );
                                        })}
                                       
                             
                                </ul>
                </div>
                <div className={style.resetFilters}>
                        <button onClick={resetFilters} className='btn btn-sm '>
                            {dict.filter.resetFilters || "Reset Filters"}
                        </button>
                </div>
        </div>
    )
}
