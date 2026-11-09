"use client";
import AnimatedCounter from "./AnimatedCounter";

export default function MetricsRow({ metrics }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-2">
      {metrics.map((m, i) => (
        <div key={i} className="glass rounded-xl p-5 shadow-sm text-center">
          <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-300 font-display">
            {m.isNumber ? <AnimatedCounter value={m.value} /> : m.value}
          </p>
          <p className="text-sm text-gray-500 mt-1">{m.label}</p>
        </div>
      ))}
    </div>
  );
}