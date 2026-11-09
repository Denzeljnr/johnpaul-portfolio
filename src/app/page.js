import { getAllProjects, getSiteSettings } from "@/lib/sanity-queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import ProjectsGrid from "@/components/ProjectsGrid";
import AnimatedSection from "@/components/AnimatedSection";
import CopyEmailButton from "@/components/CopyEmailButton";

export const revalidate = 60;

const TOOLS = ["n8n", "Gemini API", "OpenAI API", "Claude API", "RAG", "AI Agents", "Supabase", "C#", "Blazor", "React", "Docker", "Google Workspace", "Telegram API"];
const eyebrow = "text-sm uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-300 mb-2";

export default async function Home() {
  const [projects, settings] = await Promise.all([getAllProjects(), getSiteSettings()]);
  const email = settings?.email || "chukwudubemnwokocha@gmail.com";
  const tools = Array.from(new Set([...(settings?.skills || []), ...TOOLS]));

  return (
    <main className="text-foreground">
      <Hero
        displayName={settings?.displayName || "Johnpaul Nwokocha"}
        tagline={settings?.tagline || "AI Automation Engineer"}
      />
      <Marquee items={tools} />
      <Stats count={projects.length} />

      <AnimatedSection className="max-w-5xl mx-auto px-6 py-16">
        <p className={eyebrow}>// who i am</p>
        <h2 className="font-display text-3xl font-bold mb-8">About me</h2>
        <div className={`grid gap-8 items-start ${settings?.photo ? "md:grid-cols-[280px_1fr]" : ""}`}>
          {settings?.photo && (
            <div className="relative w-full max-w-[280px] mx-auto md:mx-0">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 opacity-60" />
              <img
                src={urlFor(settings.photo).width(560).height(700).fit("crop").url()}
                alt="Johnpaul Nwokocha" className="relative w-full rounded-2xl object-cover"
              />
            </div>
          )}
          <div className="glass rounded-2xl p-6 prose dark:prose-invert max-w-none">
            {settings?.bio ? <PortableText value={settings.bio} /> : <p>Add your bio in /studio, Site Settings.</p>}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <p className={eyebrow}>// selected work</p>
        <h2 className="font-display text-3xl font-bold mb-8">Builds and automations</h2>
        <ProjectsGrid projects={projects} />
      </AnimatedSection>

      <AnimatedSection id="process" className="max-w-6xl mx-auto px-6 py-16">
        <p className={eyebrow}>// how i work</p>
        <h2 className="font-display text-3xl font-bold">From messy process to working system</h2>
        <Process />
      </AnimatedSection>

      <AnimatedSection id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="glass rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20 pointer-events-none" />
          <h2 className="relative font-display text-3xl md:text-4xl font-bold gradient-text">Have a process worth automating?</h2>
          <p className="relative mt-3 text-foreground/70">Tell me what is slow, manual or error-prone, and let's see what can run by itself.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <CopyEmailButton
              email={email}
              className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-violet-500 to-cyan-500 hover:opacity-90 transition"
            />
            <a href={settings?.linkedin || "https://www.linkedin.com/in/johnpaul-nwokocha67/"} target="_blank" rel="noopener noreferrer" className="glass px-6 py-3 rounded-xl font-medium hover:-translate-y-0.5 transition">
              LinkedIn
            </a>
            <a href="https://github.com/Denzeljnr" target="_blank" rel="noopener noreferrer" className="glass px-6 py-3 rounded-xl font-medium hover:-translate-y-0.5 transition">
              GitHub
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}