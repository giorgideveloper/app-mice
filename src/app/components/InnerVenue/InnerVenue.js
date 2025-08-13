import InnerImage from "./InnerImage";
import style from "./InnerVenues.module.css";

export default function InnerVenue() {
  return (
    <>
    <div className={`container ${style.innerContainer}`}>
        <div className="row">
            <div className="col-12 mt-5">
                <InnerImage/>
            </div>
        </div>
        <div className={`row ${style.innerRow}`}>
            <div className="col-12 col-md-6 mt-2">
                <div className={`${style.innerTitle}`}>
                    <h3>Inner Venue Title</h3>
                </div>
            </div>
            <div className="col-12 col-md-6 mt-2">
                <div className={`${style.innerLocation}`}>
                    <h3>Inner Venue Location</h3>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}
