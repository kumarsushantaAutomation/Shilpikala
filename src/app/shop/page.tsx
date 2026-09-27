import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Shop",
  path: "/shop",
});

export default function Page() {
  return (
    <ComingSoon
      title="The full shop is on its way."
      description="Browsing, filtering and the complete catalog arrive in a later phase of the build."
    />
  );
}
