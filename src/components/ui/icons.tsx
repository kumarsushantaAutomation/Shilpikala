type IconProps = {
  className?: string;
};

const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </svg>
  );
}

export function AccountIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.6-3.6 4.6-5.5 7.5-5.5s5.9 1.9 7.5 5.5" />
    </svg>
  );
}

export function WishlistIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M12 19.5s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 6.7 4.3 4.3 0 0 1 19.5 9.5c0 5.4-7.5 10-7.5 10Z" />
    </svg>
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M4.5 7h15l-1.3 9.2a2 2 0 0 1-2 1.8H7.8a2 2 0 0 1-2-1.8L4.5 7Z" />
      <path d="M8.5 7V5.8a3.5 3.5 0 0 1 7 0V7" />
    </svg>
  );
}
