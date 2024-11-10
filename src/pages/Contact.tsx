import { div } from "framer-motion/client";
import React from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function Contact() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="container mx-auto ">
          <div className="text-center h-screen flex justify-center items-center">
            <h1 id="stroke" className="">
              Connect
            </h1>
            <div className="h-screen flex justify-center items-center">
              <h1>Get in touch.</h1>
              <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="white">
                  Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="white" className="-mb-3">
                      Your Name
                    </Typography>
                    <Input
                    placeholder="Ahmed mohammed"
                      color="black"
                      size="lg"
                      className=" focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none text-white",
                      }}
                    />
                    
                    
                    <Typography variant="h6" color="white" className="-mb-3">
                      Your Email
                    </Typography>
                    <Input
                      color="black"
                      size="lg"
                      placeholder="name@mail.com"
                      className=" focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography variant="h6" color="white" className="-mb-3">
                      Your Company
                    </Typography>
                    <Input
                      color="black"
                      size="lg"
                      className=" focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <Button className="mt-6" fullWidth>
                    Send
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
