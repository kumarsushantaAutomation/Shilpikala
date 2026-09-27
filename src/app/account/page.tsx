import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = buildMetadata({
  title: "Account",
  path: "/account",
});

export default function Page() {
  return (
    <ComingSoon
      title="Accounts are on the way."
      description="Sign in, order history and saved details will live here."
    />
  );
}
