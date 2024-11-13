import { useTrail, a } from "@react-spring/web";
import { useState, useRef, useEffect } from "react";
import styles from "../styles.module.css";
import React from "react";

const Trail: React.FC<{ open: boolean,children: React.ReactNode }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

function Abouts5() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOpen(true); // تفعيل الأنيميشن عند رؤية العنصر
          } else {
            setOpen(false); // إيقاف الأنيميشن عند خروجه من الرؤية
          }
        });
      },
      { threshold: 0.1 } // يبدأ الأنيميشن عند ظهور 10% من العنصر
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
    <div className="container mx-auto flex justify-center items-center h-[60vh]">
      <div ref={ref} className={styles.container}>
        <Trail open={open}>
          <span className=" font-thin tracking-normal leading-none text-slate-500">
          Our Vision
          </span>
          <span>To create a reality where the answer</span>
          <span> to the most complex questions is</span>

          <span> technology, and transform ideas into </span>
          <span>
          reality through a clearly defined

          </span>
          <span>purpose and positioning, embodying our branding.</span>

        </Trail>
      </div>
    </div>
    
    
    
    </>
    
  );
}

export default Abouts5;
