"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const budgetOptions = [
  { value: "", label: "Prefer not to say" },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-50k", label: "$10,000 – $50,000" },
  { value: "50k-150k", label: "$50,000 – $150,000" },
  { value: "150k-plus", label: "$150,000+" },
] as const;

const preferredOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
      preferredContact: String(fd.get("preferredContact") ?? "email"),
      budgetRange: String(fd.get("budgetRange") ?? ""),
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
        role="status"
      >
        <p className="text-lg font-semibold text-foreground">Thank you for reaching out.</p>
        <p className="mt-2 text-base text-muted-foreground">
          We&apos;ve received your message and will respond within 24 hours. WhatsApp reaches us
          fastest if you need to follow up sooner.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground outline-none ring-primary/30 transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-primary focus:ring-4"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground outline-none ring-primary/30 transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-primary focus:ring-4"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">
            Phone <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground outline-none ring-primary/30 transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-primary focus:ring-4"
            placeholder="+1 (___) ___-____"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-company" className="text-sm font-medium text-foreground">
            Company name <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground outline-none ring-primary/30 transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-primary focus:ring-4"
            placeholder="Company or organization"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          How can we help? <span className="text-destructive">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none ring-primary/30 transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-primary focus:ring-4"
          placeholder="Tell us about your goals, timeline, or questions."
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-pref" className="text-sm font-medium text-foreground">
            Preferred contact method <span className="text-destructive">*</span>
          </label>
          <select
            id="contact-pref"
            name="preferredContact"
            required
            defaultValue="email"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground outline-none ring-primary/30 transition-[border-color,box-shadow] focus:border-primary focus:ring-4"
          >
            {preferredOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-budget" className="text-sm font-medium text-foreground">
            Budget range <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <select
            id="contact-budget"
            name="budgetRange"
            defaultValue=""
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground outline-none ring-primary/30 transition-[border-color,box-shadow] focus:border-primary focus:ring-4"
          >
            {budgetOptions.map((o) => (
              <option key={o.value || "none"} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong. Please try again or email{" "}
          <a
            href="mailto:hello@lumivertex.com"
            className="font-medium underline underline-offset-2"
          >
            hello@lumivertex.com
          </a>
          .
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full rounded-full px-8 sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
