import type { User } from './User'
import type { Experience } from './Experience'
import type { Project } from './Project'
import type { Education } from './Education'
import type { Award } from './Award'
import type { Certification } from './Certification'

export interface PortfolioData {
  user: User
  experiences: Experience[]
  projects: Project[]
  education: Education[]
  awards: Award[]
  certifications: Certification[]
}

