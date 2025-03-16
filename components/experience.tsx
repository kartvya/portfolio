import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/ui/timeline"

export default function Experience() {
  const experiences = [
    {
      title: "React Native Developer",
      company: "Brainerhub Solutions, Ahmedabad",
      period: "05/2023 - Present",
      description:
        "Led a three-member team in developing React Native solutions, managing client interactions, and overseeing deployment, ensuring seamless functionality and client satisfaction.",
    },
    {
      title: "React Native Developer",
      company: "Alian Software, Anand",
      period: "01/2022 - 04/2023",
      description:
        "Specialized in building robust solutions with React Native and Firebase, ensuring timely delivery, seamless deployment, and clean, scalable code. My focus on reusable components enhances efficiency across projects.",
    },
    {
      title: "React Native Intern",
      company: "HSP Software Solution, Vadodara",
      period: "09/2021 - 10/2021",
      description:
        "Acquired foundational knowledge and applied skills in developing and maintaining mobile applications using React Native and Firebase.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-10"></div>

        <div className="max-w-3xl mx-auto">
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                {index < experiences.length - 1 && <TimelineConnector />}
                <TimelineHeader>
                  <TimelineIcon className="bg-primary" />
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </TimelineHeader>
                <TimelineBody></TimelineBody>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}

