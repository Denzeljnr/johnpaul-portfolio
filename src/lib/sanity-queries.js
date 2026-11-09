import { client } from "@/sanity/client";

async function safe(query, params, fallback) {
  try {
    return await client.fetch(query, params);
  } catch (err) {
    console.warn("Sanity fetch failed:", err.message);
    return fallback;
  }
}

export const getAllProjects = () =>
  safe(
    `*[_type == "project"] | order(order asc){ title, "slug": slug.current, oneLiner, coverImage, tags, featured, order }`,
    {},
    []
  );

export const getProjectBySlug = (slug) =>
  safe(
    `*[_type == "project" && slug.current == $slug][0]{ ..., "videoFileUrl": videoFile.asset->url }`,
    { slug },
    null
  );

export const getSiteSettings = () =>
  safe(
    `*[_type == "siteSettings"] | order(_updatedAt desc)[0]{ ..., resumeFile{ asset-> { url } } }`,
    {},
    null
  );