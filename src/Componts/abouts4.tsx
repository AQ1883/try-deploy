import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles2.module.css";
import Abouts1 from "./About-s1";
import Abouts2 from "./abouts2";
import Abouts3 from "./abouts3";

export default function abouts4() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className={styles["parallax-container"]}>
      {" "}
      {/* إضافة الكلاس هنا */}
      <div className={styles.background} />
      <Parallax pages={6}>
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
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Abouts3 />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 2.3, end: 7 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>We Care</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.3}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <h1>Our Crew</h1>
            <p>
              We believe that the best works are created by happy minds.
              Therefore, in an effort to create equal opportunities and a happy
              environment, we foster a sense of belonging and visibility among
              our team members. We provide fair and timely compensation that
              makes it easier for them to live well and support their loved ones
              too.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.3}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
