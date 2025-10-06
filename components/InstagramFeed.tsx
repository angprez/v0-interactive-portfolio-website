// components/InstagramFeed.tsx

"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const instagramPosts = [
  "/images/wsu-1.jpg.png",
  "/images/wsu-2.jpg.png",
  "/images/wsu-3.jpg.png",
  "/images/wsu-4.jpg.png",
  "/images/wsu-5.jpg.png",
  "/images/wsu-6.jpg.jpg",
];

export function InstagramFeed() {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Instagram Feed Preview</h2>
        <Card className="overflow-hidden">
        <CardContent className="p-4 sm:p-6">
            {/* Perfil */}
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
            
            {/* --- ¡CAMBIO FINAL AQUÍ! Usamos la imagen como fondo --- */}
            <div 
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-primary bg-cover bg-center"
              style={{ backgroundImage: "url('/images/PSA logo.png')" }} // Asegúrate de que el nombre del archivo sea correcto
            >
              {/* No necesitamos un componente Image aquí dentro */}
            </div>

            <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold">wsuparaguay</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Paraguayan Student Association at WSU</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Managed by Angeles Perez</p>
                <Button size="sm" className="mt-3 w-full sm:w-auto">
                <a href="https://www.instagram.com/wsuparaguay" target="_blank" rel="noopener noreferrer">
                    Follow
                </a>
                </Button>
            </div>
            </div>

            {/* Grid de Publicaciones */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {instagramPosts.map((post, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-md">
                <Image
                    src={post}
                    alt={`Instagram post preview ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
                </div>
            ))}
            </div>
        </CardContent>
        </Card>
    </div>
  );
}