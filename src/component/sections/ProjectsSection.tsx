import { motion } from 'framer-motion'
import type { Project as ProjectType } from '../../types/Project'
import { Section } from '../shared/Section'
import { Project } from '../shared/Project'

interface ProjectsSectionProps {
  projects: ProjectType[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' as const }
    }
  }

  return (
    <Section id="projects" title="Projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <Project
              project={project}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

