import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "CommentBuzz",
      description:
        "A complete social feedback platform for videos. Users can add timestamped comments, reply, and like. Developed both frontend and backend architecture for scalable performance.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.IO"],
      links: [],
    },
    {
      title: "ConnectPOS",
      description:
        "Tablet-based configurable POS app with customizable product display, action management, offline functionality, bill handling, and restaurant table management.",
      technologies: ["React Native", "Firebase", "Redux"],
      links: [],
    },
    {
      title: "LINEWORK",
      description:
        "All-in-one app to buy, sell, chat, and explore posts & stories—just like Instagram, all in one place.",
      technologies: ["React Native", "Firebase", "Redux"],
      links: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.linkwork",
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/app/linkwork/id123456789",
        },
      ],
    },
    {
      title: "TUTORLINE",
      description:
        "Tutor & Learner app with booking, payments, and 24-hour cancellation/refund. Learn, teach, pay, repeat.",
      technologies: ["React Native", "Firebase", "Payment Gateway"],
      links: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.tutorline",
        },
      ],
    },
    {
      title: "Funfatasy",
      description:
        "An app where users can check all upcoming game details and view head-to-head (H2H) team comparisons. The app includes an in-app purchase system for premium features.",
      technologies: ["React Native", "In-app Purchases", "API Integration"],
      links: [],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <div className="h-1 w-28 bg-primary mx-auto mb-10 rounded-full shadow-md" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-lg bg-background border border-primary/30 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-primary/20 cursor-default"
            >
              <CardHeader className="pb-3 border-b border-primary/20">
                <CardTitle className="flex items-center gap-3  font-semibold">
                  <div className="bg-muted-foreground/10 p-2 rounded-md flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-muted-foreground text-primary" />
                  </div>
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow mt-4">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="
                        bg-muted-foreground/10
                        text-muted-foreground
                        dark:bg-white/10
                        dark:text-muted-foreground/80
                        px-3 py-1 rounded-full font-medium text-sm
                        shadow-sm
                        transition-colors
                        hover:bg-primary hover:text-white
                        cursor-default
                      "
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {project.links.length > 0 && (
                <CardFooter className="pt-4 border-t border-primary/20 flex flex-wrap gap-3 justify-start">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex items-center gap-1"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        {link.name}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
