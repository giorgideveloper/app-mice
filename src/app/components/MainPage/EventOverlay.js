
import styles from './WigetEvents.module.css'; 
export default function EventOverlay({dict}) {
  return (
    <>
        <div className={styles.eventHover}>
         <h3 className='fs-1'>სპორტული ვენიუები</h3>
             <button className="btn btn-light btn-lg ">{dict?.button?.view}</button>
        </div>
    </>
  )
}
