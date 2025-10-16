import React from 'react'
import Exhibitions from '@/app/components/Events/Exhibitions'
import { getDictionary } from '../dictionaries';
import { fetchExhibitions, fetchEventCategories } from '@/service/service';

export const metadata = {
	title: 'Exhibitions | Visit Batumi',
	description: 'Internationalized App Router example',
};

export default async function page({params}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const category = await fetchEventCategories(lang);
    const events = await fetchExhibitions(lang, category.results[1].name);

  return (
    <>
      <Exhibitions dict={dict} events={events} lang={lang} category={category.results[1].name} />
    </>
  )
}
