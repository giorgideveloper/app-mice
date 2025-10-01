'use client'
import { useEffect,useState } from 'react'
import HeaderEvents from './HeaderEvents'
import EventsBtn from './EventsBtn'
import EventsFilter from './EventsFilter'
import EventsCard from './EventsCard'
import { fetchEventsDate, } from '@/service/service';


export default function Exhibitions({ dict, events, lang }) {
    const [selectedStartDate, setSelectedDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [filteredByDateEvents, setFilteredByDateEvents] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState();
    const [selectedReset, setSelectedReset] = useState(false);

     useEffect(() => {
        const eventsFilterDate = async () => {
          try {
            if (selectedStartDate && selectedEndDate) {
              const tagToFilter =  null;
              const category = "Exebition";
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
        setDisplayedEvents(events?.results || []);
      }
    }, [ events?.results, filteredByDateEvents, selectedStartDate, selectedEndDate]);


     const handleClickReset = (e) => {
       e.preventDefault();
       setSelectedDate(null);
       setSelectedEndDate(null);
       setFilteredByDateEvents([]);
       setSelectedReset(prev => !prev); 
     };

     console.log('displayedEvents', displayedEvents);
  return (
    <>
      <HeaderEvents title={dict.exhibitions.title} />
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
            </div>
    </>
  )
}
