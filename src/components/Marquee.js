export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-foreground/10 py-4 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee flex w-max gap-4">
        {row.map((t, i) => (
          <span key={i} className="glass px-4 py-2 rounded-full text-sm whitespace-nowrap font-mono">{t}</span>
        ))}
      </div>
    </div>
  );
}