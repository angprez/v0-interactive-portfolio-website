// components/SubstackFeed.tsx

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

// Aquí definirás los artículos que quieres mostrar.
// ¡IMPORTANTE! Debes reemplazar estos datos de ejemplo con los tuyos.
const articles = [
  {
    title: "The Psychology of Color in Marketing",
    description: "An in-depth look at how colors influence consumer behavior and how you can leverage it for your brand.",
    url: "https://substack.com/@fonsagency/post/1", // Reemplaza con el enlace real
    date: "September 25, 2025",
  },
  {
    title: "5 Automation Tools That Will Change Your Workflow",
    description: "Discover the tools that can save you hours of work and boost your productivity.",
    url: "https://substack.com/@fonsagency/post/2", // Reemplaza con el enlace real
    date: "September 18, 2025",
  },
  {
    title: "Navigating the Creator Economy: A Guide for Beginners",
    description: "From monetization to community building, here's everything you need to know to get started.",
    url: "https://substack.com/@fonsagency/post/3", // Reemplaza con el enlace real
    date: "September 11, 2025",
  },
  // Añade más artículos aquí...
];

export function SubstackFeed() {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <a key={article.title} href={article.url} target="_blank" rel="noopener noreferrer" className="block group">
          <Card className="hover:border-primary transition-colors duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{article.date}</p>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">{article.description}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 ml-4" />
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}