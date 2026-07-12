import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://btob.pages.dev";
const LAST_MODIFIED = "2026-07-12";
const pages = ["", "/services", "/faq", "/contact", "/company"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${BASE_URL}/ja${page}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));
}
