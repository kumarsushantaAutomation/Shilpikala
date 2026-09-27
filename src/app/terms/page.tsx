import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
});

export default function Page() {
  return (
    <ComingSoon
      title="Our terms are coming soon."
      description="The terms that govern using the ShilpiKala site and store."
    />
  );
}
