import { Icon } from './Icon'

interface ChipProps {
  label: string
  icon?: string
  className?: string
  style?: React.CSSProperties
}

export function Chip({ label, icon, className = '', style }: ChipProps) {
  return (
    <span 
      className={`inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-800 dark:text-slate-200 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-400 dark:hover:ring-slate-600 ${className}`}
      style={style}
    >
      {icon ? <Icon name={icon} /> : null}
      {label}
    </span>
  )
}