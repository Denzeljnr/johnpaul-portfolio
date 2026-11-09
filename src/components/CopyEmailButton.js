"use client";
import { useState } from "react";

export default function CopyEmailButton({ email, className }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className={className}>
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
}