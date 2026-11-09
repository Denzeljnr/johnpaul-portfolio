export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() },
    { name: "oneLiner", title: "One-line summary", type: "string" },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "gallery", title: "Gallery (workflow screenshots, results, UI)", type: "array", of: [{
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "caption", type: "string", title: "Caption" }],
        },
      ],
    },
    { name: "tags", title: "Tools / Tags", type: "array", of: [{ type: "string" }], options: { layout: "tags" } },
    { name: "role", title: "Role", type: "string" },
    { name: "clientScope", title: "Client / Scope", type: "string" },
    { name: "primaryOutcome", title: "Primary Outcome", type: "string" },
    {
      name: "metrics",
      title: "Measurable Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "value", type: "string", title: "Value" },
            { name: "isNumber", type: "boolean", title: "Animate as a counting number?", description: "Only turn this on if the value is a plain number, like 42 or 99.8 — not text." },
          ],
        },
      ],
    },
    {
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        { name: "workflowJson", type: "url", title: "Workflow JSON URL" },
        { name: "repo", type: "url", title: "Repo URL" },
      ],
    },
    { name: "body", title: "Full Write-up", type: "array", of: [{ type: "block" }] },
    { name: "loomVideo", title: "Loom Video URL", type: "url", description: "Paste the Loom share link (e.g. https://www.loom.com/share/xxxxx)" },
    {
  name: "videoFile",
  title: "Video File (upload)",
  type: "file",
  options: { accept: "video/*" },
  description: "Upload an .mp4 of your demo. Keep it short, and compress large files first.",
},
    { name: "featured", title: "Featured on Homepage", type: "boolean" },
    { name: "order", title: "Display Order", type: "number" },
  ],
};