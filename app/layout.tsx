/**
 * app/layout.tsx  — Root Layout
 * --------------------------------
 * Applies global fonts, metadata, and wraps every page.
 * Inter is used as the primary sans-serif (system-feel, highly legible).
 */

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

// Subset latin to keep the font bundle small
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ushna Yaqoob",
  description:
      "Portfolio of a full-stack developer specialising in Next.js, React, Node.js, and scalable web applications.",
};

// Runs before paint to apply the saved theme and avoid a flash of the wrong theme.
const THEME_INIT_SCRIPT = `
  try {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light");
    }
  } catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={inter.variable} suppressHydrationWarning>
      {/*
        The dark background colour is set in globals.css on <body>.
        We still apply the Inter variable here so Tailwind's font-sans
        picks it up automatically.
      */}
      <body className={inter.className} suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive">
        {THEME_INIT_SCRIPT}
      </Script>
      {children}
      </body>
      </html>
  );
}
