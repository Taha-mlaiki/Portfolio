import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your next project
          </p>
        </div>

        <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/50 border-border shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:mlaikitaha29@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>mlaikitaha29@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/taha-mlaiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>linkedin.com/in/taha-mlaiki</span>
                </a>

                <a
                  href="https://github.com/taha-mlaiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>github.com/taha-mlaiki</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-muted/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Agadir, Morocco</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Message</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Send me a message and I'll get back to you as soon as
                  possible.
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="mailto:mlaikitaha29@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
              <Button variant="glass" size="lg" className="w-full" asChild>
                <a
                  href="https://linkedin.com/in/taha-mlaiki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12 text-muted-foreground">
          <p>
            &copy; 2025 Full Stack Developer Portfolio. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
