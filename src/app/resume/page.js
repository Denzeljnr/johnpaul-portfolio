import { getSiteSettings } from "@/lib/sanity-queries";
import Link from "next/link";
export const revalidate = 60;

export default async function ResumePage() {
  const settings = await getSiteSettings();
  const resumeUrl = settings?.resumeFile?.asset?.url;

  return (
    <main className="min-h-screen text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-cyan-600 dark:text-cyan-300 text-sm mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-2 font-display">Nwokocha Johnpaul Chukwudubem</h1>
        <p className="text-lg text-cyan-600 dark:text-cyan-300 mb-6">{settings?.tagline || "Automation Builder & Workflow Engineer"}</p>

        <div className="flex gap-4 mb-8 flex-wrap">
          {resumeUrl && (
            <a href={resumeUrl} download className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition">
              Download Resume (PDF)
            </a>
          )}
          <a
            href={`mailto:${settings?.email || "chukwudubemnwokocha@gmail.com"}`}
            className="border border-orange-300 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition"
          >
            Email Directly
          </a>
        </div>

        <div className="glass rounded-xl p-8 shadow-sm">
          {resumeUrl ? (
            <embed src={resumeUrl} type="application/pdf" className="w-full h-[800px] rounded-lg" />
          ) : (
            <p className="text-gray-500">
              Upload your resume PDF in the Studio (Site Settings → Resume PDF) to show it here.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}