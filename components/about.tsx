import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Flag, Languages, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-muted/10 to-muted/30"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-2 text-center">About Me</h2>
        <div className="h-1 w-28 bg-primary mx-auto mb-10 rounded-full shadow-md" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col space-y-8">
            <Card className="flex-1 shadow-xl border border-primary/20">
              <CardContent className="p-6 space-y-4 h-full">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Career Objective
                </h3>
                <p className="text-muted-foreground">
                  Full-stack developer with 3+ years of experience, specializing
                  in React Native and backend development with Node.js, Express,
                  and MongoDB. Adept at crafting performant front-end UIs and
                  building scalable, maintainable backend systems.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 shadow-xl border border-primary/20">
              <CardContent className="p-6 space-y-2 h-full">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Education
                </h3>
                <div className="flex flex-col">
                  <p className="text-lg font-medium">
                    Bachelor of Engineering in Computer Science
                  </p>
                  <p className="text-muted-foreground">
                    8.60 CGPA • Graduated in 2022
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col space-y-8">
            <Card className="flex-1 shadow-xl border border-primary/20">
              <CardContent className="p-6 space-y-4 h-full">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <User className="text-primary" /> Personal Info
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InfoRow
                    icon={<User className="text-primary" />}
                    label="Full Name"
                    value="Kartvya Acharya"
                  />
                  <InfoRow
                    icon={<Calendar className="text-primary" />}
                    label="Date of Birth"
                    value="25/05/2001"
                  />
                  <InfoRow
                    icon={<Flag className="text-primary" />}
                    label="Nationality"
                    value="Indian"
                  />
                  <InfoRow
                    icon={<Languages className="text-primary" />}
                    label="Languages"
                    value="English, Hindi, Gujarati"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 shadow-xl border border-primary/20">
              <CardContent className="p-6 h-full">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Additional
                  Information
                </h3>
                <p className="text-muted-foreground">
                  Passionate about continuous learning and solving real-world
                  problems. Always looking for new challenges and striving for
                  excellence in software architecture and code quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-base font-medium">{value}</p>
      </div>
    </div>
  );
}
