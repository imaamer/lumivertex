import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { googleMapsEmbedUrl, SITE_CONTACT } from "@/lib/site-contact";

const labelClass = "text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary";

const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Partnership", href: "/partnership" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

const serviceLinks: { label: string; href: string }[] = [
  { label: "AI & Technology", href: "/services/ai" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "SEO", href: "/services/seo" },
  { label: "PPC", href: "/services/ppc" },
  { label: "Social Media", href: "/services/social-media-marketing" },
  { label: "Content", href: "/services/content-marketing" },
  { label: "Web & UX", href: "/services/ui-ux" },
];

const socialLinks: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/lumivertex_bpo/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/share/1C74xPLq5r/", Icon: Facebook },
  { label: "Twitter", href: "https://x.com/LumivertexBPO", Icon: Twitter },
  { label: "YouTube", href: "#", Icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="relative mt-auto w-full shrink-0 border-t border-border/60 bg-background">
      {/* Ambient layers */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(35,124,103,0.09),transparent_55%),radial-gradient(ellipse_60%_40%_at_0%_50%,rgba(72,229,194,0.06),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <div className="container relative mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        {/* Main grid: brand + content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Brand — floating panel */}
          <div className="relative lg:col-span-5">
            <div
              className="pointer-events-none absolute -inset-1 rounded-[2rem] bg-linear-to-br from-primary/40 via-accent/20 to-transparent opacity-60 blur-xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-linear-to-br from-primary via-[#0c6a52] to-[#09503f] p-8 text-primary-foreground shadow-[0_28px_80px_-32px_rgba(11,123,89,0.55)] sm:p-9">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#48e5c2]/15 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/15 to-transparent"
                aria-hidden
              />

              <Link href="/" className="relative mb-5 block w-full max-w-[200px]">
                <Image
                  src="/icons/lumivertex-logo-white.svg"
                  alt="Lumivertex"
                  width={200}
                  height={43}
                  className="h-10 w-auto object-contain object-left"
                  unoptimized
                />
              </Link>

              <p className="relative font-medium leading-snug text-primary-foreground/95">
                Converging ideas into possibilities.
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-primary-foreground/85">
                Trusted by teams in 100+ countries. Have a question? Reach out—we&apos;re here to
                help.
              </p>

              <div className="relative mt-7 flex flex-wrap gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/12 text-primary-foreground ring-1 ring-primary-foreground/15 transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-foreground/20"
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick + Services row 1; Subscribe row 2 (cols 1–2); Contact spans both rows (col 3) */}
          <div className="grid min-w-0 gap-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:col-span-7 lg:gap-x-8">
            <nav
              aria-label="Quick links"
              className="relative min-w-0 sm:col-start-1 sm:row-start-1"
            >
              <div className="absolute -left-3 top-0 bottom-0 w-px bg-linear-to-b from-primary/0 via-primary/35 to-primary/0 sm:-left-4" />
              <h2 className={`${labelClass} pl-5 sm:pl-6`}>Quick links</h2>
              <ul className="mt-5 space-y-2.5 pl-5 sm:pl-6">
                {quickLinks.map(({ label, href }) => (
                  <li key={href + label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="border-b border-transparent pb-px transition-[border-color] group-hover:border-primary/40">
                        {label}
                      </span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Services" className="min-w-0 sm:col-start-2 sm:row-start-1">
              <h2 className={labelClass}>Services</h2>
              <ul className="mt-5 space-y-2 [&>li]:break-inside-avoid">
                {serviceLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Browse all
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </nav>

            {/* Last column: studio & contact — spans row 1–2 so subscribe can sit tight under quick + services */}
            <div className="min-w-0 sm:col-start-3 sm:row-span-2 sm:row-start-1">
              <h2 className={labelClass}>Studio &amp; contact</h2>
              <div className="mt-5 flex flex-col gap-4">
                <a
                  href={`tel:${SITE_CONTACT.phoneTel}`}
                  className="group flex items-center gap-2.5 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="font-medium">{SITE_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="group flex items-center gap-2.5 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="break-all font-medium">{SITE_CONTACT.email}</span>
                </a>

                <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 shadow-sm ring-1 ring-border/30">
                  <div className="relative aspect-4/3 w-full min-h-[140px]">
                    <iframe
                      title="LumiVertex location on Google Maps"
                      src={googleMapsEmbedUrl}
                      className="absolute inset-0 h-full w-full border-0 transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-2xl border border-border/50 bg-muted/25 px-3 py-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <address className="not-italic text-xs leading-relaxed text-muted-foreground">
                    {SITE_CONTACT.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </div>

            <div className="min-w-0 sm:col-span-2 sm:col-start-1 sm:row-start-2">
              <FooterNewsletter />
            </div>
          </div>
        </div>

        {/* Legal — full-width band */}
        <div className="relative mt-14 border-t border-border/50 pt-10 sm:mt-16 sm:pt-12">
          <div className="absolute left-1/2 top-0 h-px w-[min(720px,90%)] -translate-x-1/2 bg-linear-to-r from-transparent via-primary/25 to-transparent" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <nav
              aria-label="Legal links"
              className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-1 sm:gap-y-2"
            >
              <Link
                href="/privacy-policy"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <span className="hidden text-muted-foreground/40 sm:inline" aria-hidden>
                ·
              </span>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
              <span className="hidden text-muted-foreground/40 sm:inline" aria-hidden>
                ·
              </span>
              <Link
                href="/sitemap.xml"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Sitemap
              </Link>
            </nav>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-right">
              © {new Date().getFullYear()} LumiVertex. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
