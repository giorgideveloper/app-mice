import Image from 'next/image';
import styles from './Article.module.css';
import image from '../../image/image.png'
import mainImage from '../../image/mainimage.png';

export default function Article() {
  return (
    <div>
        <div className="container">
            <div className="row gap-row-3">
                <div className={`col-12 ${styles.article}`}>
                    <h1 className="fs-1">Welcome to Batumi</h1>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
            </div>
        </div>
        <div className="container-fluid px-0">
            <div className="row">
                <div className={`col-12 ${styles.articleImage}`}>
                    <Image src={image} alt="Batumi" className="img-fluid" layout="responsive"  />
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
        <div className="container-fluid  px-0">
            <div className="row">
                <div className={`col-12 ${styles.mainImage}`}>
                    <Image src={mainImage} alt="Batumi" className="img-fluid" layout="responsive" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className={`col-12 ${styles.description}`}>
                    <p className='fs-6'>
                        <h1>Title</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
