import { motion } from "framer-motion";

function Downbar() {
  return (
    <>
      <div className="container mx-auto  text-white">
        <div className="flex gap-4 w-1">
          <div className="flex-col m-10">
            <motion.h1
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
             transition={{ duration: 1 }}
             viewport={{ once: false }}
             className="mb-2 font-bold">KSA</motion.h1>
            <motion.h1
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
             transition={{ duration: 1 }}
             viewport={{ once: false }}
            >
              Jeddah,Saudi Arabia 
            </motion.h1>
            <motion.h1
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
             transition={{ duration: 1 }}
             viewport={{ once: false }}
            >Summit Center for Business
            Administration</motion.h1>
            <motion.h1
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
             transition={{ duration: 1 }}
             viewport={{ once: false }}
            >Aziziyah</motion.h1>

            <br />
            <motion.h1
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
             transition={{ duration: 1 }}
             viewport={{ once: false }}
            >+966920011854</motion.h1>
            <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            >support@kartngo.co</motion.h1>
            <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
            transition={{ duration: 1 }}
            viewport={{ once: false }}

             className="mb-2">info@kartngo.co</motion.h1>
             

            <div className="flex">
              <button
                className="mr-1 rounded-md bg-[#25D366] py-2 px-2.5 border border-transparent text-center text-sm  transition-all shadow-sm hover:shadow-lg focus:bg-[#25D366]/90 focus:shadow-none active:bg-[#25D366]/90 hover:bg-[#25D366]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <i className="fab fa-whatsapp w-4 h-4" aria-hidden="true"></i>
              </button>
              <button
                className="mr-1 rounded-md bg-[#0077b5] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#0077b5]/90 focus:shadow-none active:bg-[#0077b5]/90 hover:bg-[#0077b5]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <i className="fab fa-linkedin w-4 h-4" aria-hidden="true"></i>
              </button>
              <button
                className="mr-1 rounded-md bg-[#000] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#0001]/90 focus:shadow-none active:bg-[#333333]/90 hover:bg-[#222]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <i className="fab fa-x-twitter w-4 h-4" aria-hidden="true"></i>
              </button>
              <div className="flex gap-5 ml-40 ">
                <motion.button
                initial={{  opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                  className="rounded-md w-80 py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Who we are 
                </motion.button>
                <motion.button
                initial={{  opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                  className="rounded-md w-80 py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  What we Do
                </motion.button>
                <motion.button
                initial={{  opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                  className="rounded-md w-80 py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Downbar;
