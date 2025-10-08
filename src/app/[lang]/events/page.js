import Events from '@/app/components/Events/Events'
import React from 'react'
import { getDictionary } from '../dictionaries';
import { fetchEvents } from '@/service/service';
import { party } from '@/fonts/Fonts';

export default async function page({params}) {
  const { lang } = await params;
   const dict = await getDictionary(lang); 
   const events = await fetchEvents(lang);



  return (
    <div className={`${party.className}`}>
      <Events dict={dict} lang={lang} events={events} />
    </div>
  )
}
