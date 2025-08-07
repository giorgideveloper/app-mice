import { Slider } from "./Slider";
import WhyBatumi from "./WhyBatumi";
import { WigetEvent } from "./WigetEvent";
import styles from './WhyBatumi.module.css'; // Assuming you have a CSS module for MainPage styles
import { WigetBlog } from "./WigetBlog";

 export  const MainPage = () => {
    return (
        <>
            <Slider />
            <section >
                <WigetEvent />
            </section>
            <section className={styles.whyBatumiSection}>
                <WhyBatumi />
            </section>
            <section>
                <WigetBlog />
            </section>
        </>
    );
};

// {#EAECF0}
