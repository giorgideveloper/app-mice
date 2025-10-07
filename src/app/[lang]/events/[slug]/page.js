import InnerEvent from "@/app/components/InnerEvent/InnerEvent";

export async function generateMetadata({ params })  {
    const { lang, slug } = await params;
    return {
      title: `Event - ${slug} - ${lang}`,
      description: `This is the event page for ${slug} in ${lang}`,
    };
  }
export default async function page({ params }) {
    const { lang, slug } = await params;

  return (
    <div><InnerEvent slug={slug} lang={lang} /></div>
  )
}
