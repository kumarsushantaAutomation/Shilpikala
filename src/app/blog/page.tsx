import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  path: "/blog",
});

export default function Page() {
  return (
    <ComingSoon
      title="Stories from the studio are coming soon."
      description="Notes on process, tradition and the artists behind each piece."
    />
  );
}
