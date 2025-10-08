import { Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import { link } from "fs";

const testimonials = [
  {
    name: "Achraf Chaoub",
    role: "Mentor at YouCode",
    image: "/testimonials/achraf.png",
    content:
      "Taha is a passionate and dedicated developer. His ability to learn quickly and deliver efficient, well-structured code makes him a valuable team member.",
    linkedin: "https://www.linkedin.com/in/achraf-chaoub-2b726a19a/",
  },
  {
    name: "Aymen Jdily",
    role: "Tech Lead",
    image: "/testimonials/aymen.png",
    content:
      "Working with Taha was a great experience. He’s focused, collaborative, and always willing to help others while keeping high-quality standards in every project.",
    linkedin: "https://www.linkedin.com/in/aymenjdily/",
  },

  {
    name: "Zakaria Fahim",
    role: "Tech Entrepreneur",
    image: "/testimonials/zakariaFahim.png",
    content:
      "Taha shows exceptional commitment and curiosity. He consistently delivers solid work and keeps improving his technical and problem-solving skills.",
    linkedin: "https://www.linkedin.com/in/zakaria-fahim-935637176/",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          What People{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Say
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="p-8 backdrop-blur-sm bg-card/60 border-border shadow-card hover:shadow-accent transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <p className="text-muted-foreground italic text-sm leading-relaxed">
                  “{t.content}”
                </p>

                <div>
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{t.role}</p>

                  {/* LinkedIn Link */}
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="text-lg" />
                    <span className="text-sm font-medium">View Profile</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
