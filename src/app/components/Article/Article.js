import Image from 'next/image';
import styles from './Article.module.css';
import image from '../../image/image.png'
import mainImage from '../../image/mainimage.png';

export default function Article({article}) {
    console.log(article.template)
return (
    <div>
  
      
    
            <div className="container">
                    <div className="row gap-row-3">
                            <div className={`col-12 ${styles.article}`}>
                                    <h1 className="fs-1">{article?.title}</h1>
                                      {article.template === '2' ? <>
                                      <p >{article?.short_description}</p></> : ''}
                                    
                            </div>
                    </div>
            </div>
            {article.template === '2' ? <>  <div className="container-fluid px-0">
                    <div className="row">
                            <div className={`col-12 ${styles.articleImage}`}>
                                    <Image src={image} alt="Batumi" width={100} height={100} className="img-fluid" layout="responsive"  />
                            </div>
                         
                    </div>
            </div>
          
            <div className="container">
                     <div className="row">
                                    <div className={`col-12 ${styles.articleText}`}>
                                            <p className=' fs-6'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            </p>
                                    </div>
                            </div>
            </div>
              </> : ''   }
            <div className="container-fluid  px-0">
                    <div className="row">
                            <div className={`col-12 ${styles.mainImage}`}>
                                    {article?.main_image ? (
                                        <Image src={article.main_image} alt="Batumi" className="img-fluid" layout="responsive" width={100} height={100} />
                                    ) : (
                                        <Image src={mainImage} alt="Default image" className="img-fluid" layout="responsive" width={100} height={100} />
                                    )}
                            </div>
                    </div>
            </div>
            <div className="container">
                    <div className="row">
                            <div className={`col-12 ${styles.description}`}>
                                    <div className='fs-6' dangerouslySetInnerHTML={{ __html: article?.description }}></div>
                            </div>
                    </div>
            </div>
    </div>
)
}
