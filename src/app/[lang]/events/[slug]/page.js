import InnerEvent from "@/app/components/InnerEvent/InnerEvent";



export default async function page({ params }) {
    const { lang, slug } = await params;

  return (
    <div><InnerEvent slug={slug} lang={lang} /></div>
  )
}
