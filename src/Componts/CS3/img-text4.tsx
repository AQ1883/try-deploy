import { motion } from "framer-motion";

function Imgtext4() {
  return (
    <div className="flex justify-end items-center">
      <div className="w-3/6">
        <h1 style={{ fontSize: "3em", fontWeight: "200" }}>3D Design
        </h1>
        <p>
        We create a 3D design of your store that details the shelves, refrigerators, self-service devices, and security cameras to ensure efficient use of space.


        </p>
      </div>
      <motion.img
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: false }}
        id="bgtest"
        className="h-80"
        src="https://cdn-icons-png.freepik.com/512/6690/6690949.png?ga=GA1.1.995382041.1729901771"
        alt=""
      />
    </div>
  );
}

export default Imgtext4;
