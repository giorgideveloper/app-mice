import styles from './WigetBlog.module.css';
import event from '../../image/event.webp';

export const WigetBlog = ({dict }) => {
  return (
    <section className="position-relative" style={{ minHeight: "450px" }}>
      {/* Image for tablet and mobile - shown at top */}
      <div 
        className="d-block d-lg-none w-100" 
        style={{
          height: "300px",
          backgroundImage: `url(${event.src || event.default || event})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      
      {/* Image for desktop - shown on left side */}
      <div
        className="d-none d-lg-block position-absolute top-0 start-0 h-100"
        style={{
          width: "50vw", 
          backgroundImage: `url(${event.src || event.default || event})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      ></div>
      
      {/* Main content container - text on right */}
      <div className="container py-md-5 py-3 h-100 position-relative" style={{ zIndex: 2 }}>
        <div className="row h-100 justify-content-end">
          <div className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start p-md-5 ${styles.textContainer}`}>
            <h1 className="display-1 fw-bold fs-1 mb-4" style={{ lineHeight: 1.1 }}>
              რატომ არის ბათუმი სწორი არჩევანი

            </h1>
            <p className="mb-4 fs-5 text-secondary">
              ბათუმი ნამდვილად შეხვედრების ქალაქია, რომელიც ქმნის შთაბეჭდილებებსა და მოგონებებს. ამ ქალაქში ადამიანები და ემოციები ერთმანეთს ხვდებიან, მათთვის ეს შეხვედრები ახალი, უფრო საინტერესო გზის დასაწყისია.
            </p>
            <button className="btn btn-dark btn-lg ">{dict?.button?.more}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
