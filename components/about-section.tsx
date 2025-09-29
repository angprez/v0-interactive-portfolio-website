"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Download, Award, Users, Coffee, Code2 } from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "Three.js/WebGL", level: 70 },
]

const stats = [
  { icon: Code2, label: "Projects Completed", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Award, label: "Awards Won", value: "8" },
  { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
]

const experience = [
  {
    period: "2024 — Present",
    role: "Senior Frontend Engineer",
    company: "Creative Studio",
    description:
      "Leading frontend development for innovative web experiences, specializing in interactive design and performance optimization.",
  },
  {
    period: "2022 — 2024",
    role: "Full Stack Developer",
    company: "Tech Startup",
    description:
      "Built scalable web applications from concept to deployment, working closely with design and product teams.",
  },
  {
    period: "2020 — 2022",
    role: "UI/UX Designer",
    company: "Digital Agency",
    description:
      "Designed user-centered interfaces for web and mobile applications, conducting user research and usability testing.",
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
            Passionate about crafting digital experiences that blend creativity with technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image and Info */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Alex Johnson</h3>
                <p className="text-muted-foreground mb-4">Creative Developer & Designer</p>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
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
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Hello, I'm Alex</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a passionate developer and designer with over 5 years of experience creating digital
                      experiences that matter. My journey began with a fascination for the intersection of art and
                      technology, leading me to specialize in interactive web development and user experience design.
                    </p>
                    <p>
                      Currently, I'm focused on building accessible, pixel-perfect digital experiences that blend
                      thoughtful design with robust engineering. I believe in the power of clean code, beautiful
                      interfaces, and meaningful interactions.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new design trends, experimenting with emerging
                      technologies, or enjoying a good cup of coffee while sketching ideas for my next project.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Node.js",
                      "Python",
                      "PostgreSQL",
                      "MongoDB",
                      "AWS",
                      "Vercel",
                      "Figma",
                      "Three.js",
                      "GSAP",
                      "Framer Motion",
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
                      <div className="text-accent font-medium mb-2">{exp.company}</div>
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
