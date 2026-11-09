export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "displayName", title: "Display Name", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "photo", title: "Profile Photo", type: "image", options: { hotspot: true } },
    { name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] },
    { name: "skills", title: "Core Skills", type: "array", of: [{ type: "string" }], options: { layout: "tags" } },
    { name: "email", title: "Email", type: "string" },
    { name: "linkedin", title: "LinkedIn URL", type: "url" },
    { name: "resumeFile", title: "Resume PDF", type: "file", options: { accept: ".pdf" } },
  ],
};