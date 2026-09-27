import { Container } from "@/components/ui/Container";

export function BrandStatement() {
  return (
    <section className="border-t border-earth-brown/15 bg-terracotta-deep/[0.04] py-20 sm:py-28">
      <Container className="max-w-3xl text-center">
        <p className="font-display text-2xl leading-relaxed text-charcoal sm:text-3xl">
          ShilpiKala began as an attempt to keep a set of hands-on Indian
          crafts — mandala line work, Lipan mirror relief — in daily use, not
          behind glass. Every piece is still made by hand, one at a time,
          before it reaches your wall.
        </p>
      </Container>
    </section>
  );
}
