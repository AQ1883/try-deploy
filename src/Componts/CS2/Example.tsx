import { motion } from "framer-motion";
import CountBranch from "./CountBranch";
import CountCity from "./CountCity";
import CountBrand from "./CountBrand";

function Example() {
  return (
    <>
      <div className="">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
          transition={{ duration: 1 }}
          viewport={{ once: false }} // لا تجعل الحركة تقتصر على مرة واحدة فقط
        >
          <div className="text-4xl opacity-70">Our Branches</div>
        </motion.div>
        <CountCity />
      </div>
      <div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
          transition={{ duration: 1 }}
          viewport={{ once: false }} // لا تجعل الحركة تقتصر على مرة واحدة فقط
        >
          <div className="text-4xl opacity-70">Our Clients</div>
        </motion.div>
        <CountBrand />
      </div>
      <div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
          transition={{ duration: 1 }}
          viewport={{ once: false }} // لا تجعل الحركة تقتصر على مرة واحدة فقط
        >
          <div className="text-4xl opacity-70">Countries We Serve</div>
        </motion.div>
        <CountBranch />
      </div>
    </>
  );
}

export default Example;
