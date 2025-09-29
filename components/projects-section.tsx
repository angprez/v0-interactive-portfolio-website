"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Immersive Web Experience",
    description:
      "A highly immersive and interactive creative website that blurs the line between the real world and fairytale, built with WebGL and other fancy tech.",
    image: "/images/project-1.jpg",
    tags: ["React", "Three.js", "WebGL", "GSAP"],
    category: "Website",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with seamless user experience, advanced filtering, and secure payment integration.",
    image: "/images/project-2.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Design System",
    description:
      "Comprehensive design system for mobile applications with reusable components and consistent branding.",
    image: "/images/project-3.jpg",
    tags: ["Figma", "React Native", "Design System"],
    category: "Design",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for complex data visualization with real-time updates and customizable charts.",
    image: "/images/project-4.jpg",
    tags: ["D3.js", "React", "Node.js", "MongoDB"],
    category: "Dashboard",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "AI-Powered Chat Interface",
    description: "Intelligent chat interface with natural language processing and contextual responses.",
    image: "/images/project-5.jpg",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Brand Identity Package",
    description: "Complete brand identity design including logo, typography, color palette, and brand guidelines.",
    image: "/images/project-6.jpg",
    tags: ["Branding", "Illustrator", "Photoshop"],
    category: "Branding",
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Website", "Web App", "Design", "Dashboard", "AI/ML", "Branding"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A collection of my most impactful work, showcasing creativity, technical expertise, and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <Button variant="ghost" size="sm" className="p-1 h-auto">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3 text-balance">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 text-pretty leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group bg-transparent">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
