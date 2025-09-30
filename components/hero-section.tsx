"use client"

import React, { useLayoutEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const mainRef = useRef(null);
  const helloRef = useRef(null);
  const angelesRef = useRef(null);
  const videoContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          pin: true, // Fija la sección mientras dura la animación
          scrub: 1,  // Conecta la animación al scroll
          start: "top top",
          end: "+=2000", // La animación durará por 2000px de scroll
        },
      });

      // Animación de salida para "Hello,"
      timeline.to(helloRef.current, {
        opacity: 0,
        scale: 0.8,
        ease: "power2.inOut",
      });

      // Animación de entrada para "This is Angeles"
      timeline.fromTo(angelesRef.current, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, ease: "power2.inOut" },
        "<" // El "<" hace que esta animación empiece al mismo tiempo que la anterior
      );
      
    }, mainRef);

    return () => ctx.revert(); // Limpieza de la animación
  }, []);

  return (
    <section
      id="home"
      ref={mainRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Contenedor que se va a fijar en la pantalla */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center p-4 sm:p-8">

        {/* El video centrado */}
        <div ref={videoContainerRef} className="relative w-full max-w-5xl mx-auto aspect-video">
          <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              src="/videos/hero-video.mp4"
          />
        </div>

        {/* Capa de Texto "Hello," (Animado) */}
        <h1 
          ref={helloRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif font-bold text-white/100 text-center text-[25vw] sm:text-[20vw] lg:text-[15vw] leading-none whitespace-nowrap tracking-tighter"
        >
          Hello,
        </h1>

        {/* Capa de Texto con Borde "This is Angeles" (Animado) */}
        <h2 
          ref={angelesRef}
          className="pointer-events-none absolute font-serif text-transparent text-center text-[10vw] sm:text-[8vw] lg:text-[11.5vw] whitespace-nowrap tracking-tight opacity-0" // Empieza invisible
          style={{ 
            WebkitTextStroke: '2px white',
            filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))'
          }}
        >
          This is Angeles
        </h2>

      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/50">
        <p className="flex items-center gap-2">
          Let's scroll <ArrowDown className="w-4 h-4 animate-bounce" />
        </p>
      </div>
    </section>
  )
}