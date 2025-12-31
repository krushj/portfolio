import { motion } from 'framer-motion'
import { Icon } from './Icon'
import { Chip } from './Chip'
import { calculateMetrics, getMetricColor } from '../../utils/metrics'
import type { Project } from '../../types/Project'

interface ProjectProps {
  project: Project
  compact?: boolean
  index?: number
}

export function Project({ 
  project,
  compact = false,
  index = 0
}: ProjectProps) {
  const calculatedMetrics = project.improvements ? calculateMetrics(project.improvements) : []

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white dark:bg-slate-900 rounded-xl p-6 ${
        compact 
          ? '' 
          : 'shadow-md dark:shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300'
      }`}
    >
      {/* Project Name */}
      <h4 className={`font-semibold text-slate-900 dark:text-slate-50 mb-3 ${compact ? 'text-lg' : 'text-xl'}`}>
        {project.name}
      </h4>
      
      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Chip key={tech} label={tech} className={compact ? 'text-xs' : 'text-sm'} />
          ))}
        </div>
      )}
      
      {/* Description: Bullet Points */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-6">
          <ul className="space-y-2">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2">
                <span className="text-blue-500 dark:text-blue-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Metrics */}
      {calculatedMetrics.length > 0 && (
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {calculatedMetrics.map((metric, idx) => {
              const barColor = getMetricColor(metric.type)
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  {/* Header: Percentage + Label */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-slate-900 dark:text-slate-50">{metric.percentage}%</span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">{metric.label}</span>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      {metric.displayBefore} → {metric.displayAfter}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 + 0.2, ease: 'easeOut' }}
                      className={`h-full ${barColor} rounded-full`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}

      {/* Action Links */}
      {(project.repoUrl || project.liveUrl) && (
        <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          {project.repoUrl && (
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors min-h-[44px]"
            >
              <Icon name="github" />
              View Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors min-h-[44px]"
            >
              <Icon name="externalLink" />
              Live Demo
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  )
}

