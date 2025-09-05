"use client"
import React from 'react'
import HeaderEvents from './HeaderEvents'
import EventsBtn from './EventsBtn'
import EventsFilter from './EventsFilter'
import EventsCard from './EventsCard'

export default function Events({ dict }) {
 
  return (
    <>
      <HeaderEvents />
      <div className="container">
        <div className="row">
          <EventsBtn dict={dict} />
          <EventsFilter dict={dict} />
        </div>
        <div className="row">
          <EventsCard />
        </div>
      </div>
    </>
  )
}
