import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
};

/**
 * Builds page-level metadata that inherits site-wide OG/Twitter defaults
 * from the root layout, while setting a correct canonical URL per page.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: PageMetadataInput): Metadata {
  return {
    title,
    description: description ?? siteConfig.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description: description ?? siteConfig.description,
      url: path,
    },
  };
}
