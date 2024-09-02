"use client";

import { useInView } from "react-intersection-observer";

export default function ScrollItem({ text }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <div
        ref={ref}
        className={`w-full h-svh flex justify-center items-center text-[10vw] font-bold transition duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {text}
      </div>
    </>
  );
}
