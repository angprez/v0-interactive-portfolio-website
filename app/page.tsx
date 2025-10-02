"use client"; // <-- 1. Convertimos esta página a un Componente de Cliente

import { useEffect } from "react"; // <-- 2. Importamos useEffect
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  
  // --- 3. AÑADIMOS ESTE BLOQUE DE CÓDIGO ---
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // quitamos el '#'
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Un pequeño retraso para asegurar que todo ha cargado
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez al cargar la página

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}