"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+91 7284031684",
      link: "tel:+917284031684",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "kartvyaacharya@gmail.com",
      link: "mailto:kartvyaacharya@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "Anand, Gujarat, India",
      link: "https://maps.google.com/?q=Anand,Gujarat,India",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      label: "LinkedIn",
      value: "@Kartvya",
      link: "https://linkedin.com/in/Kartvya",
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      label: "GitHub",
      value: "@Kartvya",
      link: "https://github.com/Kartvya",
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-10"></div>

        <div className="grid grid-cols-1 justify-center gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="mx-auto w-full max-w-sm">
                  <CardContent className="p-4">
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      {info.icon}
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
