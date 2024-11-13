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

function Srev2() {
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
      <div className="container mx-auto flex justify-center items-center h-[50vh]">
        <div ref={ref} className={styles.container}>
          <Trail open={open}>
            <span>Smart Convenience </span>
            <span>Store Solutions</span>
          </Trail>
          <p className="text-slate-200 mt-3">
            KartNGo is an innovative company leading the way in smart retail
            solutions with over 100+ convenience store equipped with
            cutting-edge self-service and advanced payment technologies. Our
            expertise in creating seamless shopping experiences has positioned
            us as a leader in the industry. Now, we’re taking our success to the
            next level by offering a unique white-label opportunity. This
            project allows entrepreneurs to tap into our proven systems and
            technologies, providing them with a ready-made platform to launch
            their own smart retail stores, backed by KartNGo’s advanced
            infrastructure and expertise.
          </p>
        </div>
      </div>
    </>
  );
}

export default Srev2;
