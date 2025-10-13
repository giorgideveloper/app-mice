'use client';
import React, { useState } from 'react';
import LoadMore from '../LoadMore/LoadMore';
import styles from './Blog.module.css'; 
import BlogCard from './BlogCard';
import ClientLink from './ClientLink';


export default function Blog({data, lang, dict}) {
  const [post, setPost] = useState(data.results || []);
  const [page, setPage] = useState(2);


  return (
    <>
    <div className="container-fluid px-0">
      <div className="row text-center">
        <div className={styles.header}> <h1>Media Blog</h1></div>
      </div>
    </div>
    <div className="container">
      <div className="row g-4">
        {post?.map((item, index) => {
          const href = `/${lang}/blog/${item.slug}`;
          return (
          <div className="col-12 col-lg-4" key={index}>
            <ClientLink href={href}>
              <BlogCard data={item} />
            </ClientLink>
          </div>

         );
                })}

           <div className="col-12">
            <LoadMore dict={dict} lang={lang} items={data?.results} post={post} setPost={setPost} page={page} setPage={setPage} />
           </div>
      </div>
    </div>
    </>
  )
}
    