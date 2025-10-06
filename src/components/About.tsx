import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate about building efficient and user-focused web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm <strong>Taha Mlaiki</strong>, a self-taught full stack developer currently studying web
              development at <strong>YouCode (UM6P)</strong>. I specialize in the <strong>MERN stack</strong> and have a deep passion
              for creating scalable, modern, and user-friendly applications.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I’ve built several projects like <strong>CarePortal</strong> (a medical appointment system), 
              <strong> Taskmate</strong> (a Trello clone), and a <strong>Store Management App</strong> — all using 
              <strong> Next.js, Prisma, MongoDB,</strong> and <strong>ShadCN</strong>. My goal is to continuously 
              improve and apply best practices in performance, security, and UX.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-6 text-center backdrop-blur-sm bg-card/50 border-border shadow-card hover:shadow-accent transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning & Building</div>
              </Card>
              <Card className="p-6 text-center backdrop-blur-sm bg-card/50 border-border shadow-card hover:shadow-accent transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
            </div>
          </div>

          <Card className="p-8 backdrop-blur-sm bg-card/50 border-border shadow-card">
            <h3 className="text-2xl font-bold mb-6">Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Quality & Precision</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing clean, maintainable, and efficient code for long-term scalability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Always exploring new technologies like Docker, TypeScript, and advanced Next.js patterns.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Passion & Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Striving to become a better developer every day and share knowledge with others.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
