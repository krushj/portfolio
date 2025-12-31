import { motion } from 'framer-motion'
import type { Education } from '../../types/Education'
import { Section } from '../shared/Section'
import { formatDate, formatGPA } from '../../utils/formatting'

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => {
          const gpa = edu.gpa ? parseFloat(edu.gpa.split('/')[0]) : undefined
          const maxGpa = edu.gpa ? parseFloat(edu.gpa.split('/')[1] || '10.0') : 10.0

          return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md dark:shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span>
                      {formatDate(edu.startDate)} – {formatDate(edu.endDate || 'Present')}
                    </span>
                    {edu.location && <span>· {edu.location}</span>}
                    {gpa && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        GPA: {formatGPA(gpa, maxGpa)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
