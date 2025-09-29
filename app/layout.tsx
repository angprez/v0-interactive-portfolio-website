import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alex Johnson - Creative Developer & Designer",
  description:
    "Portfolio of Alex Johnson - Creative Developer specializing in interactive web experiences, UI/UX design, and modern web technologies.",
  keywords: ["portfolio", "web developer", "ui/ux designer", "react", "next.js", "creative developer"],
  authors: [{ name: "Alex Johnson" }],
  creator: "Alex Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnson.dev",
    title: "Alex Johnson - Creative Developer & Designer",
    description: "Portfolio showcasing creative web development and design work",
    siteName: "Alex Johnson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Creative Developer & Designer",
    description: "Portfolio showcasing creative web development and design work",
    creator: "@alexjohnson",
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
