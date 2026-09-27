import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
});

export default function Page() {
  return (
    <ComingSoon
      title="Our story is being written."
      description="Where ShilpiKala comes from, and where it's headed."
    />
  );
}
