import { motion } from "framer-motion"

function Imgtext3(){
  return (
      <div className="flex justify-around items-center">
      <motion.img
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: false }}
          id="bgtest"
          className="h-60 m-2"
          src="https://cdn-icons-png.freepik.com/512/9910/9910158.png?ga=GA1.1.995382041.1729901771"
          alt=""
        />

        <div>
          <h1 style={{ fontSize: "3em", fontWeight: "200" }}>Establishment</h1>
          <p className="w-3/6">
          Establish your smart convenience store in 90 days: We handle the flooring, décor, painting, signage, shelving, refrigerators, freezers, self-service devices, payment systems, and security cameras.


          </p>
        </div>
    </div>
  )
}

export default Imgtext3