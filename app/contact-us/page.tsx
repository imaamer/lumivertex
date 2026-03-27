import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONTACT, googleMapsEmbedUrl, googleMapsOpenUrl } from "@/lib/site-contact";

const CONTACT = SITE_CONTACT;

export const metadata: Metadata = {
  title: "Contact LumiVertex | Start a Strategic Conversation",
  description:
    "Get in touch with LumiVertex for a free strategic consultation. Phone, email, WhatsApp, or schedule a conversation about your business growth.",
};

export default function ContactUsPage() {
  return (
    <main className="bg-background">
      {/* Hero — image first; title + paragraph centered with image width */}
      <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl sm:aspect-21/9">
              <Image
                src="/images/contact-us/hero.jpg"
                alt="Start a conversation with LumiVertex"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-8 w-full max-w-5xl sm:mt-10">
            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem]">
              The best strategies begin with the simplest question:{" "}
              <span className="text-[#0b7b59]">Where are you now?</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Reach out without obligation. We&apos;ll listen carefully, ask the right questions,
              and if there&apos;s a genuine fit, show you the strategic territory we see. No pitch.
              No pressure. Just clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Form + aside */}
      <section className="border-t border-border/40 bg-muted/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:items-start">
            <div className="rounded-2xl border border-border/80 bg-background p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a bit about your situation—we&apos;ll follow up within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border/80 bg-background p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Direct contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">Phone</p>
                      {CONTACT.phoneTel ? (
                        <a
                          href={`tel:${CONTACT.phoneTel}`}
                          className="mt-0.5 text-base font-medium text-foreground hover:text-primary"
                        >
                          {CONTACT.phoneDisplay}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-base text-muted-foreground">
                          {CONTACT.phoneDisplay}
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="mt-0.5 text-base font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MessageCircle className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">
                        WhatsApp
                      </p>
                      {CONTACT.whatsappHref ? (
                        <a
                          href={CONTACT.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 text-base font-medium text-foreground hover:text-primary"
                        >
                          {CONTACT.whatsappDisplay}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-base text-muted-foreground">
                          {CONTACT.whatsappDisplay}
                        </p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/80">
                <div className="flex gap-3 p-5">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">Address</p>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-muted-foreground">
                      {CONTACT.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <Link
                      href={googleMapsOpenUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Open in Google Maps
                    </Link>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Global team. Remote-first. Available across time zones.
                    </p>
                  </div>
                </div>
                <div className="relative aspect-video w-full bg-muted">
                  <iframe
                    title="LumiVertex office location on Google Maps"
                    src={googleMapsEmbedUrl}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-primary px-5 py-4 text-primary-foreground">
                <p className="text-sm font-semibold leading-snug">
                  We respond to every inquiry within 24 hours. WhatsApp reaches us fastest.
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                Prefer email?{" "}
                <Link
                  href={`mailto:${CONTACT.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {CONTACT.email}
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
