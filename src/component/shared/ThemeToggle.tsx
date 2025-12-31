import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') {
        return saved === 'dark'
      }
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <motion.button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 text-slate-800 dark:text-slate-100 shadow-lg dark:shadow-xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-xl dark:hover:shadow-2xl hover:border-slate-400 dark:hover:border-slate-600"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Icon name={isDark ? 'lightMode' : 'darkMode'} />
    </motion.button>
  )
}

