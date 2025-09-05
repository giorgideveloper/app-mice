import Events from '@/app/components/Events/Events'
import React from 'react'
import { getDictionary } from '../dictionaries';

export default async function page({params}) {
  const { lang } = await params;


   const dict = await getDictionary(lang); 


  return (
    <div>
      <Events dict={dict} />
    </div>
  )
}
