import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <Link href="#home" className="text-2xl font-bold gradient-text mb-6">
            LT
          </Link>

          <div className="flex space-x-6 mb-6">
            <Link
              href="https://github.com/cooleo273"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/leul-tadesse-386bb3225/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            {/* <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link> */}
          </div>

          <div className="w-24 h-1 bg-primary/20 rounded-full mb-6"></div>

          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Leul Teferi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
