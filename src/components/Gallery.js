"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/image";

export default function Gallery({ images }) {
  const [active, setActive] = useState(null);
  const valid = (images || []).filter((img) => img?.asset);
  if (valid.length === 0) return null;

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        {valid.map((img, i) => (
          <figure key={img._key || i}>
            <button
              onClick={() => setActive(img)}
              className="block w-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow cursor-zoom-in"
            >
              <img src={urlFor(img).width(800).url()} alt={img.caption || ""} className="w-full" />
            </button>
            {img.caption && <figcaption className="text-sm text-foreground/60 mt-2">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <img
              src={urlFor(active).width(2000).url()}
              alt={active.caption || ""}
              className="max-h-full max-w-full rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}