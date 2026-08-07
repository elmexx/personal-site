import { Icons } from "@/components/Icons";

export function Publications() {
  const papers = [
    {
      title:
        "Scene Data Augmentation with Real and Virtual Data for Enhanced AI-Driven Automated Driving Perception",
      venue: "Springer Vieweg Wiesbaden, 2026 (Dissertation)",
      authors: "K. Gao",
      link: "#",
    },
    {
      title:
        "A Conceptual Framework to ODD-Based Scenario Generation for Obstacle Detection in Automated Shuttle Bus",
      venue: "Int. Symposium on Intelligent Technology for Future Transportation, 2024",
      authors: "K. Gao, U. Weinrich, T. Riemer, H.C. Reuss",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=de&user=WmDTjXkAAAAJ&citation_for_view=WmDTjXkAAAAJ:zYLM7Y9cAGgC",
    },
    {
      title:
        "Technical Evaluation of the Obstacle Detection for Automated Shuttle Buses",
      venue: "SAE Technical Papers, 2023",
      authors: "K. Gao, U. Weinrich, T. Riemer, H.C. Reuss",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=de&user=WmDTjXkAAAAJ&citation_for_view=WmDTjXkAAAAJ:UeHWp8X0CEIC",
    },
    {
      title:
        "Corner Cases Generation for Virtual Scenario-Based Testing of CNN-Based Autonomous Driving Function",
      venue: "6th Shanghai-Stuttgart Symposium, 2022",
      authors: "K. Gao, H.C. Reuss",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=de&user=WmDTjXkAAAAJ&citation_for_view=WmDTjXkAAAAJ:Tyk-4Ss8FVUC",
    },
  ];

  return (
    <section id="publications" className="py-28 px-8 sm:px-16">
      <div className="w-full space-y-12">
        <p className="text-xs text-muted-foreground font-mono tracking-[0.25em] uppercase">
          Selected Publications
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {papers.map((paper, i) => (
            <a
              key={i}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border/60 bg-card p-6 space-y-3 hover:border-primary/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icons.File />
              </div>
              <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                {paper.title}
              </h3>
              <p className="text-xs text-muted-foreground">{paper.authors}</p>
              <p className="text-xs text-muted-foreground/70">{paper.venue}</p>
            </a>
          ))}
        </div>

        <a
          href="https://scholar.google.com/citations?user=WmDTjXkAAAAJ&hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors"
        >
          View all on Google Scholar
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
