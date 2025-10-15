'use client'
import { useEffect,useState } from 'react'
import HeaderEvents from './HeaderEvents'
import EventsBtn from './EventsBtn'
import EventsFilter from './EventsFilter'
import EventsCard from './EventsCard'
import { fetchEventsDate, } from '@/service/service';
import LoadMore from '../LoadMore/LoadMore'


export default function Exhibitions({ dict, events, lang }) {
    const [selectedStartDate, setSelectedDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [filteredByDateEvents, setFilteredByDateEvents] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState();
    const [selectedReset, setSelectedReset] = useState(false);
    const [mainUrl, setMainUrl] = useState('/event/?category=EXHIBITIONS&page=');
    const [post, setPost] = useState(events.results || []);
    const [page, setPage] = useState(2);


     useEffect(() => {
        const eventsFilterDate = async () => {
          try {
            if (selectedStartDate && selectedEndDate) {
              const tagToFilter =  null;
              const category = "EXHIBITIONS";
              const data = await fetchEventsDate(lang, category, tagToFilter, selectedStartDate, selectedEndDate);
              if(data.results && data.results.length > 0){
                setFilteredByDateEvents(data.results);
                return;
              }
              setFilteredByDateEvents([]);
            } else {
              setFilteredByDateEvents([]);
            }
          } catch (error) {
            console.error('Error fetching events by date:', error);
            setFilteredByDateEvents([]);
          }
        };
        
        eventsFilterDate();
      }, [selectedStartDate, selectedEndDate, lang]);

      useEffect(() => {
      if (selectedStartDate && selectedEndDate && filteredByDateEvents.length  > 0) {
        setDisplayedEvents(filteredByDateEvents);
      }
     
      else if (selectedStartDate && selectedEndDate && filteredByDateEvents.length === 0) {

        setDisplayedEvents([]);
      }
      else {
        // Default: show all events
        setDisplayedEvents(post|| []);
      }
    }, [post, events?.results, filteredByDateEvents, selectedStartDate, selectedEndDate]);


     const handleClickReset = (e) => {
       e.preventDefault();
       setSelectedDate(null);
       setSelectedEndDate(null);
       setFilteredByDateEvents([]);
       setSelectedReset(prev => !prev); 
     };
  return (
    <>
      <HeaderEvents title={dict?.exhibitions?.title} lang={lang} />
      <div className="container">
              <div className="row">
                <EventsBtn dict={dict} lang={lang} />
                <EventsFilter dict={dict} setSelectedDate={setSelectedDate} setSelectedEndDate={setSelectedEndDate} handleClickReset={handleClickReset} selectedReset={selectedReset} />
              </div>
              <div className="row">
                {displayedEvents?.length === 0 ? (
                  <p>No events available</p>
                ) : (
                  displayedEvents?.map((event) => (
                    <EventsCard key={event.id} dict={dict} events={event} lang={lang} />
                  ))
                )}
              </div>
                <div className="row">
                      <div className="col-12">
                        {post?.length >= 10 && (
                          <LoadMore  dict={dict} lang={lang} items={events?.results} post={post} setPost={setPost} page={page} setPage={setPage} mainUrl={mainUrl} />
                        )}
                      </div>
                    </div>
            </div>
    </>
  )
}
