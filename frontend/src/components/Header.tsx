"use client";

import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import dark from "@/assets/icons/dark_theme.svg";
import light from "@/assets/icons/light_theme.svg";
import Menu from "./Menu";

const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header className="border border-transparent dark:border-b-border-gray fixed z-20 dark:bg-primary-background w-full h-12 bg-light-bg">
      <div className="flex flex-row px-[5%] justify-between h-full">
        <div className="content-center">
          <Link
            href="/"
            className="font-primary text-2xl sm:text-4xl font-black italic text-brand-accent"
          >
            Fire
            <span className="dark:text-primary-text text-primary-text">
              Wheel
            </span>
          </Link>
        </div>
        <div className="flex flex-row gap-2 ">
          <Menu />
          <button
            className="block hover:bg-border-gray/20 transition delay-100 duration-200 easy-in cursor-pointer px-4"
            onClick={toggleTheme}
          >
            <Image
              src={dark}
              className="min-h-8 min-w-8 dark:hidden block"
              alt="dark theme img"
              width={32}
              height={32}
            />
            <Image
              src={light}
              className="min-h-8 min-w-8 hidden dark:block"
              alt="dark theme img"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
