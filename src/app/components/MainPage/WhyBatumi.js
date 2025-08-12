import Image from "next/image";


export default function WhyBatumi({data}) {
  return (
    <div className="container ">
      <div className="row justify-content-center align-items-center text-center py-5">
       <div className="col-12">
         <h1 className="fw-bold py-1 mb-5">{data?.about_batumi?.title}</h1>
       </div>
        </div>
       <div className="row row-gap-5 pb-5 text-center">
        {data?.about_batumi?.icons.map(item => (
            <div className="col-lg-3 col-md-6 col-12" key={item.id}>
                <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                    <span><Image src={item?.icon} alt="Batumi" width={40} height={40} /></span>
                    <strong>{item?.title}</strong>
                </div>
            </div>
        ))} 
       </div>
    </div>
  )
}
