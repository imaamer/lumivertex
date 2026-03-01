const industries = ["FORBES", "TECHCRUNCH", "WIRED", "STERN", "VERGE"];

const IndustrySection = () => {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          Trusted Across Industries
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {industries.map((name) => (
            <span
              key={name}
              className="text-base font-bold uppercase tracking-wide text-muted-foreground md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
