import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CarePortal V1",
    description:
      "A web app that helps patients easily book medical appointments and allows cabinets to manage their schedules efficiently.",
    techs: ["TypeScript", "Nextjs", "NextAuth", "Mongodb", "Prisma"],
    link: "https://care-portal-mu.vercel.app/",
    github: "https://github.com/Taha-mlaiki/CarePortal",
  },
  {
    title: "CarePortal V2",
    description:
      "A web app that helps patients easily book medical appointments and allows cabinets to manage their schedules efficiently.",
    techs: ["Php", "Laravel", "Next.js", "TypeScript", "Postgress", "Stripe"],
    link: "",
    github: "https://github.com/Taha-mlaiki/yc-file-rouge",
  },
  {
    title: "Uknow platform",
    description:
      "A web application where users can access educational content, manage courses, and track learning progress, while administrators can manage users, content, and platform settings efficiently.",
    techs: ["Php", "MVC", "Javascript", "MySQL"],
    link: "",
    github: "https://github.com/Taha-mlaiki/Uknow",
  },
  {
    title: "Ecommerce Website",
    description:
      "A store management platform for creating multiple stores, managing products, and tracking stock seamlessly",
    techs: ["TypeScript", "Nextjs", "NextAuth", "Mongodb", "Prisma", "Stripe"],
    link: "",
    github: "https://github.com/Taha-mlaiki/ecommerce-websit",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 backdrop-blur-sm bg-card/50 border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                {project.link && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 max-w-36"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
