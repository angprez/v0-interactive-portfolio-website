"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Download, Award, Users, Coffee, Code2 } from "lucide-react"
import Image from "next/image"

// --- HABILIDADES TÉCNICAS (ACTUALIZADO) ---
const skills = [
  { name: "Web Development", level: 75 },
  { name: "Workflow Automation (n8n, Airtable)", level: 85 },
  { name: "Project Management (Jira, Notion)", level: 90 },
  { name: "AI Integration (ChatGPT API)", level: 80 },
  { name: "Design (Photoshop, Canva, CorelDRAW)", level: 75 },
  { name: "Market Research", level: 95 },
]

// --- STATS (ACTUALIZADO) ---
const stats = [
  { icon: Code2, label: "Years in marketing, project coordination & business support", value: "3+" },
  { icon: Users, label: "Countries worked in with international teams", value: "3" },
  { icon: Award, label: "Twice recognized as Valedictorian with top grades", value: "2x" },
  { icon: Coffee, label: "Passion for technology & human impact", value: "∞" },
]

// --- EXPERIENCIA LABORAL (ACTUALIZADO) ---
const experience = [
    {
    period: "2025 — Present",
    role: "Research Assistant",
    company: "Kansas Small Business Development Center",
    description:
      "Supported business development through research, CRM data tracking, and internal coordination/administrative position.",
  },
  {
    period: "Dec 2022 — Dec 2024",
    role: "Marketing & Project Coordination Assistant",
    company: "Grant Thornton S.A.",
    description:
      "Collaborated with the marketing lead in Uruguay on content strategy, performance reporting, and competitor research. Supported internal branding through multi-platform campaigns and coordinated corporate events. Led a women’s empowerment initiative and managed HR documentation, streamlining onboarding with CRM systems.",
  },
  {
    period: "Jan 2023 — Jun 2023",
    role: "Hackathon Coordination Assistant",
    company: "Girls Code Paraguay | Civic Technologies by Tavandu",
    description:
      "Assisted in the organization and coordination of a hackathon aimed at empowering young women in technology, managing logistics and participant communication.",
  },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            I help businesses grow by combining marketing, automation, and web design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image and Info */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <Image
                  src="/foto profesional angeles.jpg"
                  alt="Angeles Profile"
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Angeles Perez</h3>
                <p className="text-muted-foreground mb-4">Marketer and Innovator</p>
                <Button className="w-full" asChild>
                  <a href="/Marketing_Resume_Angeles_Perez_25.pdf" download="Marketing_Resume_Angeles_Perez.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["about", "skills", "experience"].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "outline"}
                  onClick={() => setActiveTab(tab)}
                  className="capitalize"
                >
                  {tab}
                </Button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Hello, I'm Angeles</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a marketing and business professional with experience across consulting, nonprofit, and 
                      education sectors in Paraguay and the United States. I'm currently pursuing a BBA in Business 
                      Administration with emphasis in Marketing Data-Driven & Intelligence at Wichita State University, 
                      after graduating with top honors in Marketing from Universidad Americana.
                    </p>
                    <p>
                      My career spans roles in project coordination, marketing strategy, and business development research. 
                      My colleagues know me for my adaptability, problem-solving mindset, and ability to connect people and ideas easily. 
                      Passionate about business, community, and innovation, I see my career as a bridge between innovation, technologies,
                      strategy and human-centered impact.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <Card key={index} className="text-center p-4 border-0 shadow-sm">
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-foreground mb-4">Technologies I work with:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Market Research", "Project Management", "Academic Research", "n8n", "Vercel", 
                      "Gemini Code Assist", "ChatGPT API", "Airtable", "CorelDRAW", "Adobe Photoshop", 
                      "Jira", "Notion", "Microsoft 365 Copilot", "Canva", "Web Development",
                    ].map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Work Experience</h3>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      <div className="text-sm text-primary font-medium mb-1">{exp.period}</div>
                      <h4 className="font-semibold text-foreground text-lg">{exp.role}</h4>
                      <div className="text-primary font-medium mb-2">{exp.company}</div>
                      <p className="text-muted-foreground text-pretty leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}