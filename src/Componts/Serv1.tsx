import { Typography } from '@material-tailwind/react'
import { motion } from 'framer-motion'


function Serv1() {
  return (
    <div className="bg-black h-full w-full">
        
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <motion.div
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
           transition={{ duration: 1 }}
           viewport={{ once: false }}
           className="w-3/4 text-center md:w-2/4">
            <Typography
            id='stroke2'
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-9xl mt-40 tracking-widest"
            >
              What <span id='stroke2'>We</span>Do
            </Typography>
           
            
          </motion.div>
          
        </div>
      </div>
  )
}

export default Serv1