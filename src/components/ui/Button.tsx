import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonOwnProps = {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = ButtonOwnProps &
  (
    | ({ href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "href" | "className"
      >)
    | ({ href?: undefined } & Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "className"
      >)
  );

const variantStyles: Record<NonNullable<ButtonOwnProps["variant"]>, string> = {
  primary:
    "bg-terracotta text-ivory hover:bg-terracotta-deep border border-transparent",
  secondary:
    "bg-transparent text-earth-brown border border-earth-brown/30 hover:border-terracotta hover:text-terracotta",
  ghost: "bg-transparent text-earth-brown hover:text-terracotta border border-transparent",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Renders a Link when `href` is provided, otherwise a native button.
 * Keeps a single visual component for every call-to-action on the site.
 */
export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
