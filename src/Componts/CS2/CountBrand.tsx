import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function CountBrand() {
  const [count, setCount] = useState(0);
  const target = 90; // القيمة النهائية
  const incrementSpeed = 20; // سرعة التحديث بالمللي ثانية

  const { ref, inView } = useInView({
    triggerOnce: true, // التفعيل مرة واحدة فقط
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= target) {
            clearInterval(interval); // وقف التحديث عند الوصول إلى الهدف
            return target;
          }
          return prevCount + 1; // زيادة العدد
        });
      }, incrementSpeed);

      return () => clearInterval(interval); // تنظيف المؤقت عند إلغاء المكون
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ fontSize: "5em", fontWeight: "bold" }}>
      {count}+
    </div>
  );
}

export default CountBrand;
