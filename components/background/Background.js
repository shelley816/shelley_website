import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const circleNo1 =
  "absolute rounded-full bg-radial-[at_30%_30%] from-[#C5D9D7]/30 via-[#DABB9F]/30 to-[#7ABEC2]/30 to-90% contrast-125 backdrop-blur-xl";
const circleNo2 =
  "absolute rounded-full bg-radial-[at_30%_30%] from-white/30 via-white/20 to-white/5 to-90% backdrop-blur-xl";
const circleNo3 =
  "absolute rounded-full bg-radial-[at_30%_30%] from-[#C5D9D7]/30 via-[#FFB07D]/10 to-[#FF8842]/5 to-90% backdrop-blur-xl";
    
export default function Background({ bodyHeight, isDark }) {
  const { scrollY } = useScroll();
  const [toX90n, setToX90n] = useState(0);
  const [toX90, setToX90] = useState(0);
  const [toX50, setToX50] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    setToX90(width * 0.9);
    setToX90n(width * -0.9);
    setToX50(width * 0.5);
  }, []);

  const rawY = useTransform(scrollY, [0, 3000], [0, 3000]);
  const circleNo1ScrollY = useSpring(rawY, { stiffness: 30, damping: 25 });
  const circleNo2ScrollY = useSpring(rawY, { stiffness: 20, damping: 15 });
  const circleNo3ScrollY = useSpring(rawY, { stiffness: 10, damping: 5 });
  
  const rawX1 = useTransform(scrollY, [0, 1000, 2000, 3000], [0, toX90, 0, toX90]);
  const rawX2 = useTransform(scrollY, [0, 1000, 2000, 3000], [0, toX90n, 0, toX90n]);
  const rawX3 = useTransform(scrollY, [0, 1000, 2000, 3000], [0, toX50, 0, toX50]);

  const circleNo1ScrollX = useSpring(rawX1, { stiffness: 30, damping: 25 });
  const circleNo2ScrollX = useSpring(rawX2, { stiffness: 20, damping: 15 });
  const circleNo3ScrollX = useSpring(rawX3, { stiffness: 10, damping: 5 });

  return (
    <>
      {bodyHeight > 0 && (
        <div
          className={`absolute w-full z-0 bg-cover bg-top overflow-hidden bg-[url(../assets/bg_01.jpg)] ${
            isDark && "invert opacity-20"
          }`}
          style={{ height: `${bodyHeight}px` }}
        >
          <motion.div
            style={{ y: circleNo1ScrollY, x: circleNo1ScrollX }}
            className={`${circleNo1} -top-10 lg:-top-50 -left-[35%] lg:-left-[10%] size-130 md:size-180 lg:size-200`}
          ></motion.div>
          <motion.div
            style={{ y: circleNo2ScrollY, x: circleNo2ScrollX }}
            className={`${circleNo2} top-80 lg:top-50 -right-[35%] lg:-right-[12%] size-90 md:size-130`}
          ></motion.div>
          <motion.div
            style={{ y: circleNo3ScrollY, x: circleNo3ScrollX }}
            className={`${circleNo3} top-160 md:top-220 lg:top-160 left-[5%] lg:left-[20%] size-120 md:size-180 lg:size-120`}
          ></motion.div>
        </div>
      )}
    </>
  );
}
