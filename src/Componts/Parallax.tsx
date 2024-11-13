import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles2.module.css";
import Abouts1 from "./About-s1";
import Abouts2 from "./abouts2";
import Abouts3 from "./abouts3";
import Downbar from "./Downbar";
import Abouts5 from "./abouts5";
import { motion } from "framer-motion";
import Navpart from "./Navpar";

export default function abouts4() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <>
    
      <div className={styles["parallax-container"]}>
        {" "}
        {/* إضافة الكلاس هنا */}
        <div className={styles.background} />
        
        <Parallax pages={6.06}>
        <Navpart/>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <Abouts1 />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <Abouts2 />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.8}
            speed={0.1}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <Abouts3 />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 2.3, end: 4.3 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
            transition={{ duration: 1 }}
            viewport={{ once: false }}
             className={`${styles.card} ${styles.sticky}`}>
              <p>We Care</p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.3}
            speed={0.1}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
            transition={{ duration: 1 }}
            viewport={{ once: false }}
              className={`${styles.card} ${styles.parallax} ${styles.purple}`}
            >
              <h1>Our Crew</h1>
              <p>
                We believe that the best works are created by happy minds.
                Therefore, in an effort to create equal opportunities and a
                happy environment, we foster a sense of belonging and visibility
                among our team members. We provide fair and timely compensation
                that makes it easier for them to live well and support their
                loved ones too.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4.3}
            speed={0}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
            transition={{ duration: 1 }}
            viewport={{ once: false }}
              className={`${styles.card} ${styles.parallax} ${styles.purple}`}
            >
              <h1>Our Clients</h1>
              <p>
                Over the years, we have cultivated strong connection with those
                who have been a part of our journey. We believe they are no
                longer our clints, but our teammates who join us in our
                collaborative efforts. We recognise them as our pillars of
                support to aid us in fulfilling our shared vision and goals.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={1}>
            <div className="mb-40">
              <Abouts5 />
            </div>

            <hr />
            <Downbar />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
