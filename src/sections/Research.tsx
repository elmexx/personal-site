import { Icons } from "@/components/Icons";

export function Research() {
  const areas = [
    {
      num: "01",
      title: "AI-Based Virtual Testing",
      description:
        "Developing methods to validate safety-critical driving functions using AI-driven virtual environments. Combining deep learning perception models with scenario-based simulation.",
      icon: <Icons.Cpu />,
    },
    {
      num: "02",
      title: "Corner Case Generation &amp; SOTIF",
      description:
        "Addressing the Safety of the Intended Functionality by systematically generating corner cases for CNN-based autonomous driving functions.",
      icon: <Icons.Shield />,
    },
    {
      num: "03",
      title: "ODD &amp; Scenario-Based Testing",
      description:
        "Developing conceptual frameworks for Operational Design Domain-based scenario generation to evaluate obstacle detection in automated shuttle buses.",
      icon: <Icons.Map />,
    },
  ];

  return (
    <section id="research" className="py-28 px-8 sm:px-16 bg-muted/40">
      <div className="w-full space-y-12">
        <p className="text-xs text-muted-foreground font-mono tracking-[0.25em] uppercase">
          Research
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.num}
              className="rounded-xl border border-border/60 bg-card p-6 space-y-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {area.icon}
                </div>
                <span className="text-4xl font-light text-primary/15 tabular-nums">
                  {area.num}
                </span>
              </div>
              <h3 className="text-base font-semibold leading-snug">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
