import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Categories",
  path: "/categories",
});

export default function Page() {
  return (
    <ComingSoon
      title="Categories are being organized."
      description="A browsable index of every collection will live here."
    />
  );
}
