"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ROLES = ["AI automation systems", "n8n workflows", "agentic pipelines", "full-stack tools"];
const NODES = [["Webhook", 10, 128], ["Gemini Agent", 160, 50], ["Router", 160, 206], ["Supabase", 320, 50], ["Telegram", 320, 206]];
const LINKS = ["M130 150 C145 150 145 72 160 72", "M130 150 C145 150 145 228 160 228", "M280 72 L320 72", "M280 228 L320 228"];

function useTyped(words) {
  const [i, setI] = useState(0);
  const [t, setT] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const done = !del && t === w;
    const id = setTimeout(() => {
      if (done) setDel(true);
      else if (del) {
        if (t.length <= 1) { setT(""); setDel(false); setI(i + 1); }
        else setT(w.slice(0, t.length - 1));
      } else setT(w.slice(0, t.length + 1));
    }, done ? 1400 : del ? 35 : 70);
    return () => clearTimeout(id);
  }, [t, del, i, words]);
  return t;
}

export default function Hero({ displayName, tagline }) {
  const typed = useTyped(ROLES);
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to roles and projects
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-5xl md:text-7xl font-bold mt-6 gradient-text leading-tight"
        >
          {displayName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="mt-3 text-lg text-foreground/70"
        >
          {tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mt-6 text-2xl md:text-3xl font-mono"
        >
          I build <span className="text-cyan-500 dark:text-cyan-300">{typed}</span>
          <span className="inline-block w-[2px] h-7 bg-cyan-400 ml-1 align-middle animate-pulse" />
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#projects" className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-violet-500 to-cyan-500 hover:opacity-90 hover:-translate-y-0.5 transition">
            View my work
          </a>
          <Link href="/resume" className="glass px-6 py-3 rounded-xl font-medium hover:-translate-y-0.5 transition">
            Resume
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass rounded-3xl p-4"
      >
        <div className="flex items-center gap-2 mb-2 px-1">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs font-mono text-foreground/50">workflow.json</span>
        </div>
        <svg viewBox="0 0 460 300" className="w-full">
          <defs>
            <linearGradient id="g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="460" y2="0">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          {LINKS.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="url(#g)" strokeWidth="2" className="flow" />
          ))}
          {NODES.map(([label, x, y], i) => (
            <motion.g
              key={label}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            >
              <rect x={x} y={y} width="120" height="44" rx="12" fill="rgba(139,92,246,.14)" stroke="url(#g)" />
              <text x={x + 60} y={y + 27} textAnchor="middle" fontSize="13" fill="currentColor" className="font-mono">
                {label}
              </text>
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </section>
  );
}