const outcomes = [
  {
    metric: "312%",
    description: "Avg. increase in operational efficiency within 6 months.",
    bars: [1, 2, 3, 4], // progressive: 4th filled
    progressive: true,
  },
  {
    metric: "14x",
    description: "ROI on custom automated lead acquisition engines.",
    bars: [1, 2, 3, 4],
    progressive: true,
  },
  {
    metric: "0%",
    description: "Technical debt on LumiVertex deployed architectures.",
    bars: [1, 2, 3, 4],
    progressive: false, // all filled, equal length
  },
];

const MeasuredOutcomesSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-heading text-2xl font-medium tracking-tight text-foreground md:text-6xl">
          Measured Outcomes
        </h2>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {outcomes.map((item) => (
            <div key={item.metric} className="flex flex-col gap-4 rounded-lg p-4">
              <span className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {item.metric}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.description}
              </p>
              <div className="mt-2 flex h-8 items-end gap-1.5">
                {item.bars.map((_, i) => {
                  const isFilled = item.progressive ? i === item.bars.length - 1 : true;
                  const flexRatio = item.progressive ? i + 1 : 1;
                  const heightPercent = item.progressive ? ((i + 1) / item.bars.length) * 100 : 100;
                  return (
                    <div
                      key={i}
                      className="min-w-[8px] rounded-md"
                      style={{
                        flex: flexRatio,
                        height: item.metric === "0%" ? "25%" : `${heightPercent}%`,
                        backgroundColor: isFilled ? "var(--primary)" : "var(--muted-foreground)",
                        opacity: isFilled ? 1 : 0.35,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeasuredOutcomesSection;
