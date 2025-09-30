import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Angeles Perez - Creative Marketing Innovator",
  description:
    "Portfolio of Angeles Perez - Creative Developer specializing in interactive web experiences, UI/UX design, and modern web technologies.",
  keywords: ["portfolio", "web developer", "ui/ux designer", "react", "next.js", "creative developer"],
  authors: [{ name: "Angeles Perez Maidana" }],
  creator: "Angeles A. Perez Maidana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnson.dev",
    title: "Angeles Perez - Marketer and Innovator",
    description: "Portfolio showcasing my journey and exprience in the professional field",
    siteName: "Angeles Perez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angeles A. Perez Maidana - Marketer and Innovator",
    description: "Portfolio showcasing my journey and exprience in the professional field",
    creator: "@angprez",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
