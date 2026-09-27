import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Wishlist",
  path: "/wishlist",
});

export default function Page() {
  return (
    <ComingSoon
      title="Your wishlist will live here."
      description="Save pieces you love and come back to them any time."
    />
  );
}
