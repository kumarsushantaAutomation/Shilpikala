import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

const staticPaths = [
  "/",
  "/shop",
  "/about",
  "/contact",
  "/custom-art",
  "/blog",
  "/faq",
  "/shipping",
  "/returns",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
