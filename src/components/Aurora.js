"use client";
import { motion } from "framer-motion";

const blobs = [
  { c: "bg-violet-600/30", s: "w-[38rem] h-[38rem] -top-40 -left-40", a: { x: [0, 80, 0], y: [0, 60, 0] }, d: 18 },
  { c: "bg-cyan-500/20", s: "w-[34rem] h-[34rem] top-1/3 -right-40", a: { x: [0, -70, 0], y: [0, 80, 0] }, d: 22 },
  { c: "bg-orange-500/15", s: "w-[30rem] h-[30rem] bottom-0 left-1/3", a: { x: [0, 60, 0], y: [0, -60, 0] }, d: 20 },
];

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.c} ${b.s}`}
          animate={b.a}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center,black 30%,transparent 75%)",
        }}
      />
    </div>
  );
}