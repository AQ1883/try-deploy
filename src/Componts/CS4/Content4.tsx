import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

function Content4() {
  return (
    <>
      <div>
        <div className="container mx-auto text-white">
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }} // الحركة تحدث عندما يكون العنصر في مجال الرؤية
          transition={{ duration: 1 }}
          viewport={{ once: false }} 
           className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
            <Card  color="transparent" className="mt-6 hover:bg-slate-950 ease-in-out duration-300">
              <CardBody>
                <Typography variant="h1" color="white" className="mb-2">
                Workspace Management Solution
                </Typography>
                <Typography color="white">
                  Comprehensive workspace management package seamlessly
                  integrated with our smart micro-market. Our services include
                  energy management, cleaning, maintenance, office supplies,
                  water delivery and pest control, ensuring a well-maintained
                  and efficient workspace.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href="/Contact"><Button className="m-1">Get it</Button></a>
                <a href="/About"><Button>Read More</Button></a>
              </CardFooter>
            </Card>
            <Card color="transparent" className="mt-6 ease-in-out hover:bg-slate-950 duration-300">
              <CardBody>
                <Typography variant="h1" color="white" className="mb-2">
                  Smart Convenience Store Solutions
                </Typography>
                <Typography color="white">
                  This project allows entrepreneurs to tap into our proven
                  systems and technologies, providing them with a ready-made
                  platform to launch their own smart retail stores, backed by
                  KartNGo’s advanced infrastructure and expertise.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
              <a href="/Contact"><Button className="m-1">Get it</Button></a>
              <a href="/About"><Button>Read More</Button></a>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Content4;
