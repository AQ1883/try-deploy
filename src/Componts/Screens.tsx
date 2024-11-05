import CarouselWithContent from "./CS1/Carousel";
import Content2 from "./CS2/Content2";
import { motion } from "framer-motion";
import Content3 from "./CS3/Content3";
import Content4 from "./CS4/Content4";
import Downbar from "./Downbar";
import { Navbar } from "@material-tailwind/react";
import Navpart from "./Navpar";




function Screens() {
  return (
    <>
            <Navpart/>
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
        <h1 className="text-center mx-auto rounded-md w-auto py-2 px-4 text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Copyright© 2024 AHMED ALQURASHI | by AHMED ALQURASHI{" "}
          <button
            className=" rounded-md   border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#0077b5]/90 focus:shadow-none active:bg-[#0077b5]/90 hover:bg-[#0077b5]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <i className="fab fa-linkedin w-4 h-4" aria-hidden="true"></i>
          </button>
        </h1>
      </div>
    </>
  );
}

export default Screens;
