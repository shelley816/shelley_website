import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react"

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
  const [toX80, setToX80] = useState(0);
  const [toX50, setToX50] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    setToX80(width * 0.8);
    setToX90(width * 0.9);
    setToX90n(width * -0.9);
    setToX50(width * 0.5);
  }, []);

  const rawY = useTransform(scrollY, [0, bodyHeight], [0, bodyHeight]);
  const circleNo1ScrollY = useSpring(rawY, { stiffness: 30, damping: 25 });
  const circleNo2ScrollY = useSpring(rawY, { stiffness: 20, damping: 15 });
  const circleNo3ScrollY = useSpring(rawY, { stiffness: 10, damping: 5 });

  const rawX1 = useTransform(
    scrollY,
    [0, 800, 1700, 2500, 3200, 4000, 4800],
    [0, toX90, 0, toX80, 0, toX90, 0]
  );
  const rawX2 = useTransform(
    scrollY,
    [0, 800, 1700, 2500, 3200, 4000, 4800],
    [0, toX90n, 0, toX90n, 0, toX90n, 0]
  );
  const rawX3 = useTransform(
    scrollY,
    [0, 800, 1700, 2500, 3200, 4000, 4800],
    [0, toX50, 0, toX50, 0, toX50, 0]
  );

  const circleNo1ScrollX = useSpring(rawX1, { stiffness: 30, damping: 25 });
  const circleNo2ScrollX = useSpring(rawX2, { stiffness: 20, damping: 15 });
  const circleNo3ScrollX = useSpring(rawX3, { stiffness: 10, damping: 5 });

  return (
    <>
      {bodyHeight > 0 && (
        <div
          className={`absolute w-full z-0 bg-top bg-no-repeat bg-[length:100vw_auto] overflow-hidden bg-[url(../assets/bg.png)] md:bg-[url(../assets/bg_md.png)] xl:bg-[url(../assets/bg_xl.png)] ${
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
            className={`${circleNo2} top-80 lg:top-60 -right-[35%] lg:-right-[12%] size-90 md:size-140`}
          ></motion.div>
          <motion.div
            style={{ y: circleNo3ScrollY, x: circleNo3ScrollX }}
            className={`${circleNo3} top-160 md:top-220 lg:top-170 left-[5%] lg:left-[20%] size-120 md:size-180 lg:size-120`}
          ></motion.div>
        </div>
      )}
    </>
  );
}
