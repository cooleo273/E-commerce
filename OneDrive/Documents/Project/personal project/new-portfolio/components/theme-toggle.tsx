"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full bg-secondary/50 hover:bg-secondary/80 transition-all duration-300"
    >
      {theme === "light" ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-yellow-400" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
