"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Server,
  Layout,
  Terminal,
  Layers,
  Globe,
  Cpu,
  Palette,
  GitBranch,
  Smartphone,
  Cloud,
  Shield,
} from "lucide-react"

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

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

    const elements = skillsRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const skillGroups = [
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: [
        { name: "React", icon: <Code className="h-4 w-4" />, level: 90 },
        { name: "Next.js", icon: <Globe className="h-4 w-4" />, level: 85 },
        { name: "TypeScript", icon: <Code className="h-4 w-4" />, level: 80 },
        { name: "Tailwind CSS", icon: <Palette className="h-4 w-4" />, level: 95 },
        { name: "HTML/CSS", icon: <Layers className="h-4 w-4" />, level: 90 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Node.js", icon: <Server className="h-4 w-4" />, level: 85 },
        { name: "Express", icon: <Cpu className="h-4 w-4" />, level: 80 },
        { name: "REST APIs", icon: <Globe className="h-4 w-4" />, level: 90 },
        { name: "GraphQL", icon: <Database className="h-4 w-4" />, level: 75 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "PostgreSQL", icon: <Database className="h-4 w-4" />, level: 85 },
        { name: "MongoDB", icon: <Database className="h-4 w-4" />, level: 80 },
        { name: "Supabase", icon: <Shield className="h-4 w-4" />, level: 90 },
        { name: "Prisma", icon: <Layers className="h-4 w-4" />, level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git", icon: <GitBranch className="h-4 w-4" />, level: 90 },
        { name: "Docker", icon: <Cloud className="h-4 w-4" />, level: 75 },
        { name: "CI/CD", icon: <Cpu className="h-4 w-4" />, level: 80 },
        { name: "AWS", icon: <Cloud className="h-4 w-4" />, level: 70 },
        { name: "Vercel", icon: <Smartphone className="h-4 w-4" />, level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" ref={skillsRef} className="py-24 skills-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="animate-on-scroll opacity-0 inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-sm font-medium">
            My Expertise
          </div>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            Skills & Technologies
          </h2>
          <div className="animate-on-scroll opacity-0 w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="animate-on-scroll opacity-0 text-center text-muted-foreground max-w-2xl">
            I'm constantly learning and expanding my skill set to stay at the forefront of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="animate-on-scroll opacity-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">{group.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{group.title}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="p-1.5 rounded-md bg-primary/10 mr-2">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
