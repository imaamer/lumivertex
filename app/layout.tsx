import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumivertex | AI Technology, Marketing Strategy & Lead Generation",
  description:
    "Lumivertex converges AI technology, data-driven marketing strategy, and intelligent lead generation to architect measurable business growth. Free strategic consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans flex min-h-screen flex-col antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {/* Pages supply their own <main>; this wrapper only fills space so the footer stays at the bottom */}
        <div className="flex min-h-0 w-full flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
