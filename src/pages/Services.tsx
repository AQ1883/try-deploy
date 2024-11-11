import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles2.module.css";

import { motion } from "framer-motion";
import Navpart from "../Componts/Navpar";
import Serv1 from "../Componts/Serv1";
import Serv2 from "../Componts/Serv2";
import Serv3 from "../Componts/Serv3";
import Downbar from "../Componts/Downbar";
import Serv4 from "../Componts/Serv4";

export default function Services() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <>
      <div className={styles["parallax-container"]}>
        {" "}
        {/* إضافة الكلاس هنا */}
        <div className={styles.background} />
        <Parallax pages={19.3}>
          <Navpart />
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <Serv1 />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <Serv2 />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.8}
            speed={0.1}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <Serv3 />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 2.3, end: 6.3 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className={`${styles.card} ${styles.sticky}`}
            >
              <p>First Phase:</p>
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
              <h1>Location</h1>
              <p>
                Choose the right location for you, and we’ll assist in
                evaluating it thoroughly. Alternatively, we can recommend
                several excellent and immediately available rental sites to suit
                your needs.
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
              <h1>3D Design</h1>
              <p>
                We create a 3D design of your store that details the shelves,
                refrigerators, self-service devices, and security cameras to
                ensure efficient use of space.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5.3}
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
              <h1>Comprehensive Cost</h1>
              <p>
                We provide you with all the costs related to establishment and
                operation to ensure transparency and clarity in all financial
                aspects before starting the project.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6.3}
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
              <h1>Financial Projections</h1>
              <p>
                We provide you with a comprehensive financial analysis and
                accurate financial forecasts to estimate expected costs and
                potential returns, helping you make well-informed investment
                decisions.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 6.6, end: 8.5 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className={`${styles.card} ${styles.sticky}`}
            >
              <p>Second Phase:</p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={7.5}
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
              <h1>Establishment</h1>
              <p>
                Establish your smart convenience store in 90 days: We handle the
                flooring, décor, painting, signage, shelving, refrigerators,
                freezers, self-service devices, payment systems, and security
                cameras.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={8.5}
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
              <h1>Products</h1>
              <p>
                Thousands of diverse products: We have extensive relationships
                with a network of local and international suppliers to secure
                the best products for your smart convenience store during the
                establishment and operation phases.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 9, end: 17.5 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className={`${styles.card} ${styles.sticky}`}
            >
              <p>Third Phase:</p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={9.5}
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
              <h1>Training</h1>
              <p>
                We offer comprehensive 3-day training on sales systems,
                including product addition, report monitoring, and sales
                tracking, to improve your store’s performance.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={10.5}
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
              <h1>Technical Support</h1>
              <p>
                We have a professional team providing technical support for all
                aspects of the system, ensuring repair or replacement of
                self-service and payment devices within a maximum of 48 hours.
              </p>
            </motion.div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={11.5}
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
              <h1>Monthly Reconciliation</h1>
              <p>
                With our monthly inventory reconciliation using our app, you can
                ensure that the system’s inventory numbers match the actual
                stock, enhancing data accuracy.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={12.5}
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
              <h1>Store Monitoring</h1>
              <p>
                Our security camera review service includes a historical review
                of the last 48 hours, helping to detect theft or any other
                issues that may have occurred in the store.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={13.5}
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
              <h1>Self-Service Devices</h1>
              <p>
                Designed to provide a seamless customer experience, allowing for
                easy purchases. These devices help reduce operating costs by
                minimizing the need for staff and offer an innovative solution
                that enhances store management efficiency.
              </p>
            </motion.div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={14.5}
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
              <h1>Mobile Shopping</h1>
              <p>
                A website offering the same features as self-service devices,
                allowing purchases by scanning products with a mobile phone and
                paying via Apple Pay or credit cards.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={15.5}
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
              <h1>Payment Terminal</h1>
              <p>
                We are a company licensed by the Central Bank to provide payment
                solutions, and you will receive modern payment devices
                integrated with self-service machines.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={16.5}
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
              <h1>More Payments</h1>
              <p>
                We offer additional payment channels like STCPay and digital
                wallets to ensure smooth transactions. These channels provide
                customers with extra flexibility to take advantage of features
                like discounts.
              </p>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={17.5}
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
              <h1>Smart Code</h1>
              <p>
                All our products are equipped with a SMART QR Code. This system
                ensures the validity of food items and prevents the purchase of
                expired products, enhancing the safety and reliability of the
                products.
              </p>
            </motion.div>
          </ParallaxLayer>

          <ParallaxLayer offset={18.5} speed={1}>
            <div className="mb-40">
              <Serv4 />
            </div>

            <hr />
            <Downbar />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
