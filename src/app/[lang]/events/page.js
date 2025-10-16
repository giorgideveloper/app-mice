import Events from '@/app/components/Events/Events'
import React from 'react'
import { getDictionary } from '../dictionaries';
import { fetchEvents, fetchEventCategories } from '@/service/service';
import { party } from '@/fonts/Fonts';

export const metadata = {
	title: 'Events | Visit Batumi',
	description: 'Internationalized App Router example',
};

export default async function page({params}) {
   const { lang } = await params;
   const dict = await getDictionary(lang);
   const category = await fetchEventCategories(lang); 
   const events = await fetchEvents(lang, category.results[0].name);


  return (
    <div className={`${party.className}`}>
      <Events dict={dict} lang={lang} events={events} category={category.results[0].name} />
    </div>
  )
}
