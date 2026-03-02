"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const aboutMenuItems: { title: string; href: string; description: string }[] = [
  {
    title: "Our Story",
    href: "/about/our-story",
    description: "The principles that shaped how we think.",
  },
  {
    title: "Our Team",
    href: "/about/our-team",
    description: "The minds behind the methodology.",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 pt-10 pb-10 sm:px-6 lg:px-8">
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

        {/* Desktop nav - shadcn NavigationMenu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-1 lg:gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:bg-[#EAEFE9]! hover:text-foreground!"
                )}
              >
                <Link href="/" className="text-sm font-medium text-foreground">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About dropdown */}
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:bg-[#EAEFE9]! hover:text-foreground! data-[state=open]:bg-[#EAEFE9]! data-[state=open]:text-foreground! data-[state=open]:hover:bg-[#EAEFE9]!">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-2 p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="font-medium text-foreground">About LumiVertex</div>
                        <div className="text-sm text-muted-foreground">
                          Our philosophy and capabilities
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {aboutMenuItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="font-medium text-foreground">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:bg-[#EAEFE9]! hover:text-foreground!"
                )}
              >
                <Link href="/services" className="text-sm font-medium text-foreground">
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:bg-[#EAEFE9]! hover:text-foreground!"
                )}
              >
                <Link href="/industries" className="text-sm font-medium text-foreground">
                  Industries
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:bg-[#EAEFE9]! hover:text-foreground!"
                )}
              >
                <Link href="/case-studies" className="text-sm font-medium text-foreground">
                  Case Studies
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:bg-[#EAEFE9]! hover:text-foreground!"
                )}
              >
                <Link href="/contact" className="text-sm font-medium text-foreground">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
            <li>
              <Link
                href="/"
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <ul className="mt-1 mb-2 space-y-1 pl-6">
                <li>
                  <Link
                    href="/about/our-story"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/our-team"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/services"
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
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
