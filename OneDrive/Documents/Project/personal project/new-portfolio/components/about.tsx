"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Laptop, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)

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

    const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const features = [
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices.",
    },
    {
      icon: <Laptop className="h-5 w-5 text-primary" />,
      title: "Responsive Design",
      description: "Creating interfaces that work beautifully on all devices.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      title: "Problem Solver",
      description: "Finding elegant solutions to complex technical challenges.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-primary" />,
      title: "Performance Focused",
      description: "Optimizing for speed and efficiency in every project.",
    },
  ]

  return (
    <section id="about" ref={aboutRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="animate-on-scroll opacity-0 inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-sm font-medium">
            About Me
          </div>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            My Journey
          </h2>
          <div className="animate-on-scroll opacity-0 w-20 h-1 bg-primary rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 order-2 md:order-1 space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-balance">
              Passionate about creating <span className="text-primary">impactful</span> digital experiences
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm a software engineer specializing in building exceptional digital experiences. With a strong foundation
              in full-stack development, I enjoy creating elegant solutions to complex problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise lies in developing modern web applications using cutting-edge technologies. I'm particularly
              interested in creating responsive, user-friendly interfaces that provide seamless experiences across all
              devices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary/80 dark:hover:bg-secondary/30 transition-colors"
                >
                  <div className="mr-3 p-2 rounded-md bg-primary/10">{feature.icon}</div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 order-1 md:order-2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image src="/photo_2025-04-13_10-13-35.jpg?height=320&width=320" alt="Leul Teferi" fill className="object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-400/10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
