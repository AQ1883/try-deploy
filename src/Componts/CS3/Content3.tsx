import { motion } from "framer-motion";
import SlideLogos from "../SlideLogos";
import Galery from "./galery";

function Content3() {
  return (
    <>
      <div className="container mx-auto px-4 text-white">
        <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
        transition={{ duration: 1 }}
        viewport={{ once: false }} 
         className="text-5xl font-bold mb-20">Our Clients</motion.h1>
        <SlideLogos />
        <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
        transition={{ duration: 1 }}
        viewport={{ once: false }}
         className="text-5xl font-bold mb-20 mt-20">Our Branches</motion.h1>
        <Galery/>
      </div>
    </>
  );
}

export default Content3;
