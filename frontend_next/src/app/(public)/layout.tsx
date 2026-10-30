import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="dark:bg-primary-background bg-light-bg min-h-screen ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
