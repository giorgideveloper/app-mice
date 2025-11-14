import { Slider } from "./Slider";
import WhyBatumi from "./WhyBatumi";
import { WigetEvent } from "./WigetEvent";
import styles from "./WhyBatumi.module.css";
import { WigetBlog } from "./WigetBlog";
import WigetEvents from "./WigetEvents";
import VenueVideo from "./VenueVideo";
import VenueImage from "./VenueImage";

export const MainPage = ({ data, dict, lang }) => {
  return (
    <>
      <Slider data={data} dict={dict} lang={lang} />
      <section>
        <WigetEvent data={data} dict={dict} lang={lang} />
      </section>
      <section>
        <WigetBlog data={data} dict={dict} lang={lang} />
      </section>

      <section className={styles.whyBatumiSection}>
        <WhyBatumi data={data} />
      </section>
      <section>
        {/* <VenueVideo data={data} /> */}
        <VenueImage />
      </section>
      <section>
        <WigetEvents data={data} dict={dict} lang={lang} />
      </section>
    </>
  );
};

// {#EAECF0}
