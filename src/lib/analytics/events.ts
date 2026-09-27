/**
 * Analytics architecture placeholder. No analytics provider is wired up
 * yet — this exists so event names stay consistent once one is added.
 */

export type AnalyticsEvent =
  | { name: "view_item"; productId: number }
  | { name: "add_to_cart"; productId: number; quantity: number }
  | { name: "begin_checkout" };

export function track(event: AnalyticsEvent): void {
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event);
  }
}
