"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 hero-gradient relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating code symbols */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-primary/20 dark:text-primary/10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Code size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 text-primary/20 dark:text-primary/10"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <Sparkles size={30} />
      </motion.div>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10">
        <div className="animate-on-scroll opacity-0 inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-sm font-medium">
          Software Engineer
        </div>

        <h1 className="animate-on-scroll opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance">
          <span className="gradient-text">Leul Teferi</span>
        </h1>

        <h2 className="animate-on-scroll opacity-0 text-xl md:text-2xl font-medium mb-6 text-balance">
          Building clean, scalable, and modern web experiences
        </h2>

        <p className="animate-on-scroll opacity-0 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-balance">
          Crafting exceptional digital experiences with a focus on performance, accessibility, and beautiful design.
        </p>

        <Button
          onClick={scrollToProjects}
          size="lg"
          className="animate-on-scroll opacity-0 bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full flex items-center gap-2 text-lg transition-all duration-300 shadow-lg hover:shadow-primary/25"
        >
          View Projects
          <ArrowDown className="h-5 w-5" />
        </Button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}
