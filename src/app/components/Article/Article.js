import Image from "next/image";
import styles from "./Article.module.css";
import mainImage from "../../image/mainimage.png";
import Gallery from "../Gallery/Gallery";
import Head from 'next/head';

export default function Article({ article }) {

  // Add meta title and description from article data
  const metaTitle = article?.title || 'Article';
  // Strip HTML tags from description for meta tag
  const stripHtmlTags = (html) => html?.replace(/<[^>]*>/g, '') || '';
  const metaDescription = stripHtmlTags(article?.short_description) || 'Read our latest article';

  // Include Head component with meta tags
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Head>
 
    <div>
      <div className="container">
        <div className="row gap-row-3">
          <div className={`col-12 ${styles.article}`}>
            <h1 className="fs-1 text-uppercase">{article?.title}</h1>
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
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. */}
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
    </>
  );
}
