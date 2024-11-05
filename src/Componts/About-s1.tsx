import { Button, Typography } from '@material-tailwind/react'
import { motion } from 'framer-motion'


function Abouts1() {
  return (
    <div className="relative h-full w-full">
        <img
          src="https://pbs.twimg.com/media/FrInON3WcAA3p4f?format=jpg&name=4096x4096"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <motion.div
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
           transition={{ duration: 1 }}
           viewport={{ once: false }}
           className="w-3/4 text-center md:w-2/4">
            <Typography
            id='stroke'
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-9xl mt-40 tracking-widest"
            >
              WE ARE
            </Typography>
           
            
          </motion.div>
          
        </div>
      </div>
  )
}

export default Abouts1