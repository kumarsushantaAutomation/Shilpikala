import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Checkout",
  path: "/checkout",
});

export default function Page() {
  return (
    <ComingSoon
      title="Checkout is being prepared."
      description="A secure, guided checkout will be built once payments are wired up."
    />
  );
}
