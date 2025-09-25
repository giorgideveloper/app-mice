import React from 'react'
import HeaderEvents from './HeaderEvents'
import EventsBtn from './EventsBtn'
import EventsFilter from './EventsFilter'
import EventsCard from './EventsCard'

export default function Exhibitions({ dict, events, lang }) {

  
  return (
    <>
      <HeaderEvents title={dict.exhibitions.title} />
      <div className="container">
              <div className="row">
                <EventsBtn dict={dict} lang={lang} />
                <EventsFilter dict={dict} />
              </div>
              <div className="row">
                {events.results.length === 0 ? (
                  <p>No events available</p>
                ) : (
                  events.results.map((event) => (
                    <EventsCard key={event.id} dict={dict} events={event} />
                  ))
                )}
              </div>
            </div>
    </>
  )
}
