export type IconName =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'dribbble'
  | 'behance'
  | 'medium'
  | 'stack-overflow'
  | 'devto'
  | 'mail'
  | 'phone'
  | 'globe'
  | 'resume'
  | 'location'
  | string

export interface SocialMedia {
  id: string
  platform: string
  url: string
  handle?: string
  icon: IconName
  ariaLabel?: string
}

