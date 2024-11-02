import CarouselWithContent from "./CS1/Carousel";
import Content2 from "./CS2/Content2";
import { motion } from "framer-motion";
import Content3 from "./CS3/Content3";

function Screens() {
  return (
    <>
      <div className="h-screen">
        <CarouselWithContent />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
        transition={{ duration: 2 }}
        viewport={{ once: false }} // يمكنك تغييره إلى { once: true } إذا كنت تريد أن تحدث مرة واحدة
        id="screen2"
        className="h-screen bg-black"
      >
        <Content2 />
      </motion.div>

      <div id="screen3" className="h-screen bg-black">
        
        <Content3 />
      </div>
      
    </>
  );
}

export default Screens;
