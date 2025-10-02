"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // Hook para saber en qué URL estás

  const navLinks = [
    { name: "Home", href: "/#home", sectionId: "home" },
    { name: "Projects", href: "/projects", sectionId: "projects" },
    { name: "About", href: "/#about", sectionId: "about" },
    { name: "Contact", href: "/#contact", sectionId: "contact" },
  ]

  const scrollToSection = (id: string) => {
    // Si la sección es 'home', hacemos scroll al inicio de la página
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    // Si el enlace es a una sección de la página de inicio Y estamos en la página de inicio
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault() // Prevenimos la navegación normal del link
      scrollToSection(sectionId)
    }
    // Para todos los demás casos (como ir a /projects, o ir de /projects a /#about),
    // el componente Link se encargará de la navegación automáticamente.
    setIsOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* El logo ahora es un Link a la página principal */}
          <Link 
            href="/" 
            onClick={(e) => handleNavClick(e, '/#home', 'home')}
            className="font-serif text-2xl font-bold text-primary"
          >
            Angeles' Portfolio
          </Link>

          {/* Navegación de Escritorio */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botón de Menú Móvil */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Navegación Móvil */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}