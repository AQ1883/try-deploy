import { motion } from "framer-motion"

function Imgtext1(){
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
            className="h-60 m-8"
            src="https://cdn-icons-png.freepik.com/512/854/854929.png?ga=GA1.1.995382041.1729901771"
            alt=""
          />

          <div>
            <h1 style={{ fontSize: "3em", fontWeight: "200" }}>Location</h1>
            <p className="w-3/6">
            Choose the right location for you, and we’ll assist in evaluating it thoroughly. Alternatively, we can recommend several excellent and immediately available rental sites to suit your needs.
            </p>
          </div>
      </div>
    )
}

export default Imgtext1