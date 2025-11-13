import React from "react";
import MapView from "@/app/components/MapView/MapView";
import { getDictionary } from "../../../dictionaries";

export default async function page({ params }) {
  const { lang, id } = params;
  const dict = await getDictionary(lang);

  return (
    <>
      <MapView lang={lang} id={id} dict={dict} />
    </>
  );
}
