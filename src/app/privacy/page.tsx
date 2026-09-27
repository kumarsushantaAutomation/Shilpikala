import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

export default function Page() {
  return (
    <ComingSoon
      title="Our privacy policy is coming soon."
      description="How ShilpiKala collects, uses and protects your information."
    />
  );
}
