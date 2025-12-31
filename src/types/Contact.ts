import type { IconName } from "./SocialMedia";

export interface Contact {
    id: string;
    label: string
    value: string
    icon: IconName
    url?: string
  }