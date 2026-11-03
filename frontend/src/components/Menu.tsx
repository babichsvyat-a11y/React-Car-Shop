"use client";

import { PAGES } from "@/config/pages-class.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_LINKS = [
  { label: "catalog", href: PAGES.CATALOG },
  { label: "cart", href: PAGES.CART },
  { label: "profile", href: PAGES.PROFILE },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex">
      <ul className="flex flex-row gap-2 dark:text-primary-text text-light-accent font-semibold text-sm font-secondary">
        {MENU_LINKS.map((link) => (
          <li className="flex" key={link.label}>
            <Link
              href={link.href}
              className={
                pathname !== link.href
                  ? "flex items-center w-full h-full px-4 uppercase hover:bg-border-gray/20 hover:text-brand-accent-dark transition delay-100 duration-200 ease-in cursor-pointer"
                  : "flex items-center w-full h-full px-4 uppercase bg-border-gray/20 text-brand-accent-dark shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.03)]"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
