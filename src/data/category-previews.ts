export type CategoryPreview = {
  name: string;
  slug: string;
  description: string;
};

/**
 * Static placeholder content for the homepage category preview.
 * Once WooCommerce is connected, this will be replaced by categories
 * fetched from the store (see `src/types/woocommerce.ts`).
 */
export const categoryPreviews: CategoryPreview[] = [
  {
    name: "Mandala Art",
    slug: "mandala-art",
    description: "Symmetry and circular geometry, drawn one fine line at a time.",
  },
  {
    name: "Lipan Art",
    slug: "lipan-art",
    description: "Terracotta relief and mirror work rooted in traditional craft.",
  },
  {
    name: "Handmade Art",
    slug: "handmade-art",
    description: "Original pieces shaped entirely by hand, never mass-produced.",
  },
  {
    name: "Custom Art",
    slug: "custom-art",
    description: "Commission a piece made to your space, palette and story.",
  },
];
