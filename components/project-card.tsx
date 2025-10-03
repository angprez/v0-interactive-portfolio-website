"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projects } from "@/lib/projects-data"; // Importa 'projects' para derivar el tipo

// Deriva el tipo 'Project' directamente del array de datos para asegurar que siempre coincidan
type Project = (typeof projects)[0];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} passHref>
      <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
        <div className="relative overflow-hidden w-full h-64 bg-card">
          {project.video ? (
            <video
              key={project.id}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-primary-foreground font-semibold">Ver Detalles</span>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.category.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>
          <h3 className="font-serif text-xl font-bold text-foreground mb-2 text-balance">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}