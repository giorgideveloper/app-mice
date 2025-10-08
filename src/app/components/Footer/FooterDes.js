import ImageApp from '@/app/plugins/ImageApp'
import style from './FooterDes.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function FooterDes({data}) {
  
  return (
    <>
    <div className={style.logo}>
        <Image src='/logo.svg' width={180} height={180} alt='Footer logo' />
    </div>
      <div className={style.description}>
        <div dangerouslySetInnerHTML={{ __html: data[0]?.description || '' }}></div>
      </div>
      <div className={style.minLogos}>
        {data[0]?.logos?.map((logo, index) => (
          <Link key={index} href={logo?.url || '#'} target='_blank' rel='noopener noreferrer'>
            <ImageApp img={logo?.logo} width={100} height={100} alt={`Min logo ${index + 1}`} />
          </Link>
        ))}
      </div>
    </>
  )
}