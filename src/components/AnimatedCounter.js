"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(parseFloat(value));
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest * 10) / 10;
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}