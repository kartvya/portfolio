import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Smartphone } from "lucide-react"

export default function Projects() {
  const projects = [
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
      title: "SVCAPTURE",
      description: "Scorekeeping app for referees to track scores, time, and fouls for soccer and basketball.",
      technologies: ["React Native", "Local Storage", "Real-time Updates"],
      links: [],
    },
    {
      title: "Funfatasy",
      description:
        "An app where users can check all upcoming game details and view head-to-head (H2H) team comparisons. The app includes an in-app purchase system for premium features.",
      technologies: ["React Native", "In-app Purchases", "API Integration"],
      links: [],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.links.length > 0 && (
                <CardFooter className="flex gap-2 flex-wrap">
                  {project.links.map((link, linkIndex) => (
                    <Button key={linkIndex} variant="outline" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        {link.name}
                        <ExternalLink className="h-3 w-3" />
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
  )
}

