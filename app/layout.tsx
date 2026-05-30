/**
 * app/layout.tsx  — Root Layout
 * --------------------------------
 * Applies global fonts, metadata, and wraps every page.
 * Inter is used as the primary sans-serif (system-feel, highly legible).
 */

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Subset latin to keep the font bundle small
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DevFolio — Full-Stack Developer",
  description:
      "Portfolio of a full-stack developer specialising in Next.js, React, Node.js, and scalable web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={inter.variable}>
      {/*
        The dark background colour is set in globals.css on <body>.
        We still apply the Inter variable here so Tailwind's font-sans
        picks it up automatically.
      */}
      <body className={inter.className}>{children}</body>
      </html>
  );
}
