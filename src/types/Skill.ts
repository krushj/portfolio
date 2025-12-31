import type { IconName } from './SocialMedia'

export type DisplayCategory = 'backend' | 'frontend' | 'cloud' | 'tools' | 'database'

export interface Skill {
  id: string
  name: string
  level: number
  displayCategory?: DisplayCategory
  icon?: IconName
  years?: number
}

