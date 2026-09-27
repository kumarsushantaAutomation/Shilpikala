import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Track Order",
  path: "/track-order",
});

export default function Page() {
  return (
    <ComingSoon
      title="Order tracking is coming soon."
      description="Follow your piece from studio to doorstep."
    />
  );
}
