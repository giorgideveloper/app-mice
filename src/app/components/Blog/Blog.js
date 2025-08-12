import Link from 'next/link';
import styles from './Blog.module.css'; 
import BlogCard from './BlogCard';


export default function Blog({data, lang}) {
  console.log("Blog data:", data);
  return (
    <>
    <div className="container-fluid px-0">
      <div className="row text-center">
        <div className={styles.header}> <h1>Blog-Articles</h1></div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {data?.results?.map((item) => (
          <div className="col-12 col-lg-4" key={item.id}>
            <Link href={`/${lang}/blog/${item.slug}`}>
              <BlogCard data={item} />
            </Link>
          </div>

        ))}
      </div>
    </div>
    </>
  )
}
    