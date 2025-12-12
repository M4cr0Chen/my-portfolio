/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import "lenis/dist/lenis.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zhenghong Chen - Portfolio",
  description: "Personal portfolio of Zhenghong Chen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
