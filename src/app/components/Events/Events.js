"use client"
import React from 'react'
import HeaderEvents from './HeaderEvents'
import EventsBtn from './EventsBtn'
import EventsFilter from './EventsFilter'
import EventsCard from './EventsCard'

export default function Events({ dict, events }) {
 
  return (
    <>
      <HeaderEvents />
      <div className="container">
        <div className="row">
          <EventsBtn dict={dict} />
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
