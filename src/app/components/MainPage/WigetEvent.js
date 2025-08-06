import styles from './WigetEvent.module.css';
import event from '../../image/event.webp';

export const WigetEvent = () => {
  return (
    <section className="position-relative" style={{ minHeight: "450px" }}>
      {/* ტექსტი კონტეინერში */}
      <div className="container py-5 h-100 position-relative" style={{ zIndex: 2 }}>
        <div className="row h-100">
          <div className={`col-lg-6 d-flex flex-column justify-content-center align-items-start p-5  ${styles.textContainer}`}>
            <h1 className="display-1 fw-bold mb-4" style={{ lineHeight: 1.1 }}>
              ტოპ 5 ლოკაცია <br /> გარე ივენთებისთვის
            </h1>
            <p className="mb-4 fs-5 text-secondary">
              ბათუმი განსაკუთრებულ ცოცხალი ქალაქია სადაც მუდამ იგრძნობა ტარდება სხვადასხვა სახის ივენთები გარეთ სივრცეებში.
            </p>
            <button className="btn btn-dark btn-lg">სრულად</button>
          </div>
        </div>
      </div>
      {/* სურათი — გარეთ, ბოლომდე */}
      <div
        className="d-none d-lg-block position-absolute top-0 end-0 h-100"
        style={{
          width: "50vw", // ან შეგიძია სხვა ზომა
          backgroundImage: `url(${event.src || event.default || event})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      ></div>
    </section>
  );
};
