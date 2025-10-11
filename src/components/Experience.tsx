import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Internship",
    company: "Nokturn",
    icon: "/noktrun_logo.png",
    period: "25/04/2024 - 25/07/2024",
    description:
      "Worked on an innovation project and contributed to various stages of development using Next.js and MongoDB.",
  },
  {
    title: "Student",
    company: "Youcode",
    icon: "/youcode_logo.png",
    period: "1/10/24 - 5/5/25",
    description:
      "Learned web development fundamentals, focusing on Laravel for backend and React for dynamic frontends, with hands-on projects.",
  },
  {
    title: "Internship",
    company: "Techstride Solutions",
    icon: "/techstride_logo.png",
    period: "14/05/2025 - 14/07/2025",
    description:
      "Integrated frontend and backend using Next.js, building scalable web apps with efficient API connections.",
  },
  {
    title: "Student",
    company: "Youcode",
    icon: "/youcode_logo.png",
    period: "15/9/25 - Present",
    description:
      "Mastered MERN stack, including Next.js, NestJS, and Docker, focusing on microservices and modern workflows.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-card/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-semibold tracking-wider uppercase">
              Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey and educational milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.2}s backwards`,
                }}
              >
                <Card className="p-6 md:ml-20 backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                  {/* Timeline dot */}
                  <div className="absolute left-[-3.25rem] top-8 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background hidden md:block group-hover:scale-150 transition-transform shadow-glow" />

                  <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-card to-muted border border-border/50 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-105">
                      <img
                        src={exp.icon}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-secondary font-semibold">
                            {exp.title}
                          </p>
                        </div>
                        <div className="sm:flex hidden items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">
                          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground font-medium">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <div className=" flex sm:hidden items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">
                        <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
