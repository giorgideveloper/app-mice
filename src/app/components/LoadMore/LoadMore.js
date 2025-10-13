'use client'
import React, { useState } from 'react'
import { fetchLoadMore } from '../../../service/service';
import styles from './LoadMore.module.css';

export default function LoadMore({lang, items, post, setPost, page, setPage, mainUrl, dict}) {
    const [haseMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState(mainUrl || '/pages/media-blog/?page=');
    

    

    const handleLoadMore = async () => {
       setLoading(true);
       const data = await fetchLoadMore(lang, url, page)
       console.log(data, 'load more data');
       
       if (data?.results?.length > 0) {
           setPost(prev => [...prev, ...data.results]);
           setPage(prev => prev + 1);
       }
       else{
           setHasMore(false);
       }
       setLoading(false);
       setHasMore(false);
      
    }
    
  return (
    <div className={`text-center ${styles.loadMoreButton}`}>
    {haseMore &&(
         <button className={`btn btn-outline-secondary rounded-5 fs-5`} style={{
            border: '1px solid #000',
            fontFamily: 'firaGo, sans-serif',
            color: '#101828',
            
            
         }} onClick={handleLoadMore} disabled={loading}>
            <span>
                 {loading ? 'Loading...' : dict['load-more'] || 'Load More'}
            </span>
     
    </button>
    )}
   
    </div>
  )
}
