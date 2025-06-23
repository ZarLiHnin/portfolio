// app/sitemap.ts

import { getAllWorks } from "@/lib/works";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await getAllWorks();

  const baseUrl = "https://zarli-portfolio.vercel.app";

  const staticUrls = [`${baseUrl}/`, `${baseUrl}/profile`, `${baseUrl}/works`];

  const dynamicUrls = works.map((work) => `${baseUrl}/works/${work.id}`);

  const allUrls = [...staticUrls, ...dynamicUrls];

  return allUrls.map((url) => ({
    url,
    lastModified: new Date().toISOString(),
  }));
}
