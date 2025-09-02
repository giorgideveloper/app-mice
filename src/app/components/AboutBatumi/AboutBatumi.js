import React from 'react'
import styles from './AboutBatumi.module.css'
import ImageApp from '@/app/plugins/ImageApp'

export default function AboutBatumi({ data }) {
    const filterLeftIcons = data.about_batumi.icons.filter(icon => icon.id < 5);
    const filterRightIcons = data.about_batumi.icons.filter(icon => icon.id >= 5);


  return (
    <>
    <div className="container-fluid m-0">
        <div className="row">
            <div className="col-12 col-lg-6  order-2 order-lg-1 g-0">
                <div className={styles.imageContainer}>
                    <ImageApp img={data?.about_batumi?.image_1} alt="About Batumi" />
                </div>
            </div>
             <div className="col-12 col-lg-6  order-1 order-lg-2 g-0">
            <div  className={styles.textContainer}>
               <h2>{data.about_batumi.title}</h2>
               <div className='pt-3' dangerouslySetInnerHTML={{ __html: data.about_batumi.small_description || '' }}></div>
                </div>
            </div>
        </div>
        <div className="row">
             <div className="col-12 col-lg-6 justify-content-end g-0">
                <div className={styles.containerLeft}>

            <div className={styles.textContainerLeft}>
                {filterLeftIcons.map((icon, index) => (
                    <div key={index} className={styles.iconItem}>
                        <img src={icon.icon} alt={icon.title} className={styles.iconImage} />
                        <div className={styles.iconText}>
                        <h3 className={styles.iconTitle}>{icon.title}</h3>
                        <p className={styles.iconDescription}>{icon.description}</p>
                        </div>
                 
                    </div>
                ))}
                </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 g-0">
                <div className={styles.imageContainer}>
                    <ImageApp img={data?.about_batumi?.image_2} alt="About Batumi" />
                </div>
            </div>
        </div>
         <div className="row">
            <div className="col-12 col-lg-6  order-2 order-lg-1 g-0">
                <div className={styles.imageContainer}>
                    <ImageApp img={data?.about_batumi?.image_3} alt="About Batumi" />
                </div>
            </div>
             <div className="col-12 col-lg-6 pt-3  order-1 order-lg-2 g-0">
            <div className={styles.textContainerRight}>
                  {filterRightIcons.map((icon, index) => (
                    <div key={index} className={styles.iconItem}>
                        <img src={icon.icon} alt={icon.title} className={styles.iconImage} />
                         <div className={styles.iconText}>
                        <h3 className={styles.iconTitle}>{icon.title}</h3>
                        <p className={styles.iconDescription}>{icon.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                   <div dangerouslySetInnerHTML={{ __html: data.about_batumi.description }} className={styles.description}>
            </div>
            </div>
         
        </div>
    </div>

    
     
 
    </>
  )
}
