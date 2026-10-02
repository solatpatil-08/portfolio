import React from 'react'
import TechIcon, { getTechMeta } from './TechIcon'

interface TechBadgeProps {
  name: string
  size?: 'xs' | 'sm' | 'md'
  showIcon?: boolean
  className?: string
  interactive?: boolean
}

export default function TechBadge({
  name,
  size = 'sm',
  showIcon = true,
  className = '',
  interactive = true,
}: TechBadgeProps) {
  const meta = getTechMeta(name)

  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5 gap-1',
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2',
  }

  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
  }

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-lg border border-slate-200/90 dark:border-white/[0.08] bg-slate-50/90 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-200 ${
        interactive
          ? 'hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-sm hover:bg-white dark:hover:bg-white/[0.08]'
          : ''
      } ${sizeClasses[size]} ${className}`}
      title={`${meta.label} (${meta.category || 'technology'})`}
    >
      {showIcon && (
        <TechIcon
          name={name}
          className={`${iconSizes[size]} transition-transform group-hover:scale-110`}
          colored
        />
      )}
      <span className="truncate">{meta.label}</span>
    </span>
  )
}
