export function Experience() {
  const items = [
    {
      period: "2018 — Present",
      title: "Research Engineer",
      subtitle: "AI & Automated Driving Systems",
      org: "FKFS, Stuttgart",
      desc: "Developing AI-based perception and validation methods using camera, radar, and LiDAR. Designed scenario-based testing frameworks and large-scale evaluation workflows.",
    },
    {
      period: "2017 — 2018",
      title: "Master Thesis",
      subtitle: "Motion Control",
      org: "Daimler AG, Sindelfingen",
      desc: "Commissioned a Hardware-in-the-Loop steering test bench for redundant steering systems. Real-time integration using dSPACE and Vector CANoe.",
    },
    {
      period: "2017",
      title: "Internship",
      subtitle: "Gasoline Systems",
      org: "Robert Bosch GmbH",
      desc: "Elastohydrodynamic lubricant film calculation. HiL laboratory measurements and experimental data analysis.",
    },
  ];

  const edu = [
    {
      period: "2022 — 2025",
      title: "Dr.-Ing.",
      subtitle: "Automotive Engineering",
      org: "University of Stuttgart",
      desc: "Dissertation on scene data augmentation for AI-driven perception. Robustness analysis and reinforcement learning for scenario generation.",
    },
    {
      period: "2015 — 2018",
      title: "M.Sc.",
      subtitle: "Mechanical Engineering",
      org: "Karlsruhe Institute of Technology (KIT)",
      desc: "Mechatronics and Automotive Engineering. Master thesis on steering test bench development at Daimler AG.",
    },
    {
      period: "2010 — 2014",
      title: "B.Eng.",
      subtitle: "Vehicle Engineering",
      org: "Beijing Institute of Technology",
      desc: "Energy and Engine Technology. Exchange semester at the University of Stuttgart.",
    },
  ];

  return (
    <section id="experience" className="py-28 px-8 sm:px-16">
      <div className="w-full space-y-20">
        <div className="space-y-12">
          <p className="text-xs text-muted-foreground font-mono tracking-[0.25em] uppercase">
            Experience
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/60 bg-card p-6 space-y-3 hover:border-primary/30 transition-colors"
              >
                <span className="text-xs text-muted-foreground font-mono">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  {item.org}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <p className="text-xs text-muted-foreground font-mono tracking-[0.25em] uppercase">
            Education
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {edu.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/60 bg-card p-6 space-y-3 hover:border-primary/30 transition-colors"
              >
                <span className="text-xs text-muted-foreground font-mono">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  {item.org}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
