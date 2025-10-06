import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Palette, Wrench, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Database,
    title: "Backend Development",
    techs: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    techs: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    techs: ["Figma", "Adobe XD", "Responsive Design", "Accessibility"],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    techs: ["Git", "VS Code", "Webpack", "Jest", "Postman"],
  },
  {
    icon: GitBranch,
    title: "Best Practices",
    techs: ["Clean Code", "Testing", "Agile", "Code Review", "Documentation"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set across the full development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-card/80 border-border/50 hover:border-secondary/50 shadow-card hover:shadow-accent transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-card group-hover:shadow-glow">
                    <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-foreground transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
