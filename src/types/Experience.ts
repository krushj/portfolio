import type { Project } from './Project'

export interface Experience {
  id: string
  role: string
  company: string
  employmentType?: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship'
  startDate: string
  endDate?: string
  location?: string
  summary?: string
  projects?: Project[]
}

