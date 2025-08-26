import AboutBatumi from '@/app/components/AboutBatumi/AboutBatumi';
import { fetchAboutBatumi } from '@/service/service';
import React from 'react'
import { firago } from '@/fonts/Fonts'

export default async function page({params}) {
     const { lang } = await params;
     const aboutBatumi = await fetchAboutBatumi(lang);
     

  return (
    <div>
        <AboutBatumi  data={aboutBatumi}  />
    </div>
  )
}
