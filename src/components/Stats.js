"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats({ count }) {
  const items = [
    { v: count, s: "", l: "Builds documented here" },
    { v: 5, s: "", l: "Weekly builds shipped in public" },
    { v: 2, s: "", l: "Stacks: n8n and C# / Blazor" },
  ];
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((it, i) => (
        <motion.div
          key={it.l}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.12 }}
          className="glass rounded-2xl p-6 text-center"
        >
          <p className="font-display text-5xl font-bold gradient-text">
            <AnimatedCounter value={it.v} />{it.s}
          </p>
          <p className="text-sm text-foreground/60 mt-2">{it.l}</p>
        </motion.div>
      ))}
    </div>
  );
}