import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Sparkles,
  Download,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-fade-in">
            {/* Profile Image Section */}
            <div className="relative group">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-[-20px] rounded-full bg-gradient-primary opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
                <div
                  className="absolute inset-[-10px] rounded-full bg-gradient-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* Main Avatar */}
              <div className="relative">
                <Avatar className="w-72 h-72 lg:w-96 lg:h-96 border-4 border-primary/50 shadow-glow group-hover:border-secondary/50 transition-all duration-500">
                  <AvatarImage
                    src={profileImg}
                    alt="Profile"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl bg-gradient-primary text-primary-foreground">
                    FS
                  </AvatarFallback>
                </Avatar>

                {/* Sparkle effect */}
                <div className="absolute -top-2 -right-2 bg-gradient-accent p-3 rounded-full animate-pulse shadow-accent">
                  <Sparkles className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-primary font-semibold tracking-wider uppercase">
                    Available for Opportunities
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  Full Stack
                  <br />
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Crafting innovative web solutions with modern technologies.
                Passionate about building scalable applications and exceptional
                user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                  <ArrowDown className="group-hover:translate-y-1 transition-transform" />
                </Button>
                <a href="/taha_cv_frensh.pdf" download>
                  <Button variant="glass" size="lg">  
                    <Download className="mr-2" />
                    Download CV
                  </Button>
                </a>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start items-center pt-6">
                <a
                  href="https://github.com/Taha-mlaiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 transform duration-200 shadow-card hover:shadow-glow"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/taha-mlaiki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border bg-card hover:border-secondary hover:bg-secondary/10 transition-all hover:scale-110 transform duration-200 shadow-card hover:shadow-accent"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:mlaikitaha29@gmail.com"
                  className="p-3 rounded-full border border-border bg-card hover:border-accent hover:bg-accent/10 transition-all hover:scale-110 transform duration-200 shadow-card hover:shadow-accent"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
