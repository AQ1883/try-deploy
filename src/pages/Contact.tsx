import { Button, Input, Textarea } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Navpart from "../Componts/Navpar";
import Downbar from "../Componts/Downbar";

function Contact() {
  return (
    <>
    <Navpart/>
      <div className="bg-black h-screen">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="flex justify-center items-center text-white h-[80vh]"
            id="stroke2"
          >
            CONN<span>E</span>CT
          </motion.div>
        </div>
        <div className="h-screen bg-black flex items-center">
          <div className="container mx-auto text-white">
            <div className="flex justify-between">
              <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
               id="stroke2" className="w-1/2">
                Get<span> in </span>touch.
              </motion.h1>
              <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="flex  flex-col gap-6 w-1/2">
                <Input
                  variant="standard"
                  label="Your name"
                  placeholder="Name"
                />
                <Input
                  type="email"
                  variant="standard"
                  label="Email"
                  placeholder="example@name-company.com"
                />
                <Input
                  variant="standard"
                  label="Your company"
                  placeholder="Company name"
                />
                 <Textarea label="Message" variant="standard"/>
                 <Button size="sm">Submit</Button>
              
              </motion.div>
            </div>
          </div>
          
        </div>
        <hr />
        <div className="bg-black">
          <Downbar/>
        </div>
        
      </div>
    </>
  );
}

export default Contact;
