// app/projects/[id]/page.tsx

import Link from "next/link";
import { projects } from "@/lib/projects-data";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SubstackFeed } from "@/components/SubstackFeed";
import { EventShowcase } from "@/components/EventShowcase";
import { InstagramFeed } from "@/components/InstagramFeed";

// Extendemos el tipo Project para incluir la nueva data de Instagram
type Project = (typeof projects)[0] & {
  isInstagramProject?: boolean;
  instagram?: {
    username: string;
    profileImage: string;
    description: string;
    instagramUrl: string;
    posts: string[];
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id) as Project | undefined;
  
  if (!project) {
    return (
      <div>
        <Navigation />
        <main className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto pt-16 text-center">
                <h1 className="text-2xl font-bold mt-20">Project not found</h1>
                <div className="mt-8">
                    <Button asChild variant="outline">
                        <Link href="/projects">
                            <ArrowLeft className="w-4 h-4 mr-2"/>
                            Back to All Projects
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
      </div>
    );
  }

  const isSubstackProject = project.id === 8;
  const isEventsProject = project.id === 9;
  const hasVideo = 'video' in project && project.video;

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

          {/* Ocultamos la imagen principal para los proyectos de Instagram */}
          {!project.isInstagramProject && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg bg-card">
              {hasVideo ? (
                <video
                  src={project.video as string}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          )}

          <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-12 whitespace-pre-line">
            <p>{project.longDescription}</p>
          </div>

          {/* Botones de Live URL y GitHub */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-4 mb-12">
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {isSubstackProject ? "Visit Substack" : "Visit Live Site"}
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                 <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View Source Code
                    </a>
                </Button>
              )}
            </div>
          )}
          
          {/* Renderizamos el feed si es un proyecto de Instagram */}
          {project.isInstagramProject && project.instagram && (
            <InstagramFeed
              username={project.instagram.username}
              profileImage={project.instagram.profileImage}
              description={project.instagram.description}
              instagramUrl={project.instagram.instagramUrl}
              posts={project.instagram.posts}
            />
          )}

          {/* Lógica para otros tipos de proyectos */}
          {(() => {
            if (isSubstackProject) {
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
                  <SubstackFeed />
                </div>
              );
            }
            if (isEventsProject) {
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Activities</h2>
                  <EventShowcase />
                </div>
              );
            }
            if (project.galleryImages && project.galleryImages.length > 0) {
              return (
                <div>
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
              );
            }
            return null;
          })()}
        </div>
      </main>
    </>
  );
}