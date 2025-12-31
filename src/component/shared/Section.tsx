import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title: string
  children: ReactNode
  action?: ReactNode
}

export function Section({ id, title, children, action }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 px-6 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="flex items-center justify-between gap-4 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 transition-colors duration-300">{title}</h2>
          {action}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  )
}

