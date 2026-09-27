import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Cart",
  path: "/cart",
});

export default function Page() {
  return (
    <ComingSoon
      title="Your cart will live here."
      description="Add-to-cart and checkout flows arrive once the store connects to WooCommerce."
    />
  );
}
