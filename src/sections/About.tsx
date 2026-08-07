export function About() {
  return (
    <section id="about" className="py-28 px-8 sm:px-16 bg-muted/40">
      <div className="w-full space-y-14">
        <p className="text-xs text-muted-foreground font-mono tracking-[0.25em] uppercase">
          About
        </p>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Research Engineer at FKFS, affiliated with the Institute of
              Automotive Engineering, University of Stuttgart.
            </p>
            <p className="text-sm text-muted-foreground">Stuttgart, Germany</p>
          </div>

          <div className="space-y-5 text-[15px] text-foreground/80 leading-relaxed font-light">
            <p>
              My work spans the full pipeline of AI-based perception development
              and validation for automated driving — from sensor data processing
              across camera, radar, and LiDAR to scenario-based testing
              frameworks and safety assessment under real and virtual conditions.
            </p>
            <p>
              I develop simulation and evaluation tools for automated driving
              systems, design large-scale testing workflows, and analyze
              perception system failure modes through data-driven evaluation.
              My doctoral research focused on scene data augmentation and
              robustness analysis of AI-based perception, with publications at
              SAE, the International Stuttgart Symposium, and ATZelektronik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
