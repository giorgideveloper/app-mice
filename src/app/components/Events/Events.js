"use client"
import { useEffect,useState } from 'react'
import HeaderEvents from './HeaderEvents'
import EventsBtn from './EventsBtn'
import EventsFilter from './EventsFilter'
import EventsCard from './EventsCard'
import { fetchEventsTag, fetchEventsFilterTag } from '@/service/service';

export default function Events({ dict, events, lang }) {
  const [eventTags, setEventTags] = useState([]);
  const [filterTag, setFilterTag] = useState(null);
  const [filterTagEvents, setFilterTagEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);

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
      if (filterTagEvents && filterTagEvents.length > 0) {
        setDisplayedEvents(filterTagEvents);
      }
      else if (filterTag && (!filterTagEvents || filterTagEvents.length === 0)) {
        setDisplayedEvents([]);
      }
      else if (events?.results) {
        setDisplayedEvents(events.results);
      } else {
        setDisplayedEvents([]);
      }
    }, [filterTagEvents, filterTag, events?.results]);

  return (
    <>
      <HeaderEvents title={dict.events.title} />
      <div className="container">
        <div className="row">
          <EventsBtn dict={dict} lang={lang} />
          <EventsFilter dict={dict} eventTags={eventTags} setFilterTag={setFilterTag} />
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
