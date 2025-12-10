import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Zhenghong Chen",
  description: "Software Engineer - CS Student at University of Waterloo",
  keywords: ["software engineer", "developer", "waterloo", "portfolio"],
  authors: [{ name: "Zhenghong Chen" }],
  openGraph: {
    title: "Zhenghong Chen",
    description: "Software Engineer - CS Student at University of Waterloo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
