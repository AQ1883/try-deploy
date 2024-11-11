import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";
import Navpart from "../Componts/Navpar";
import { Trail } from "@react-spring/web";
import Trailx from "../Componts/Trail";

function Services() {
  return (
    <>
      <Navpart />
      <div className="bg-black h-screen ">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="flex justify-center items-center text-white h-[80vh]"
            id="stroke2"
          >
            What<span className="ml-2 mr-2">We</span>Do
          </motion.div>
        </div>
      </div>
      <div className="bg-black h-screen">
        <div className="container mx-auto">
          <div className="flex">
            
            
            
            <Trailx />
          
          </div>
          
          <div className="flex mt-20">
            <div className="w-3/4"></div>
            <div className="text-slate-400 w-1/2">
            
            <Trailx />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
