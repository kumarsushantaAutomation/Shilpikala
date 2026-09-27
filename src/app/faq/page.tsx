import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  path: "/faq",
});

export default function Page() {
  return (
    <ComingSoon
      title="Answers are on their way."
      description="Common questions about ordering, shipping and custom work."
    />
  );
}
