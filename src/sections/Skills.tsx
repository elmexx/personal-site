import { Badge } from "@/components/ui/badge";

const SKILLS = {
  "Languages": ["TypeScript", "JavaScript", "Python", "HTML/CSS", "SQL"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Vite"],
  "Backend & Data": ["Node.js", "Python", "Streamlit", "REST APIs"],
  "Tools": ["Git", "Docker", "VS Code", "Vercel", "Figma"],
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Tech</h2>
          <p className="text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-1.5 px-3 font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
