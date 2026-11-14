"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const endpoint = usePathname();
  return (
    <main className="pt-[20%] h-dvh bg-light-simp-bg dark:bg-primary-background px-[10%] flex flex-col gap-3">
      <h1 className="font-primary text-4xl font-black dark:text-primary-text text-light-accent uppercase leading-none text-center transition delay-100 duration-200 easy-in">
        not found | error 404
      </h1>
      <p className="font-secondary dark:text-primary-text text-light-accent tracking-tighter font-semibold text-center lg:text-lg text-sm transition delay-100 duration-200 easy-in">
        The page with endpoint {endpoint} not found
      </p>
      <Link href="/" className="flex justify-center font-primary">
        <button className="min-w-12 px-6 py-1 rounded-lg dark:bg-brand-accent disabled:dark:bg-brand-accent-dark dark:hover:bg-brand-accent-dark bg-light-simp-accent disabled:bg-light-accent hover:bg-light-accent hover:scale-105 transition delay-100 duration-200 easy-in disabled:cursor-no-drop cursor-pointer font-secondary text-second-text text-sm w-max text-primary-text uppercase tracking-tighter font-semibold text-normal">
          Home
        </button>
      </Link>
    </main>
  );
}
