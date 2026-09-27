"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/config/site";

type MobileNavProps = {
  links: NavLink[];
};

/**
 * Client Component: the header itself renders this without passing any
 * callback props in — all interaction (open/close state) lives here.
 */
export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-charcoal"
      >
        <span className="sr-only">
          {open ? "Close menu" : "Open menu"}
        </span>
        <span
          className={`h-px w-6 bg-current transition-transform ${
            open ? "translate-y-[3.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-6 bg-current transition-opacity ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-px w-6 bg-current transition-transform ${
            open ? "-translate-y-[3.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-t border-earth-brown/15 bg-ivory px-6 py-6"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-earth-brown transition-colors hover:text-terracotta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
