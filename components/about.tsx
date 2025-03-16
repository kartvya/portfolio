import { Card, CardContent } from "@/components/ui/card"
import { User, Calendar, Flag, Languages } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Career Objective</h3>
              <p className="text-muted-foreground mb-6">
                Skilled React Native - JavaScript developer with 3 years of extensive knowledge of user facing front end
                UI with knowledge of latest JavaScript libraries and databases with, advance optimization techniques,
                Design patterns and software architecture.
              </p>

              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h4 className="font-medium">Bachelor of Engineering in Computer Science</h4>
                  <p className="text-muted-foreground">8.60 CGPA</p>
                  <p className="text-sm text-muted-foreground">2022</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p>Kartvya Acharya</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p>25/05/2001</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Flag className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Nationality</p>
                    <p>Indian</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <p>English, Hindi, Gujarati</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <p className="text-muted-foreground">
                  Passionate about learning new technologies and solving complex problems. Focused on optimizing
                  applications for better performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

