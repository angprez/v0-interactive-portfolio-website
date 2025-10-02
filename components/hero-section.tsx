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
          pin: true, 
          scrub: 1,  
          start: "top top",
          end: "+=2000", 
        },
      });

      timeline.to(helloRef.current, {
        opacity: 0,
        scale: 0.8,
        ease: "power2.inOut",
      });

      timeline.fromTo(angelesRef.current, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, ease: "power2.inOut" },
        "<" 
      );
      
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={mainRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* --- CAMBIO CLAVE AQUÍ --- */}
      {/* Hemos reducido el padding horizontal en móvil (px-2) para que el video sea más ancho */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center px-2 py-4 sm:p-8">

        <div ref={videoContainerRef} className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden">
          <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              src="/videos/hero-video.mp4"
          />
        </div>

        <h1 
          ref={helloRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif font-bold text-white/100 text-center text-[25vw] sm:text-[20vw] lg:text-[15vw] leading-none whitespace-rap tracking-tighter"
        >
          Hello,
        </h1>
        
        <h2 
          ref={angelesRef}
          className="pointer-events-none absolute font-serif text-transparent text-center text-[13vw] sm:text-[8vw] lg:text-[11.5vw] whitespace-nowrap tracking-tight opacity-0"
          style={{ 
            WebkitTextStroke: '1px white',
            filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))'
          }}
        >
          This is Angeles
        </h2>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/50">
        <p className="flex items-center gap-2">
          Let's scroll <ArrowDown className="w-4 h-4 animate-bounce" />
        </p>
      </div>
    </section>
  )
}