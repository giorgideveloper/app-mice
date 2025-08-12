import styles from './Blog.module.css'; 
import BlogCard from './BlogCard';
import ClientLink from './ClientLink';


export default function Blog({data, lang}) {
  return (
    <>
    <div className="container-fluid px-0">
      <div className="row text-center">
        <div className={styles.header}> <h1>Blog-Articles</h1></div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {data?.results?.map((item) => {
          const href = `/${lang}/blog/${item.slug}`;
          return (
          <div className="col-12 col-lg-4" key={item.id}>
            <ClientLink href={href}>
              <BlogCard data={item} />
            </ClientLink>
          </div>

         );
                })}
      </div>
    </div>
    </>
  )
}
    