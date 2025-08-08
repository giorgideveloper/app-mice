import { Slider } from "./Slider";
import WhyBatumi from "./WhyBatumi";
import { WigetEvent } from "./WigetEvent";
import styles from './WhyBatumi.module.css'; // Assuming you have a CSS module for MainPage styles
import { WigetBlog } from "./WigetBlog";
import WigetEvents from "./WigetEvents";

 export  const MainPage = ({ dict }) => {
    return (
        <>
            <Slider dict={dict} />
            <section >
                <WigetEvent dict={dict} />
            </section>
            <section className={styles.whyBatumiSection}>
                <WhyBatumi  />
            </section>
            <section>
                <WigetBlog dict={dict} />
            </section>
            <section>
                <WigetEvents dict={dict} />
            </section>
        </>
    );
};

// {#EAECF0}
