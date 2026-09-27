import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-32 text-center">
      <p className="font-display text-lg text-terracotta">404</p>
      <h1 className="mt-4 text-3xl text-charcoal sm:text-4xl">
        This page hasn&apos;t been made yet.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-earth-brown/80">
        The page you&apos;re looking for doesn&apos;t exist, or the link may be
        out of date.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Container>
  );
}
