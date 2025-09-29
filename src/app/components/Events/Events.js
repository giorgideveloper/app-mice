"use client"
import { useEffect,useState } from 'react'
import HeaderEvents from './HeaderEvents'
import EventsBtn from './EventsBtn'
import EventsFilter from './EventsFilter'
import EventsCard from './EventsCard'
import { fetchEventsTag, fetchEventsDate, fetchEventsFilterTag } from '@/service/service';

export default function Events({ dict, events, lang }) {
  const [eventTags, setEventTags] = useState([]);
  const [filterTag, setFilterTag] = useState(null);
  const [filterTagEvents, setFilterTagEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [selectedStartDate, setSelectedDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [filteredByDateEvents, setFilteredByDateEvents] = useState([]);
  const [selectedReset, setSelectedReset] = useState(false);

  useEffect(() => {
    const fetchEventsTags = async () => {
      try {
        const data = await fetchEventsTag(lang);
        setEventTags(data.results);

      } catch (error) {
        console.error('Error fetching event tags:', error);
      }
    };
    
    fetchEventsTags();
  }, [lang]);


  useEffect(() => {
    const eventsFilterTag = async () => {
      try {
        const data = await fetchEventsFilterTag(lang, filterTag);
        if(data.results.length > 0){
          setFilterTagEvents(data.results);
          return;
        }
        setFilterTagEvents(null);

      } catch (error) {
        console.error('Error fetching event tags:', error);
      }
    };
    
    eventsFilterTag();
  }, [filterTag]);

  useEffect(() => {
    const eventsFilterDate = async () => {
      try {
        if (selectedStartDate && selectedEndDate) {
          const tagToFilter = filterTag || null;
          const data = await fetchEventsDate(lang, tagToFilter, selectedStartDate, selectedEndDate);
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
  }, [selectedStartDate, selectedEndDate, filterTag, lang]);

    useEffect(() => {
      if (selectedStartDate && selectedEndDate && (filterTag || filteredByDateEvents.length > 0)) {
        setDisplayedEvents(filteredByDateEvents);
      }
      else if (filterTagEvents && filterTagEvents.length > 0) {
        setDisplayedEvents(filterTagEvents);
      }
      else if (filterTag && (!filterTagEvents || filterTagEvents.length === 0)) {
        setDisplayedEvents([]);
      }
      else if (selectedStartDate && selectedEndDate && filteredByDateEvents.length === 0) {

        setDisplayedEvents([]);
      }
      else {
        // Default: show all events
        setDisplayedEvents(events?.results || []);
      }
    }, [filterTagEvents, filterTag, events?.results, filteredByDateEvents, selectedStartDate, selectedEndDate]);





     const handleClickReset = (e) => {
       e.preventDefault();
       setFilterTag(null);
       setSelectedDate(null);
       setSelectedEndDate(null);
       setFilteredByDateEvents([]);
       setFilterTagEvents([]);
       setSelectedReset(prev => !prev); 
     };

  return (
    <>
      <HeaderEvents title={dict.events.title} />
      <div className="container">
        <div className="row">
          <EventsBtn dict={dict} lang={lang} />
          <EventsFilter dict={dict} eventTags={eventTags} setFilterTag={setFilterTag} setSelectedDate={setSelectedDate} setSelectedEndDate={setSelectedEndDate} handleClickReset={handleClickReset} selectedReset={selectedReset} />
        </div>
        <div className="row">
          <div className="col"><h2 className="mb-4">{filterTag ? `${filterTag} Events` : 'All Events'}</h2></div>
          <div style={{marginBottom: '50px', minHeight: '300px'}} >
          {displayedEvents.length === 0 ? (
            <p>No events available</p>
          ) : (
           displayedEvents.map((event) => (
              <EventsCard key={event.id} dict={dict} events={event} />
            ))
          )}
          </div>
        </div>
      </div>
    </>
  )
}
