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

const labelClass =
  "text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary";

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
  { label: "Email", href: "/services/email-marketing" },
  { label: "Analytics", href: "/services/business-intelligence" },
  { label: "Brand Strategy", href: "/services/branding" },
  { label: "Reputation & PR", href: "/services/reputation" },
];

const socialLinks: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Twitter", href: "#", Icon: Twitter },
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

          {/* Links + contact */}
          <div className="flex flex-col gap-12 lg:col-span-7 lg:gap-14">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
              <nav aria-label="Quick links" className="relative">
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
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Services">
                <h2 className={labelClass}>Services</h2>
                <ul className="mt-5 columns-1 gap-x-6 gap-y-2 sm:columns-2 [&>li]:break-inside-avoid">
                  {serviceLinks.map(({ label, href }) => (
                    <li key={href} className="mb-2">
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact strip — map bleeds to viewport left; contact column unchanged */}
            <div className="min-w-0">
              <h2 className={labelClass}>Studio &amp; contact</h2>
              <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-8">
                <div
                  className="group relative min-w-0 overflow-hidden rounded-none rounded-r-2xl border border-border/60 border-l-0 bg-card/50 shadow-sm ring-1 ring-border/30
                  -ml-4 w-[calc(100%+1rem)]
                  sm:-ml-6 sm:w-[calc(100%+1.5rem)]
                  lg:-ml-8 lg:w-[calc(100%+2rem)]"
                >
                  <div className="relative aspect-16/10 w-full min-h-[220px] sm:aspect-video sm:min-h-0">
                    <iframe
                      title="LumiVertex location on Google Maps"
                      src={googleMapsEmbedUrl}
                      className="absolute inset-0 h-full w-full border-0 transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
                </div>

                <div className="flex min-w-0 flex-col gap-3">
                  <a
                    href={`tel:${SITE_CONTACT.phoneTel}`}
                    className="group flex items-start gap-3 rounded-2xl border border-border/50 bg-muted/25 px-4 py-3.5 transition-[border-color,box-shadow] hover:border-primary/25 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
                        Phone
                      </p>
                      <p className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {SITE_CONTACT.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${SITE_CONTACT.email}`}
                    className="group flex items-start gap-3 rounded-2xl border border-border/50 bg-muted/25 px-4 py-3.5 transition-[border-color,box-shadow] hover:border-primary/25 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
                        Email
                      </p>
                      <p className="break-all text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {SITE_CONTACT.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-muted/25 px-4 py-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
                        Address
                      </p>
                      <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                        {SITE_CONTACT.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter + legal — full-width band */}
        <div className="relative mt-14 border-t border-border/50 pt-12 sm:mt-16 sm:pt-14">
          <div className="absolute left-1/2 top-0 h-px w-[min(720px,90%)] -translate-x-1/2 bg-linear-to-r from-transparent via-primary/25 to-transparent" />

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
            <div className="relative overflow-hidden rounded-3xl border border-dashed border-primary/25 bg-linear-to-br from-muted/50 via-background to-primary/4 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] sm:p-8">
              <div
                className="pointer-events-none absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
                aria-hidden
              />
              <div className="relative max-w-xl">
                <p className={labelClass}>Newsletter</p>
                <p className="mt-3 text-lg font-medium leading-snug tracking-tight text-foreground sm:text-xl">
                  Strategic insight, weekly.
                  <span className="text-muted-foreground"> No noise.</span>
                </p>
                <div className="mt-6">
                  <FooterNewsletter />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-border/60 bg-card/40 px-6 py-7 sm:px-8">
              <div>
                <p className={labelClass}>Legal</p>
                <nav
                  aria-label="Legal links"
                  className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-1 sm:gap-y-2"
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
                  <Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">
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
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                © {new Date().getFullYear()} LumiVertex. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
