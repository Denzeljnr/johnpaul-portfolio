"use client";
import { motion } from "framer-motion";

const steps = [
  ["01", "Map the manual process", "Start with the real workflow: who does what, where data gets re-typed and where things get missed."],
  ["02", "Design the flow and agents", "Decide what stays rule-based and what needs an AI agent, and give each agent one clear job."],
  ["03", "Build and connect the tools", "n8n, APIs, Google Workspace, Supabase, or C# when the logic needs real code."],
  ["04", "Test, harden, document", "Break it on purpose, add duplicate protection, retries and logging, then write down how it works."],
];

export default function Process() {
  return (
    <div className="relative grid md:grid-cols-4 gap-6 mt-10">
      <motion.div
        className="hidden md:block absolute top-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-orange-400"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
      />
      {steps.map(([n, t, d], i) => (
        <motion.div
          key={n}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}
          className="relative glass rounded-2xl p-5 pt-10"
        >
          <span className="absolute top-0 left-5 -translate-y-1/2 w-12 h-12 rounded-full grid place-items-center font-mono text-sm text-white bg-gradient-to-br from-violet-500 to-cyan-400">
            {n}
          </span>
          <h3 className="font-semibold mb-2">{t}</h3>
          <p className="text-sm text-foreground/65">{d}</p>
        </motion.div>
      ))}
    </div>
  );
}