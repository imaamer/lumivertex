"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 bg-transparent [&_span]:bg-transparent!"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/lumivertex-logo.png"
            alt="Lumivertex — Converging Ideas into Possibilities"
            width={187}
            height={40}
            className="h-8 w-auto max-h-10 object-contain object-left bg-transparent sm:h-10"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
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

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-out md:hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="border-t border-border/40 bg-background px-4 pb-6 pt-4" aria-label="Main">
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 px-4">
            <Button
              variant="default"
              size="default"
              className="w-full rounded-full gap-2 py-5 text-primary-foreground shadow-sm hover:bg-primary/90"
              asChild
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
