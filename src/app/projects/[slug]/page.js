import { getProjectBySlug, getAllProjects } from "@/lib/sanity-queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import Link from "next/link";
import MetricsRow from "@/components/MetricsRow";
import Gallery from "@/components/Gallery";
import LoomEmbed from "@/components/LoomEmbed";
export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return <div className="p-10 text-center">Project not found.</div>;
  }

  return (
    <main className="min-h-screen text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-cyan-600 dark:text-cyan-300 text-sm mb-6 inline-block">
          ← Back to All Projects
        </Link>

        <h1 className="text-4xl font-bold mb-3 font-display">{project.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{project.oneLiner}</p>

        {project.coverImage && (
          <img src={urlFor(project.coverImage).width(1000).url()} alt={project.title} className="rounded-xl mb-8 w-full" />
        )}

        {project.loomVideo && <LoomEmbed url={project.loomVideo} />}

        {project.videoFileUrl && (
          <video
            controls
            preload="metadata"
            className="w-full rounded-xl shadow-sm mb-8"
            src={project.videoFileUrl}
          />
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 glass rounded-xl p-5 mb-8 shadow-sm text-sm">
          <div>
            <p className="text-gray-500 uppercase text-xs mb-1">Role</p>
            <p className="font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs mb-1">Client / Scope</p>
            <p className="font-medium">{project.clientScope}</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs mb-1">Primary Outcome</p>
            <p className="font-medium">{project.primaryOutcome}</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs mb-1">Tools</p>
            <p className="font-medium">{project.tags?.join(", ")}</p>
          </div>
        </div>

        {(project.links?.workflowJson || project.links?.repo) && (
          <div className="flex flex-wrap gap-3 mb-8">
            {project.links.workflowJson && (
              <a
                href={project.links.workflowJson}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition"
              >
                View Workflow JSON →
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-300 px-5 py-2.5 rounded-lg font-medium hover:bg-orange-50 transition"
              >
                View on GitHub →
              </a>
            )}
          </div>
        )}

        {project.metrics?.length > 0 && <MetricsRow metrics={project.metrics} />}

        <article className="prose prose-orange dark:prose-invert max-w-none glass rounded-xl p-8 shadow-sm mt-8">
          {project.body && <PortableText value={project.body} />}
        </article>

        {project.gallery?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 font-display">Workflow & Screenshots</h2>
            <Gallery images={project.gallery} />
          </div>
        )}
      </div>
    </main>
  );
}