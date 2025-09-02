import Article from '@/app/components/Article/Article'
import { fetchArticleById } from '@/service/service';
import React from 'react'
import { party } from '@/fonts/Fonts';


export default async function page({params}) {
  const {id} = await params;
  const {lang} = await params;

const article = await fetchArticleById(id, lang);
  return (
    <div>

        <Article className={party.className} article={article}/>
    </div>
  )
}
