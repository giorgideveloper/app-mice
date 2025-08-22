
import Link from 'next/link';
import styles from './WigetEvents.module.css'; 

export default function EventOverlay({dict, title, lang, category}) {

  const categorySlug = (slug) =>{
    if(slug === 'cultural') return 'cultural';
    if(slug === 'business') return 'conference';
    if(slug === 'Sport') return 'sport';
    return slug || '';
  }

  const section = categorySlug(category)
  const href = `/${lang}/venues/${section}/`;
  return (
    <>
        <div className={styles.eventHover}>
         <h3 className='fs-1'>{title}</h3>
         <Link onClick={e => {
											e.preventDefault();
											window.location.href = href;
										}} href={href}>
           <button className="btn btn-light btn-lg">{dict?.button?.view}</button>
         </Link>
        </div>
    </>
  )
}
