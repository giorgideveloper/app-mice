import ImageApp from '@/app/plugins/ImageApp'
import style from './FooterDes.module.css'
import Image from 'next/image'


export default function FooterDes() {
  return (
    <>
    <div className={style.logo}>
        <Image src='/logo.svg' width={125} height={125} alt='Footer logo' />
    </div>
      <div className={style.description}>
        <div dangerouslySetInnerHTML={{ __html: '<p>The official tourism portal of the Ajara region, www.visitbatumi.com, is owned by the Department of A/R Tourism and Resorts of Ajara, which is responsible for the marketing, planning, and implementation of the tourism policy of the region.</p>' }}></div>
      </div>
      <div className={style.minLogos}>
        <ImageApp src='/minLogo1.svg' width={50} height={50} alt='Min logo 1' />
        <ImageApp src='/minLogo2.svg' width={50} height={50} alt='Min logo 2' />
        <ImageApp src='/minLogo3.svg' width={50} height={50} alt='Min logo 3' />
      </div>
    </>
  )
}
