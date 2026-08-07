export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-8 sm:px-16 pt-24">
      <div className="w-full space-y-10">
        <p className="text-xs text-muted-foreground font-mono tracking-[0.2em] uppercase">
          Automated Driving · AI Systems · Validation
        </p>

        <h1 className="text-6xl sm:text-8xl font-light tracking-tight leading-[0.95] max-w-3xl">
          Dr.-Ing.
          <br />
          <span className="text-primary">Kun Gao</span>
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">
              ADAS & AI Systems Engineer
            </p>
            <p className="text-sm text-muted-foreground">
              FKFS / University of Stuttgart · Stuttgart, Germany
            </p>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "Google Scholar", href: "https://scholar.google.com/citations?user=WmDTjXkAAAAJ&hl=de" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/dr-ing-kun-gao-18553b137/" },
              { label: "Email", href: "mailto:kun.gao@yahoo.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary/70 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed font-light pt-4">
          Experienced in developing and evaluating AI-based automated driving
          systems using simulation, real-world data, and scenario-based
          validation methodologies.
        </p>
      </div>
    </section>
  );
}
