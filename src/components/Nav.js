import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 glass border-x-0 border-t-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display font-semibold">
          <span className="gradient-text">Johnpaul</span> Nwokocha
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/#projects" className="hover:text-cyan-400 transition">Work</Link>
          <Link href="/#process" className="hover:text-cyan-400 transition hidden sm:block">Process</Link>
          <Link href="/resume" className="hover:text-cyan-400 transition">Resume</Link>
          <Link href="/#contact" className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-violet-500 to-cyan-500 hover:opacity-90 transition">
            Let's talk
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}