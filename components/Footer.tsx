import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  About: ["Company Profile", "Enterprise", "Press & Media", "Careers", "Stakeholders"],
  "Support & Contact": [
    "Contact us",
    "Help Center",
    "Knowledge Base",
    "Customer Portal",
    "Community Forum",
  ],
  Newsletter: [],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16 flex flex-row items-center justify-center">
      <div className="container flex flex-col items-center justify-center mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="font-heading text-sm font-bold text-primary-foreground">V</span>
              </div>
              <span className="font-heading text-lg font-bold text-foreground">Lumivertex</span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Explore a new Vision. Navigate your business with the right data. Connect To The Right
              Data.
            </p>
            <div className="flex gap-3">
              {["X", "Li", "Ig", "Fb"].map((s) => (
                <div
                  key={s}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks)
            .slice(0, 2)
            .map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 font-heading text-sm font-semibold text-foreground">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-foreground">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="secondary" size="sm" className="rounded-full">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          Copyright©2025 All rights reserved by Bold Pearl
        </div>
      </div>
    </footer>
  );
};

export default Footer;
