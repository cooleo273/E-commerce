"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "resume", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset to trigger slightly before reaching section

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Resume", href: "resume" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#home" onClick={() => scrollToSection("home")} className="text-xl font-bold gradient-text">
          LT
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                activeSection === link.href
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                  : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary-foreground",
              )}
            >
              {link.name}
            </Button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="ml-2"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-scale-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "justify-start text-sm font-medium transition-all duration-300",
                  activeSection === link.href
                    ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                    : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary-foreground",
                  `animate-fade-in animate-delay-${index * 100}`,
                )}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
