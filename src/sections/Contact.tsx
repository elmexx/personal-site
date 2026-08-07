import { Icons } from "@/components/Icons";

export function Contact() {
  const links = [
    { label: "Email", value: "kun.gao@yahoo.com", href: "mailto:kun.gao@yahoo.com", icon: <Icons.Mail /> },
    { label: "Google Scholar", value: "Kun Gao", href: "https://scholar.google.com/citations?user=WmDTjXkAAAAJ&hl=de", icon: <Icons.Graduation /> },
    { label: "LinkedIn", value: "linkedin.com/in/kun-gao", href: "https://www.linkedin.com/in/dr-ing-kun-gao-18553b137/", icon: <Icons.Linkedin /> },
    { label: "Institute", value: "FKFS / IFS Stuttgart", href: "https://www.fkfs.de/en/", icon: <Icons.Building /> },
  ];

  return (
    <section id="contact" className="py-28 px-8 sm:px-16 bg-muted/40">
      <div className="w-full space-y-12">
        <p className="text-xs text-muted-foreground font-mono tracking-[0.25em] uppercase">
          Contact
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-[17px] text-muted-foreground leading-relaxed font-light max-w-sm">
              For research collaboration, industry projects, or speaking
              invitations — feel free to reach out.
            </p>
          </div>
          <div className="space-y-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 border-b border-border/50 hover:border-primary/30 transition-colors group"
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {link.icon}
                </span>
                <span className="text-sm text-muted-foreground">{link.label}</span>
                <span className="flex-1 text-right text-sm group-hover:text-primary transition-colors">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
