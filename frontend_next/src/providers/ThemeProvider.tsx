"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeType } from "@/providers/ThemeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={isMounted ? "opacity-100" : "opacity-0"}>{children}</div>
    </ThemeContext.Provider>
  );
}
