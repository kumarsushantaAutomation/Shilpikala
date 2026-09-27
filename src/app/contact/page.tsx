import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
});

export default function Page() {
  return (
    <ComingSoon
      title="Get in touch."
      description="A contact form and studio details will live here."
    />
  );
}
