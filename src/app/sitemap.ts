import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://ph-document.com";

type PageEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const pages: PageEntry[] = [
  { path: "",          priority: 1.0, changeFrequency: "weekly"  },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/faq",      priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact",  priority: 0.7, changeFrequency: "monthly" },
  { path: "/company",  priority: 0.6, changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}/ja${path}/`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
