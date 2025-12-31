import { motion } from 'framer-motion'
import type { Certification } from '../../types/Certification'
import { Section } from '../shared/Section'
import { formatDate } from '../../utils/formatting'

interface CertificationsSectionProps {
  certifications: Certification[]
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="block bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md dark:shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
              {cert.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold">{cert.issuer}</span>
              <span>·</span>
              <span>{formatDate(cert.date)}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
