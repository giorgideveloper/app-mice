import Events from '@/app/components/Events/Events'
import React from 'react'
import { getDictionary } from '../dictionaries';
import { fetchEvents } from '@/service/service';

export default async function page({params}) {
  const { lang } = await params;
   const dict = await getDictionary(lang); 
   const events = await fetchEvents(lang);


  return (
    <div>
      <Events dict={dict} events={events} />
    </div>
  )
}
