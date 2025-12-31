import { motion } from 'framer-motion'
import { useMemo } from 'react'
import type { Skill, DisplayCategory } from '../../types/Skill'
import { Section } from '../shared/Section'

interface SkillsSectionProps {
  skills: Skill[]
}

interface SkillWithColor {
  skill: Skill
  color: string
}

// Category color mapping
const categoryColors: Record<DisplayCategory, string> = {
  'backend': '#3B82F6', // Blue
  'frontend': '#A855F7', // Purple
  'database': '#06B6D4', // Cyan
  'cloud': '#F97316', // Orange
  'tools': '#22C55E' // Green
}

// Category names for legend
const categoryNames: Record<DisplayCategory, string> = {
  'backend': 'Backend',
  'frontend': 'Frontend',
  'database': 'Database',
  'cloud': 'Cloud',
  'tools': 'Tools'
}

function SkillChip({ skillWithColor, index }: { skillWithColor: SkillWithColor; index: number }) {
  // Random entrance direction for variety
  const directions = [
    { x: -50, y: -50 },
    { x: 50, y: -50 },
    { x: -50, y: 50 },
    { x: 50, y: 50 },
    { x: 0, y: -50 },
    { x: 0, y: 50 },
    { x: -50, y: 0 },
    { x: 50, y: 0 }
  ]
  const direction = directions[index % directions.length]
  const rotation = (index % 3 - 1) * 15 // -15, 0, or 15 degrees

  return (
    <motion.span
      initial={{ 
        opacity: 0, 
        scale: 0,
        x: direction.x,
        y: direction.y,
        rotate: rotation
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        type: 'spring',
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.1, 
        y: -5,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.3 }
      }}
      animate={{
        y: [0, -8, 0],
        transition: {
          duration: 3 + (index % 3),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2
        }
      }}
      className="px-4 py-2 rounded-full text-sm font-semibold text-white cursor-pointer shadow-md hover:shadow-xl"
      style={{
        backgroundColor: skillWithColor.color
      }}
    >
      {skillWithColor.skill.name}
    </motion.span>
  )
}

function Legend() {
  const legendItems: Array<{ category: DisplayCategory; color: string; name: string }> = [
    { category: 'backend', color: categoryColors.backend, name: categoryNames.backend },
    { category: 'frontend', color: categoryColors.frontend, name: categoryNames.frontend },
    { category: 'database', color: categoryColors.database, name: categoryNames.database },
    { category: 'cloud', color: categoryColors.cloud, name: categoryNames.cloud },
    { category: 'tools', color: categoryColors.tools, name: categoryNames.tools }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 overflow-x-hidden"
    >
      {legendItems.map((item, index) => (
        <motion.div
          key={item.category}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          className="flex items-center gap-2"
        >
          <div
            className="w-4 h-4 rounded"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
            {item.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  // Flatten all skills with their category colors
  const skillsWithColors = useMemo<SkillWithColor[]>(() => {
    return skills
      .filter((skill) => skill.displayCategory) // Only include skills with displayCategory
      .map((skill) => ({
        skill,
        color: categoryColors[skill.displayCategory!]
      }))
  }, [skills])

  return (
    <Section id="skills" title="Skills">
      {/* Centered Skills Container */}
      <div className="max-w-5xl mx-auto px-6 min-h-[calc(100vh-200px)] flex flex-col justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-wrap justify-center items-center gap-3 md:gap-4 overflow-x-hidden py-16"
        >
          {skillsWithColors.map((skillWithColor, index) => (
            <SkillChip
              key={skillWithColor.skill.id}
              skillWithColor={skillWithColor}
              index={index}
            />
          ))}
        </motion.div>

        {/* Legend */}
        <Legend />
      </div>
    </Section>
  )
}
