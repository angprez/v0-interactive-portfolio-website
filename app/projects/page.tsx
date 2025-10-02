import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/lib/projects-data" 
import { Navigation } from "@/components/navigation"
import { ProjectCard } from "@/components/project-card" 

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Here is a complete collection of my work. Click on any project to explore it in detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} /> 
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="group bg-transparent">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}