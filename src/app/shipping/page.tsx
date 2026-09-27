import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Shipping",
  path: "/shipping",
});

export default function Page() {
  return (
    <ComingSoon
      title="Shipping details are coming soon."
      description="Timelines, packaging and delivery information for every order."
    />
  );
}
