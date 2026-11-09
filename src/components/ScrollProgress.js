"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-violet-500 via-cyan-400 to-orange-400"
    />
  );
}