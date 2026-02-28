import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumivertex | AI Technology, Marketing Strategy & Lead Generation",
  description:
    "Lumivertex converges AI technology, data-driven marketing strategy, and intelligent lead generation to architect measurable business growth. Free strategic consultation.",
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans flex min-h-screen flex-col antialiased`}
        suppressHydrationWarning
      >
        <ComingSoon />
      </body>
    </html>
  );
}
