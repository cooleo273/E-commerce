"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, Building, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null)

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

    const elements = resumeRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="resume" ref={resumeRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="animate-on-scroll opacity-0 inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-sm font-medium">
            My Experience
          </div>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            Resume
          </h2>
          <div className="animate-on-scroll opacity-0 w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="animate-on-scroll opacity-0 text-center text-muted-foreground max-w-2xl">
            Download my resume to learn more about my experience, education, and skills.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 flex justify-center mb-12">
          <Button
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
            asChild
          >
            <a href="#" download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <motion.div
          className="animate-on-scroll opacity-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 rounded-full bg-primary/10 mr-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Resume Preview</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-primary/10 mr-3">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold gradient-text">Work Experience</h4>
              </div>

              <div className="ml-12 space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <h5 className="font-semibold text-lg">Junior Software Engineer</h5>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        2024 - Present
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">Shega Media and Technology PLC</p>
                    <p className="text-muted-foreground text-sm">
                      Led development of multiple web applications using React, Next.js, and Node.js. And also worked on project
                      using Microsoft Power apps.   
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/70"></div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h5 className="font-semibold text-lg">Frontend Developer</h5>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        2018 - 2021
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">Digital Solutions LLC</p>
                    <p className="text-muted-foreground text-sm">
                      Developed responsive web interfaces using React and TypeScript. Collaborated with designers and
                      backend developers to implement features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-primary/10 mr-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold gradient-text">Education</h4>
              </div>

              <div className="ml-12 space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h5 className="font-semibold text-lg">B.S. Computer Science</h5>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        2014 - 2018
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">University of Technology</p>
                    <p className="text-muted-foreground text-sm">
                      Graduated with honors. Specialized in software engineering and web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
