import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://ph-document.com";
const pages = [
  "",
  "/gyoseishoshi",
  "/tokutei-gino",
  "/documents",
  "/apostille",
  "/services",
  "/cases",
  "/faq",
  "/company",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${BASE_URL}/ja${page}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));
}
