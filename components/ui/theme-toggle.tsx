"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      ) : (
        <FiMoon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      )}
    </button>
  )
}
