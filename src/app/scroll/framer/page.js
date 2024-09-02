"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function page() {
  const [scale, setScale] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const [isVisible, setIsVisible] = useState(false);
  // 1. 스크롤값을 clippath에 전달
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScale(latest.toFixed(2) * 100);

    if (latest > 0.7) {
      // 스크롤 위치가 300px을 넘을 때
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  // 2. scrollYProgress > 0.7 글자 아래서 위로

  return (
    <>
      <div className="w-full h-full overflow-y-scroll bg-neutral-900" ref={ref}>
        <div className="w-full h-full fixed inset-0 pointer-events-none">
          <motion.div
            className="bg-orange-400 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full fixed pointer-events-none"
            style={{ clipPath: "circle(" + scale + "%)" }}
          >
            <h1 className="text-blue-600 text-[8vw] pl-[8vw] flex flex-col font-semibold">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ transform: "translateY(200px)" }}
                  animate={
                    isVisible
                      ? { transform: "translateY(0)" }
                      : { transform: "translateY(200px)" }
                  }
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  className=""
                >
                  Aha!
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ transform: "translateY(200px)" }}
                  animate={
                    isVisible
                      ? { transform: "translateY(0)" }
                      : { transform: "translateY(200px)" }
                  }
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  className=""
                >
                  You found me!
                </motion.div>
              </div>
            </h1>
          </motion.div>
        </div>

        {new Array(5).fill(null).map((_, index) => (
          <div className="w-screen h-screen" key={index} />
        ))}
      </div>
    </>
  );
}
