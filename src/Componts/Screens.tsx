import CarouselWithContent from "./CS1/Carousel";
import Content2 from "./CS2/Content2";
import { motion } from "framer-motion";
import Content3 from "./CS3/Content3";
import Content4 from "./CS4/Content4";
import Downbar from "./Downbar";

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
      <div className="h-screen bg-black pt-40">
        
        <Content4 />
      </div>

  <hr />
  <div className="bg-black">
    <Downbar />
  </div>
        
    

      
      
    </>
  );
}

export default Screens;
