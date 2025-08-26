import Image from "next/image";
import styles from "./Article.module.css";
import image from "../../image/image.png";
import mainImage from "../../image/mainimage.png";
import Gallery from "../Gallery/Gallery";

export default function Article({ article }) {
  return (
    <div>
      <div className="container">
        <div className="row gap-row-3">
          <div className={`col-12 ${styles.article}`}>
            <h1 className="fs-1">{article?.title}</h1>
            {article.template === "2" ? (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: article?.short_description || '',
                  }}
                ></div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {article.small_image? (
        <>
          {" "}
          <div className="container-fluid px-0">
            <div className="row">
              <div className={`col-12 ${styles.articleImage}`}>
                <Image
                  src={article?.small_image || ''}
                  alt="Batumi"
                  width={1920}
                  height={1080}
                  className="img-fluid"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className={`col-12 ${styles.articleText}`}>
                <p className=" fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="container-fluid  px-0">
        <div className="row">
          <div className={`col-12 ${styles.mainImage}`}>
            {article?.main_image ? (
              <Image
                src={article.main_image}
                alt="Batumi"
                className="img-fluid"
                layout="responsive"
                width={1920}
                height={1080}
              />
            ) : (
              <Image
                src={mainImage}
                alt="Default image"
                className="img-fluid"
                layout="responsive"
                width={1920}
                height={1080}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-12 ${styles.description}`}>
            <div
              className="fs-6"
              dangerouslySetInnerHTML={{ __html: article?.description }}
            ></div>
          </div>
        </div>
      </div>
      {/* <Gallery images={article?.main_image} /> */}
    </div>
  );
}
