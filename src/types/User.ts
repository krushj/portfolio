import type { Skill } from './Skill'
import type { Contact } from './Contact'

export interface User {
  id: string
  name: string
  headline: string
  resumeUrl?: string
  contact: Contact[]
  skills: Skill[]
}

