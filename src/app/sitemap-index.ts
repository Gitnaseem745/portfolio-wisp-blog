import { siteConfig } from "@/config/siteConfig";
import type { MetadataRoute } from "next";

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();
  
  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/blog/sitemap.xml`,
      lastModified: currentDate,
    },
  ];
}
