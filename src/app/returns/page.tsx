import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Returns",
  path: "/returns",
});

export default function Page() {
  return (
    <ComingSoon
      title="Our returns policy is coming soon."
      description="How to return or exchange a piece, and what to expect."
    />
  );
}
