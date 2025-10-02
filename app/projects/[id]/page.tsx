import Link from "next/link";
import { projects } from "@/lib/projects-data";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// 1. AÑADIMOS LOS NUEVOS ÍCONOS
import { ArrowLeft, Linkedin, BookText, Mail } from "lucide-react";

// Esto le dice a Next.js qué páginas de proyectos debe generar
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);
  
  // 2. AÑADIMOS LOS DATOS DE TUS ENLACES SOCIALES
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/angprezm" },
    { icon: BookText, label: "Substack", href: "https://substack.com/@fonsagency" },
    { icon: Mail, label: "Email", href: "mailto:ade.maidana1@gmail.com" },
  ];

  if (!project) {
    return (
      <div>
        <h1 className="text-center text-2xl font-bold mt-20">Project not found</h1>
        <div className="text-center mt-8">
            <Button asChild variant="outline">
                <Link href="/projects">
                    <ArrowLeft className="w-4 h-4 mr-2"/>
                    Back to All Projects
                </Link>
            </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto pt-16">
          <div className="mb-8">
            <Button asChild variant="ghost" className="pl-0">
              <Link href="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Projects
              </Link>
            </Button>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-8">
            <p>{project.longDescription}</p>
          </div>

          {/* --- 3. SECCIÓN DE BOTONES REEMPLAZADA --- */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">Connect with me</h2>
            <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                    <Button asChild key={link.label} variant="outline">
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <link.icon className="w-4 h-4 mr-2"/>
                            {link.label}
                        </a>
                    </Button>
                ))}
            </div>
          </div>


          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.galleryImages.map((img, index) => (
                <div key={index} className="relative aspect-video rounded-md overflow-hidden">
                     <Image
                        src={img}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}