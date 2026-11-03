import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
const rajdhaniSans = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-primary",
  display: "swap",
});

const interSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - FireWheels",
    default: "",
  },
  description: "The pet project about premium car shop!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${rajdhaniSans.variable} ${interSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
