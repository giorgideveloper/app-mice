import React from 'react'
import Exhibitions from '@/app/components/Events/Exhibitions'
import { getDictionary } from '../dictionaries';
import { fetchExhibitions } from '@/service/service';

export default async function page({params}) {
 
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const events = await fetchExhibitions(lang);

  return (
    <>
      <Exhibitions dict={dict} events={events} lang={lang} />
    </>
  )
}
