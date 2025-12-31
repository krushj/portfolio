export interface Improvement {
  label: string
  before: number
  after: number
  unit?: string  // Unit to append: 's', 'MB', 'k', etc.
}

// Calculated metric with all derived values
export interface CalculatedMetric {
  label: string
  percentage: number
  displayBefore: string
  displayAfter: string
  type: 'improvement' | 'reduction'
  description?: string
}

export interface Project {
  id: string
  name: string
  techStack: string[]
  highlights?: string[]
  improvements?: Improvement[]
  repoUrl?: string
  liveUrl?: string
}

