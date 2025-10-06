import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, inventory management, and analytics dashboard.",
    techs: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
    techs: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation platform using GPT models for marketing copy and social media posts.",
    techs: ["React", "Python", "OpenAI", "AWS"],
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
    techs: ["Vue.js", "Express", "MySQL", "Google Maps"],
    link: "#",
    github: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracker with workout plans, nutrition tracking, and progress visualization.",
    techs: ["React Native", "Node.js", "Firebase"],
    link: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Business intelligence platform with customizable charts, reports, and data export features.",
    techs: ["React", "D3.js", "GraphQL", "PostgreSQL"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
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
                <Button variant="default" size="sm" className="flex-1" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
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
