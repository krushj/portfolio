import { motion } from 'framer-motion'
import type { User } from '../../types/User'
import { Icon } from '../shared/Icon'
import { ThemeToggle } from '../shared/ThemeToggle'

interface HeroSectionProps {
  user: User
}

export function HeroSection({ user }: HeroSectionProps) {
  const emailContact = user.contact.find(c => c.id === 'email')
  const linkedinContact = user.contact.find(c => c.id === 'linkedin')
  const mediumContact = user.contact.find(c => c.id === 'medium')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40">
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.08),_transparent_50%),radial-gradient(circle_at_80%_80%,_rgba(99,102,241,0.08),_transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.15),_transparent_50%),radial-gradient(circle_at_80%_80%,_rgba(99,102,241,0.15),_transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-slate-50 mb-4 bg-clip-text"
          >
            {user.name}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6"
          >
            {user.headline}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Building performant, data-intensive web applications with a focus on backend and full-stack development.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm text-slate-500 dark:text-slate-400 mb-10"
          >
            Currently at Equity Data Science, Mumbai
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <motion.a
              href={`public/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-slate-800 dark:hover:bg-white transition-all duration-200 min-h-[44px] flex items-center justify-center"
            >
              View Resume (PDF)
            </motion.a>
            <motion.a
              href={emailContact?.url || '#'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg font-semibold border-2 border-slate-900 dark:border-slate-200 shadow-lg hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {emailContact && (
              <motion.a
                href={emailContact.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Email"
              >
                <Icon name="mail" />
              </motion.a>
            )}
            {linkedinContact && (
              <motion.a
                href={linkedinContact.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </motion.a>
            )}
            {mediumContact && (
              <motion.a
                href={mediumContact.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Medium"
              >
                <Icon name="medium" />
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

