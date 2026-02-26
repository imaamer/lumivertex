import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative z-50 min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          LumiVertex
        </h1>
        <p className="mt-4 text-muted-foreground">
          A minimal starting point. Edit this page to build your site.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button type="button">Primary action</Button>
          <Button type="button" variant="secondary">Secondary</Button>
          <Button type="button" variant="ghost">Ghost</Button>
        </div>

        
      </div>
    </div>
  );
}
