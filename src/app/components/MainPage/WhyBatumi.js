import Image from "next/image";
import globus from "../../image/globus.svg";

export default function WhyBatumi() {
  return (
    <div className="container ">
      <div className="row justify-content-center align-items-center text-center py-5">
       <div className="col-12">
         <h1 className="fw-bold py-1 mb-5">რატომ ბათუმი ?</h1>
       </div>
        </div>
       <div className="row row-gap-5 pb-5 text-center">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                    <span><Image src={globus} alt="Batumi" width={40} height={40} /></span>
                    <strong>მსოფლიოს წამყვანი ტურისტული ადგილები</strong>
                </div>
            </div>
       </div>
    </div>
  )
}
