"use client"; // Agregamos esto para asegurar compatibilidad

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projects } from "@/lib/projects-data";

// Definimos el tipo de un proyecto para usarlo como prop
type Project = typeof projects[0];

export function ProjectCard({ project }: { project: Project }) {
  return (
    // Link ahora envuelve toda la tarjeta
    <Link href={`/projects/${project.id}`} passHref>
      <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
        <div className="relative overflow-hidden w-full h-64">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Capa de superposición opcional al pasar el mouse */}
          <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-primary-foreground font-semibold">Ver Detalles</span>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <Badge variant="secondary" className="text-xs mb-3 w-fit">
            {project.category}
          </Badge>
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