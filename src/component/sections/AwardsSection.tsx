import { motion } from 'framer-motion'
import type { Award } from '../../types/Award'
import { Section } from '../shared/Section'
import { formatDate } from '../../utils/formatting'

interface AwardsSectionProps {
  awards: Award[]
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <Section id="awards" title="Awards">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, index) => {
          const CardContent = award.url ? motion.a : motion.div
          const cardProps = award.url
            ? {
                href: award.url,
                target: '_blank' as const,
                rel: 'noopener noreferrer' as const
              }
            : {}

          return (
            <CardContent
              key={award.id}
              {...cardProps}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={award.url ? { y: -6, scale: 1.03 } : undefined}
              className={`block bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md dark:shadow-xl border-2 border-slate-200 dark:border-slate-700 ${
                award.url ? 'hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 cursor-pointer' : ''
              }`}
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                {award.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-3">
                <span className="font-semibold">{award.issuer}</span>
                <span>·</span>
                <span>{formatDate(award.date)}</span>
              </div>
              {award.description && (
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {award.description}
                </p>
              )}
              {award.highlights && award.highlights.length > 0 && (
                <ul className="space-y-2 mt-3">
                  {award.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          )
        })}
      </div>
    </Section>
  )
}
