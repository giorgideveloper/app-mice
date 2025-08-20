import ImageApp from '@/app/plugins/ImageApp'
import style from './FooterDes.module.css'
import Image from 'next/image'


export default function FooterDes({data}) {
  console.log(data[0].description)
  return (
    <>
    <div className={style.logo}>
        <Image src='/logo.svg' width={180} height={180} alt='Footer logo' />
    </div>
      <div className={style.description}>
        <div dangerouslySetInnerHTML={{ __html: data[0]?.description || '' }}></div>
      </div>
      <div className={style.minLogos}>
        <ImageApp src='/minLogo1.svg' width={50} height={50} alt='Min logo 1' />
        <ImageApp src='/minLogo2.svg' width={50} height={50} alt='Min logo 2' />
        <ImageApp src='/minLogo3.svg' width={50} height={50} alt='Min logo 3' />
      </div>
    </>
  )
}
