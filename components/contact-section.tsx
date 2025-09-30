"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Linkedin, BookText, Calendar, MessageCircle, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ade.maidana1@gmail.com",
    href: "mailto:ade.maidana1@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (316) 304-4710",
    href: "tel:+13163044710",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Wichita, KS",
    href: "#",
  },
]

const socialLinks = [
    { icon: Mail, label: "Gmail", href: "mailto:ade.maidana1@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/angprezm" },
    { icon: BookText, label: "Substack", href: "https://substack.com/@fonsagency" },
]

const services = ["Web Development", "UI/UX Design", "Mobile Apps", "Consulting", "Brand Identity", "E-commerce"]

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      budget: "",
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <a href={info.href} className="font-medium text-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Currently available for new projects. Response time is typically within 24 hours.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Input
                        id="service"
                        name="service"
                        placeholder="e.g., Web Development"
                        value={formData.service}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input
                        id="budget"
                        name="budget"
                        placeholder="e.g., $5,000 - $10,000"
                        value={formData.budget}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Angeles Perez. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}