
import styles from './WigetEvents.module.css'; 
export default function EventOverlay({dict, title}) {
  return (
    <>
        <div className={styles.eventHover}>
         <h3 className='fs-1'>{title}</h3>
             <button className="btn btn-light btn-lg ">{dict?.button?.view}</button>
        </div>
    </>
  )
}
