import { motion } from 'framer-motion'
import type { Experience } from '../../types/Experience'
import { Section } from '../shared/Section'
import { Chip } from '../shared/Chip'
import { formatDate } from '../../utils/formatting'
import { Project } from '../shared/Project'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
                className="relative pl-0 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-slate-50 dark:border-slate-900 shadow-lg hidden md:block" />
                
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md dark:shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <span>
                          {formatDate(exp.startDate)} – {formatDate(exp.endDate || 'Present')}
                        </span>
                        {exp.location && <span>· {exp.location}</span>}
                        {exp.employmentType && (
                          <Chip 
                            label={exp.employmentType} 
                            className="text-xs uppercase"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {exp.summary && (
                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                      {exp.summary}
                    </p>
                  )}

                  {exp.projects && exp.projects.length > 0 && (
                    <div className="space-y-6">
                      {exp.projects.map((project, projectIndex) => (
                        <div key={project.id} className="border-t border-slate-200 dark:border-slate-700 pt-6">
                          <Project
                            project={project}
                            compact={true}
                            index={projectIndex}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
