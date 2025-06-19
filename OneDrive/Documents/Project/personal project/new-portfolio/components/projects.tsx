"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

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

    const elements = projectsRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const projects = [
    {
      title: "Trade Backtesting Platform",
      description:
        "Nexus Replay is a powerful and intuitive trade backtesting platform designed for traders and quantitative analysts to validate and refine their trading strategies with confidence.",
      image: "/image.png?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
      github: "https://github.com/cooleo273/fx-simulate-vision",
      demo: "https://fx-simulate-vision.vercel.app/",
      featured: true,
    },
    {
      title: "Food delivery landing page ",
      description:
        "This is a modern, responsive landing page for a food delivery platform, designed to attract users and convert them into customers. The page introduces the service with bold visuals, clear calls to action, and concise messaging that highlights the convenience of ordering food online.",
      image: "/Screenshot 2025-04-13 114632.png?height=300&width=500",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
      github: "https://github.com/cooleo273/food-delivery-landing-",
      demo: "https://bitejet.vercel.app",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with dark mode support.",
      image: "/Screenshot 2025-04-13 114531.png?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "E-commerce Website",
      description:
        "This is a fully responsive eCommerce website designed to deliver a smooth and intuitive shopping experience for users across all devices. The platform allows users to browse products, manage their cart, and securely complete purchases — all within a sleek, user-friendly interface.",
      image: "/Screenshot 2025-04-13 114414.png?height=300&width=500",
      tags: ["React", "Chart.js", "Weather API", "Geolocation", "PWA"],
      github: "https://github.com/cooleo273/E-commerce-challenge   ",
      demo: "https://e-commerce-challenge-plum.vercel.app/",
      featured: false,
    },
  ]

  return (
    <section id="projects" ref={projectsRef} className="py-24 projects-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="animate-on-scroll opacity-0 inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-sm font-medium">
            My Work
          </div>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="animate-on-scroll opacity-0 w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="animate-on-scroll opacity-0 text-center text-muted-foreground max-w-2xl">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="animate-on-scroll opacity-0 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl group-hover:border-primary/50">
                <div className="relative">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-1 rounded-full" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-1 bg-primary hover:bg-primary/90 rounded-full"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
