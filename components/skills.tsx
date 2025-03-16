"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, GitBranch, Layers, Lightbulb, Smartphone } from "lucide-react"

export default function Skills() {

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 className="h-8 w-8 text-primary" />,
      skills: ["JavaScript", "TypeScript", "React Native", "React.js", "HTML", "CSS"],
    },
    {
      title: "State Management",
      icon: <Layers className="h-8 w-8 text-primary" />,
      skills: ["Redux", "MobX"],
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["Firebase", "SQLite"],
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "Axios", "Lodash", "Immer"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      skills: ["iOS", "Android", "Cross-platform"],
    },
    {
      title: "Problem Solving",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      skills: ["Algorithm Design", "Optimization", "Debugging"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-10"></div>
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {skillCategories.map((category, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {category.icon}
                      <h3 className="font-semibold">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-muted-foreground">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

