import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return buildMetadata({ title: "Product", path: `/product/${slug}` });
}

export default async function ProductPage({ params }: PageProps) {
  await params;

  return (
    <ComingSoon
      title="This product page is being built."
      description="Full product details, pricing and gallery images will appear here once the store connects to WooCommerce."
    />
  );
}
