"use client";
import { useState } from "react";

export default function LoomEmbed({ url }) {
  const [play, setPlay] = useState(false);
  const embed = url.replace("/share/", "/embed/").split("?")[0];

  return (
    <div
      className="mb-8 rounded-xl overflow-hidden shadow-sm relative bg-neutral-900"
      style={{ paddingBottom: "56.25%" }}
    >
      {play ? (
        <iframe
          src={`${embed}?autoplay=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
        />
      ) : (
        <button
          onClick={() => setPlay(true)}
          className="absolute inset-0 flex flex-col items-center justify-center text-white gap-3 hover:bg-neutral-800 transition"
        >
          <span className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-2xl">▶</span>
          <span className="font-medium">Watch the walkthrough</span>
        </button>
      )}
    </div>
  );
}