
import styles from './WigetEvents.module.css'; // Assuming you have a CSS module for WigetEvents styles


export default function WigetEvents() {
  return (
    <div className={`container-fluid px-0 ${styles.eventsSection}`}>
        <div className="row text-center py-5">
            <h1>ღონისძიებების ადგილები</h1>
            <p>აქ შეგიძლიათ მოიძიოთ და მოაწყოთ ღონისძიებები</p>
        </div>
        <div className="row">
            <div className="col-12 col-md-4">
                
            </div>
            <div className="col-12 col-md-4">2</div>
            <div className="col-12 col-md-4">3</div>

        </div>
      
    </div>
  )
}
