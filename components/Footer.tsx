import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Twitter, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  About: ["Company Overview", "Careers", "Press & Media", "Testimonials"],
  "Support & Contact": ["Contact us", "Help Center", "Feedback", "Community Forum"],
  Newsletter: [],
};

const socialIcons = [
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Twitter, href: "#", label: "X" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Mail, href: "mailto:hello@lumivertex.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16 flex flex-row items-center justify-center">
      <div className="container flex flex-col items-center justify-center mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand column - dark teal block matching design */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-8 text-center">
            <Link href="/" className="mb-4 block w-full max-w-[200px]">
              <Image
                src="/icons/lumivertex-logo-white.svg"
                alt="Lumivertex"
                width={200}
                height={43}
                className="h-10 w-auto object-contain object-center"
                unoptimized
              />
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/95">
              Trusted in more than 10k+ clients and over 100 countries. Have any query? Contact us —
              we are here to help you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-foreground transition-opacity hover:opacity-90"
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks)
            .slice(0, 2)
            .map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 font-heading text-md font-semibold text-foreground">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-md text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Newsletter */}
          <div className="flex flex-col">
            <h4 className="mb-4 font-heading text-base font-bold text-foreground">Newsletter</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-4 w-full min-w-0 rounded-2xl border-0 bg-muted px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              variant="default"
              className="h-12 w-40 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="/blog">
                Browse All <ArrowRight className="ml-1 inline-block h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          Copyright©2025 All rights reserved by Lumivertex AI Technologies
        </div>
      </div>
    </footer>
  );
};

export default Footer;
