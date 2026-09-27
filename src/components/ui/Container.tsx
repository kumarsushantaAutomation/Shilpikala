import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

/**
 * Centers content at a readable max-width with consistent side padding.
 * Used by every section on the site instead of repeating the same
 * width/padding classes everywhere.
 */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </Tag>
  );
}
