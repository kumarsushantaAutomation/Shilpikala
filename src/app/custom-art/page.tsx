import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Custom Art",
  path: "/custom-art",
});

export default function Page() {
  return (
    <ComingSoon
      title="Custom commissions are coming soon."
      description="Tell us about the space, palette and story you want on your wall."
    />
  );
}
