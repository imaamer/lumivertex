"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Projects", href: "/projects" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 bg-transparent [&_span]:bg-transparent!"
        >
          <Image
            src="/lumivertex-logo.png"
            alt="Lumivertex — Converging Ideas into Possibilities"
            width={187}
            height={40}
            className="h-10 w-auto max-h-10 object-contain object-left bg-transparent"
            priority
            unoptimized
          />
        </Link>
        <nav className="flex items-center gap-8" aria-label="Main">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="default"
          size="default"
          className="rounded-full gap-2 px-6 py-5 text-primary-foreground shadow-sm hover:bg-primary/90"
          asChild
        >
          <Link href="/contact">
            Get Started <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </header>
  );
}
