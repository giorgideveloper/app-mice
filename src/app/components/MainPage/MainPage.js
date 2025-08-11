import { Slider } from "./Slider";
import WhyBatumi from "./WhyBatumi";
import { WigetEvent } from "./WigetEvent";
import styles from './WhyBatumi.module.css'; // Assuming you have a CSS module for MainPage styles
import { WigetBlog } from "./WigetBlog";
import WigetEvents from "./WigetEvents";

 export  const MainPage = ({data, dict }) => {
 
    return (
        <>
            <Slider data={data} dict={dict} />
              <section >
                <WigetEvent data={data} dict={dict} />
            </section>
               <section>
                <WigetBlog data={data} dict={dict} />
            </section>
          
            <section className={styles.whyBatumiSection}>
                <WhyBatumi  />
            </section>
         
            <section>
                <WigetEvents dict={dict} />
            </section>
        </>
    );
};

// {#EAECF0}
