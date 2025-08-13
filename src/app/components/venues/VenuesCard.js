import card from "@/app/image/card.webp";
import Image from "next/image";
import styles from "./VenuesCard.module.css";
import Link from "next/link";
import ClientLink from "./ClientLink";
export default function VenuesCard({data, lang, id}) {
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className={`pb-4 ${styles.title}`}>Bussiness/Corporate Venues</h4>
          </div>
          {data?.results?.map(item =>(
       
              <div key={item.id} className="col-lg-4 col-12">
                     <ClientLink href={`/${lang}/venues/${id}/${item.slug}`} >
                       <div className="card border-0 rounded-4 bg-white shadow-sm">
                         <div className={styles.cardImage}>
                           <Image
                             src={item?.image}
                             alt="Venue Image"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className={styles.cardBody}>
                <h3>{item?.name}</h3>
                <button className="btn">{item?.location?.name}, Georgia</button>
              </div>
              <div className={styles.cardFooter}>
                <ul>
                  <li>address</li>
                  <li>capacity</li>
                </ul>
              </div>
            </div>
             </ClientLink>
          </div>
          
          ))}
        </div>
      </div>
    </>
  );
}
