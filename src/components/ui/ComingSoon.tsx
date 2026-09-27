import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type ComingSoonProps = {
  title: string;
  description: string;
};

/**
 * Day 1 placeholder for routes referenced by the header and footer
 * navigation. Keeps every nav link resolving to a real, on-brand page
 * instead of a 404 while each section is built out.
 */
export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <Container className="flex flex-col items-center py-28 text-center sm:py-36">
      <p className="font-display text-lg text-terracotta">Coming soon</p>
      <h1 className="mt-4 max-w-xl text-3xl text-charcoal sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-earth-brown/80">
        {description}
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Container>
  );
}
