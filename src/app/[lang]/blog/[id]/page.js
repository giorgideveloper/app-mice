import Article from "@/app/components/Article/Article";
import { fetchBlogById } from "@/service/service";


export default async function page({params}) {
    const { id } = await params;
    const { lang } = await params;
    const mediaBlog = await fetchBlogById(id, lang);
  return (
    <div>
      <Article id={id} lang={lang} article={mediaBlog} />
    </div>
  )
}
