"use client";

import { PAGES } from "@/config/pages-class.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            retry: 1,
          },
        },
      }),
  );

  const pathname = usePathname();

  const ADMIN_LINKS = [
    { label: "Users", href: PAGES.USERS },
    { label: "Products", href: PAGES.PRODUCTS },
    { label: "Post", href: PAGES.POST },
    { label: "Payments", href: PAGES.PAYMENTS },
  ];

  return (
    <div className="bg-primary-background">
      <QueryClientProvider client={queryClient}>
        <header className="border border-b-border-gray fixed z-20 bg-primary-background w-full h-10 ">
          <div className="flex flex-row px-[5%] justify-between h-full">
            <div className="content-center">
              <Link
                href="/"
                className="font-primary text-base sm:text-xl font-black italic text-brand-accent"
              >
                Fire
                <span className="text-primary-text">Wheel</span>
              </Link>
            </div>
            <div className="flex flex-row gap-2 ">
              <nav className="flex">
                <ul className="flex flex-row gap-2 text-primary-text font-semibold text-sm font-secondary">
                  {ADMIN_LINKS.map((link) => (
                    <li className="flex" key={link.label}>
                      <Link
                        href={link.href}
                        className={
                          pathname !== link.href
                            ? "flex items-center w-full h-full px-4 hover:bg-border-gray/20 hover:text-brand-accent-dark transition delay-100 duration-200 ease-in cursor-pointer"
                            : "flex items-center w-full h-full px-4 bg-border-gray/20 text-brand-accent-dark shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.03)]"
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
      </QueryClientProvider>
      <footer className="text-primary-text font-medium text-sm font-secondary border-t-brand-accent  border-t-4 transition delay-100 duration-200 easy-in">
        <div className="flex flex-row justify-between px-[10%] py-10">
          <div className="flex flex-col gap-2">
            <div className="">
              <Link
                className="font-primary text-base sm:text-xl font-black italic text-brand-accent"
                href="/"
              >
                Fire<span className="text-primary-text">Wheel</span>
              </Link>
            </div>
            <p className="italic  font-light text-secondary-text transition delay-100 duration-200 easy-in">
              "Code is like DNA, but spun from our thoughts, desires and dreams"
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <nav className="">
              <ul className="flex flex-row gap-2 text-sm">
                <li className="">
                  <Link className="" href="https://github.com/babichsvyat-a11y">
                    <button
                      className="hover:text-light-accent/50 dark:hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                      type="button"
                    >
                      GitHub
                    </button>
                  </Link>
                </li>
                <li className="">
                  <Link
                    className=""
                    href="https://www.linkedin.com/in/svyatoslav-babych-72a3a83a0/"
                  >
                    <button
                      className="hover:text-light-accent/50 dark:hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                      type="button"
                    >
                      LinkedIn
                    </button>
                  </Link>
                </li>
                <li className="">
                  <Link
                    className=""
                    href="https://www.instagram.com/da.baby4_/"
                  >
                    <button
                      className="hover:text-light-accent/50 dark:hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                      type="button"
                    >
                      Instagram
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>

            <p className="text-secondary-text  text-sm transition delay-100 duration-200 easy-in">
              &copy; 2026 RunDNA. All rights reserved. Private Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
