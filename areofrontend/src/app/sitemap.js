import { siteSections, siteUrl } from "./site";

export default function sitemap() {
  return siteSections.map((section) => ({
    url: `${siteUrl}${section.path}`,
    lastModified: new Date(),
    changeFrequency: section.changeFrequency,
    priority: section.priority,
  }));
}
