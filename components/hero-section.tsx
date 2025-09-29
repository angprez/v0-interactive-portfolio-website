"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const rockOpacity = Math.max(0, 1 - scrollY / 800)
  const rockScale = Math.max(0.5, 1 - scrollY / 1200)

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 scale-110"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image src="/images/hero-bg.jpg" alt="Surreal landscape background" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      </div>

      <div className="fixed inset-0 z-5 pointer-events-none">
        {/* Persistent Sky Elements */}
        <div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-400/10 to-transparent"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div
          className="absolute top-16 right-0 w-64 h-64 bg-gradient-radial from-yellow-300/5 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.08}px)`,
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Enhanced Drifting Clouds with unique behaviors */}
        <div
          className="cloud-element cloud-wispy absolute top-16 left-0 w-32 h-20 bg-white/10 rounded-full blur-md animate-drift-slow"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 10 + scrollY * 0.3}px)`,
            opacity: Math.max(0.3, 1 - scrollY / 1000),
          }}
        />
        <div
          className="cloud-element cloud-fluffy absolute top-32 right-0 w-24 h-16 bg-white/8 rounded-full blur-lg animate-drift"
          style={{
            transform: `translate(${-mousePosition.x * 15}px, ${mousePosition.y * 8 + scrollY * 0.2}px)`,
            opacity: Math.max(0.2, 1 - scrollY / 1200),
          }}
        />
        <div
          className="cloud-element cloud-stretched absolute top-48 left-1/3 w-40 h-24 bg-white/6 rounded-full blur-xl animate-drift-reverse"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 12 + scrollY * 0.4}px)`,
            opacity: Math.max(0.4, 1 - scrollY / 800),
          }}
        />
        <div
          className="cloud-element cloud-small absolute bottom-32 right-1/4 w-28 h-18 bg-white/7 rounded-full blur-lg animate-drift-slow"
          style={{
            transform: `translate(${-mousePosition.x * 18}px, ${-mousePosition.y * 9 + scrollY * 0.25}px)`,
            opacity: Math.max(0.3, 1 - scrollY / 1000),
          }}
        />

        <div
          className="rock-element rock-crystal absolute top-20 left-10 w-16 h-16 bg-secondary/30 rounded-full blur-sm animate-rock-float hover-crystal"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20 + scrollY * 0.6}px) rotate(${mousePosition.x * 10}deg) scale(${rockScale})`,
            opacity: rockOpacity,
          }}
        />
        <div
          className="rock-element rock-ember absolute top-40 right-20 w-12 h-12 bg-accent/40 rounded-full blur-sm animate-rock-drift hover-ember"
          style={{
            transform: `translate(${-mousePosition.x * 25}px, ${mousePosition.y * 15 + scrollY * 0.4}px) rotate(${-mousePosition.y * 8}deg) scale(${rockScale})`,
            opacity: rockOpacity,
          }}
        />
        <div
          className="rock-element rock-mystic absolute bottom-40 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-sm animate-rock-float-slow hover-mystic"
          style={{
            transform: `translate(${mousePosition.x * 35}px, ${-mousePosition.y * 25 + scrollY * 0.7}px) rotate(${mousePosition.x * 12}deg) scale(${rockScale})`,
            opacity: rockOpacity,
          }}
        />
        <div
          className="rock-element rock-shard absolute top-60 right-1/3 w-8 h-8 bg-secondary/50 rounded-full blur-sm animate-rock-drift hover-shard"
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${mousePosition.y * 18 + scrollY * 0.5}px) rotate(${-mousePosition.x * 6}deg) scale(${rockScale})`,
            opacity: rockOpacity,
          }}
        />
        <div
          className="rock-element rock-prism absolute bottom-60 left-1/2 w-14 h-14 bg-accent/35 rounded-full blur-sm animate-rock-float hover-prism"
          style={{
            transform: `translate(${mousePosition.x * 28}px, ${-mousePosition.y * 22 + scrollY * 0.65}px) rotate(${mousePosition.y * 9}deg) scale(${rockScale})`,
            opacity: rockOpacity,
          }}
        />
        <div
          className="rock-element rock-void absolute top-80 left-20 w-10 h-10 bg-primary/40 rounded-full blur-sm animate-rock-drift hover-void"
          style={{
            transform: `translate(${mousePosition.x * 22}px, ${mousePosition.y * 16 + scrollY * 0.55}px) rotate(${mousePosition.x * 7}deg) scale(${rockScale})`,
            opacity: rockOpacity,
          }}
        />

        <div
          className="absolute top-24 right-16 w-6 h-6 bg-white/20 rounded-full blur-xs animate-sparkle"
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 30}px)`,
            opacity: Math.max(0.2, 1 - scrollY / 600),
          }}
        />
        <div
          className="absolute bottom-48 left-16 w-4 h-4 bg-secondary/40 rounded-full blur-xs animate-sparkle-slow"
          style={{
            transform: `translate(${-mousePosition.x * 35}px, ${-mousePosition.y * 25}px)`,
            opacity: Math.max(0.3, 1 - scrollY / 800),
          }}
        />
        <div
          className="absolute top-72 right-32 w-3 h-3 bg-accent/60 rounded-full blur-xs animate-sparkle"
          style={{
            transform: `translate(${mousePosition.x * 45}px, ${mousePosition.y * 35}px)`,
            opacity: Math.max(0.1, 1 - scrollY / 700),
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 text-balance">
          Creative
          <span className="block text-secondary italic">Portfolio</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          Stay updated with the latest work and exclusive content! Subscribe to my newsletter today and never miss out
          on exciting updates.
        </p>

        {/* Newsletter Signup */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
            required
          />
          <Button type="submit" className="bg-white text-primary hover:bg-white/90">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>

        <Button
          variant="outline"
          className="mb-16 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View Portfolio
        </Button>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
            <Mail className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
