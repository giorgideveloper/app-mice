import styles from "./WigetEvent.module.css";
import Link from "next/link";

export const WigetEvent = ({ dict, data, lang }) => {
  return (
    <section className="position-relative" style={{ minHeight: "450px" }}>
      {/* Image for tablet and mobile - shown at top */}
      <div
        className="d-block d-lg-none w-100"
        style={{
          height: "300px",
          backgroundImage: `url(${data?.media_blog[0]?.main_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* {ADD MOBILE VERSIONS } */}
      <div
        className="container py-md-5 py-3 h-100 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="row h-100">
          <div
            className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start  p-md-5 ${styles.textContainer}`}
          >
            <h1 className="display-1 fw-bold mb-4" style={{ lineHeight: 1.1 }}>
              {data?.media_blog[0]?.title}
            </h1>
            {data?.media_blog[0]?.short_description ? (
              <div
                className="mb-4 fs-5 text-secondary"
                dangerouslySetInnerHTML={{
                  __html: data?.media_blog[0]?.short_description,
                }}
              />
            ) : (
              <p></p>
            )}
            <Link href={`/${lang}/blog/${data?.media_blog[0]?.slug}`}>
              <button className="btn btn-dark btn-lg ">
                {dict?.button?.more}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image for desktop - shown on right side */}
      <div
        className="d-none d-lg-block position-absolute top-0 end-0 h-100"
        style={{
          width: "49.3vw",
          backgroundImage: `url(${data?.media_blog[0]?.main_image})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      ></div>
    </section>
  );
};
