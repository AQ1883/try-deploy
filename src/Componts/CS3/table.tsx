import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          KartNGo Store
        </AccordionHeader>
        <AccordionBody>
          KartNGo store is a cutting-edge, self-service micro-market tailored
          for office settings. Employees can easily access a variety of
          products, such as snacks, beverages, and personal care items.
          Operating 24 hours a day, KartNGo store ensures that essentials are
          always available, enhancing workplace convenience at any time.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Smart Convenience Store Solutions
        </AccordionHeader>
        <AccordionBody>
          KartNGo is an innovative company leading the way in smart retail
          solutions with over 100+ convenience store equipped with cutting-edge
          self-service and advanced payment technologies. Our expertise in
          creating seamless shopping experiences has positioned us as a leader
          in the industry. Now, we’re taking our success to the next level by
          offering a unique white-label opportunity. This project allows
          entrepreneurs to tap into our proven systems and technologies,
          providing them with a ready-made platform to launch their own smart
          retail stores, backed by KartNGo’s advanced infrastructure and
          expertise.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Full Package
        </AccordionHeader>
        <AccordionBody>
          You will get a smart self-service convenience store with your own
          brand, including establishment, self-service and payment devices, an
          online store, products, technical support, security monitoring, and
          inventory management. We will accomplish all of this in three phases
          as explained below.
        </AccordionBody>
      </Accordion>
    </>
  );
}
