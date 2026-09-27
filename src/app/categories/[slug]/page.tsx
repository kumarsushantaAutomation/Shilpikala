import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = titleFromSlug(slug);
  return buildMetadata({ title, path: `/categories/${slug}` });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  return (
    <ComingSoon
      title={`${title} is being catalogued.`}
      description="Products in this collection will appear here once the store connects to WooCommerce."
    />
  );
}
