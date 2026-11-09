"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { urlFor } from "@/sanity/image";

function Card({ p, i }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <motion.div
      layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }} whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
    >
      <Link
        href={`/projects/${p.slug}`} onMouseMove={onMove}
        className="group relative block h-full glass rounded-2xl overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: "radial-gradient(300px circle at var(--mx) var(--my), rgba(139,92,246,.25), transparent 60%)" }}
        />
        {p.coverImage ? (
          <img src={urlFor(p.coverImage).width(600).height(300).url()} alt={p.title} className="w-full h-36 object-cover" />
        ) : (
          <div className="h-36 flex items-end justify-between p-4 bg-gradient-to-br from-violet-600/30 via-cyan-500/15 to-orange-500/20">
            <span className="font-mono text-4xl font-bold text-foreground/30">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-mono text-xs text-foreground/60">{p.tags?.[0]}</span>
          </div>
        )}
        <div className="relative p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {p.tags?.slice(0, 3).map((t) => (
              <span key={t} className="text-xs font-mono px-2 py-1 rounded-full bg-violet-500/15 text-violet-600 dark:text-violet-300">{t}</span>
            ))}
          </div>
          <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
          <p className="text-sm text-foreground/65 mb-4">{p.oneLiner}</p>
          <span className="text-sm font-medium text-cyan-600 dark:text-cyan-300 group-hover:translate-x-1 inline-block transition">
            View build breakdown →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsGrid({ projects }) {
  const [tag, setTag] = useState("All");
  const [all, setAll] = useState(false);
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags || []))).slice(0, 12);
  const featured = projects.filter((p) => p.featured);
  const base = all || featured.length === 0 ? projects : featured;
  const list = tag === "All" ? base : projects.filter((p) => p.tags?.includes(tag));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", ...tags].map((t) => (
          <button
            key={t} onClick={() => setTag(t)}
            className="relative px-4 py-2 rounded-full text-sm font-mono glass"
          >
            {tag === t && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
              />
            )}
            <span className={`relative ${tag === t ? "text-white" : ""}`}>{t}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {list.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
        </AnimatePresence>
      </motion.div>

      {tag === "All" && featured.length > 0 && featured.length < projects.length && (
        <div className="text-center mt-10">
          <button onClick={() => setAll(!all)} className="glass px-6 py-3 rounded-xl font-medium hover:-translate-y-0.5 transition">
            {all ? "Show featured only" : `Show all ${projects.length} builds`}
          </button>
        </div>
      )}
    </div>
  );
}