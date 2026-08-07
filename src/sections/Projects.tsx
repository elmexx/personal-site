import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "AI Job Search Assistant",
    description:
      "Streamlit-powered tool that helps job seekers find and track opportunities, generate cover letters, and manage applications — all with AI assistance.",
    tags: ["Python", "Streamlit", "AI", "Automation"],
    link: "https://github.com/huiru/ai-job-search",
  },
  {
    title: "Memory Vision Engine",
    description:
      "An event-driven image processing pipeline that extracts memories from photos using computer vision and structured event storage.",
    tags: ["Python", "Computer Vision", "Event-Driven"],
    link: "https://github.com/huiru/memory-vision",
  },
  {
    title: "Personal Site",
    description:
      "This very site — built with React, TypeScript, Tailwind CSS, and shadcn/ui. Deployed on Vercel with a custom domain.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            Things I&apos;ve built recently
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="flex flex-col group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
