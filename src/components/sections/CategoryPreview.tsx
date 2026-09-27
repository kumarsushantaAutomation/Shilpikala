import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categoryPreviews } from "@/data/category-previews";

const accents = ["bg-terracotta", "bg-gold", "bg-olive", "bg-earth-brown"];

export function CategoryPreview() {
  return (
    <section className="border-t border-earth-brown/15 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Four ways into the collection"
          description="Every piece begins with a tradition — here's where each one leads."
        />

        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {categoryPreviews.map((category, index) => (
            <li
              key={category.slug}
              className="border-t border-earth-brown/15 pt-6"
            >
              <Link href={`/categories/${category.slug}`} className="group block">
                <span
                  className={`block h-2 w-2 rounded-full ${accents[index % accents.length]}`}
                />
                <h3 className="mt-4 text-xl text-charcoal transition-colors group-hover:text-terracotta">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-earth-brown/75">
                  {category.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
