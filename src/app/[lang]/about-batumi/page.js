import AboutBatumi from '@/app/components/AboutBatumi/AboutBatumi';
import React from 'react'

export default async function page({params}) {
     const { lang } = await params;
   
  return (
    <div>
        <AboutBatumi />
    </div>
  )
}
