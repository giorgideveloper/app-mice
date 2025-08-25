
import Image from 'next/image'
import styles from './FooterApp.module.css'
import appStore from '@/app/image/appStore.png'
import playStore from '@/app/image/playStore.png'
import object from '@/app/image/OBJECTS.png'


export default function FooterApp() {
  return (
    <>
        <div className={styles.downloadApp}>
                <h5>GET THE APP</h5>
                <a href='#' className="">
                    <Image src={appStore} alt="Google Play" width={100} height={30}  className={styles.appImg}  />
                </a>
                 <a href='#' className="">
                    <Image src={playStore} alt="Google Play" width={100} height={30}  className={styles.appImg}  />
                </a>
              </div>
              <div className={styles.bottomImage}>
               <Image src={object} alt="Objects" width={308} height={93}  className={styles.appImg}  />
              </div>
    </>
  )
}
