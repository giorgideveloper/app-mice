import React from 'react'
import MapView from '@/app/components/MapView/MapView';

export default function page({ params }) {
  const { lang, id } = params;
  return (
    <>
         <MapView lang={lang} id={id} />
    </>
  )
}
