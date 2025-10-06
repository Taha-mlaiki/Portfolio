import { Card } from "@/components/ui/card";

const technologies = [
  { name: "JS", src: "/js.svg" },
  { name: "TS", src: "/typescript.svg" },
  { name: "PHP", src: "/php.png" },
  { name: "Next.js", src: "/nextjs.svg" },
  { name: "React", src: "/react.svg" },
  { name: "Laravel", src: "/laravel.svg" },
  { name: "NestJS", src: "/nestjs.svg" },
  { name: "Express.js", src: "/expressjs.svg" },
  { name: "Zustand", src: "/zustand.svg" },
  { name: "Redux", src: "/redux.svg" },
  { name: "Prisma", src: "/prisma.svg" },
  { name: "MongoDB", src: "/mongodb.svg" },
  { name: "Neon DB", src: "/neonDb.png" },
  { name: "Postgres", src: "/postgress.svg" },
  { name: "Shadcn", src: "/shadcn.png" },
  { name: "Express.js", src: "/expressjs.svg" },
  { name: "Jest", src: "/jestjs.png" },
  { name: "Docker", src: "/docker.png" },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm">
            <span className="text-sm text-secondary font-semibold tracking-wider uppercase">Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Tech <span className="bg-gradient-primary bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mastering cutting-edge tools and frameworks to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group relative p-6 backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-3 flex flex-col items-center justify-center gap-4 aspect-square overflow-hidden"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.05}s backwards`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-xl transition-all duration-500 group-hover:scale-110" />
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 filter group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                  loading="lazy"
                />
              </div>
              
              <span className="text-sm font-bold text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-10">
                {tech.name}
              </span>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-accent opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
