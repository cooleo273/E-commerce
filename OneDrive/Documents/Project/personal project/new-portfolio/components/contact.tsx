"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = contactRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    // Show success message
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "leulteferi273@gmail.com",
      link: "mailto:leulteferi273@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+251984835861",
      link: "tel:+251984835861",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: null,
    },
  ]

  return (
    <section id="contact" ref={contactRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="animate-on-scroll opacity-0 inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            Contact Me
          </h2>
          <div className="animate-on-scroll opacity-0 w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="animate-on-scroll opacity-0 text-center text-muted-foreground max-w-2xl">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="animate-on-scroll opacity-0 flex items-start p-4 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-lg bg-primary/10 mr-4">{info.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-primary hover:underline transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="md:col-span-2">
            <motion.div
              className="animate-on-scroll opacity-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      type="email"
                      required
                      className="w-full rounded-lg border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="w-full min-h-[150px] rounded-lg border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
