import Link from 'next/link'
import { ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string
  href?: string
  metric?: string
  category?: string
}

export default function ProjectCard({ title, description, tech, href, metric, category }: ProjectCardProps) {
  const techList = tech.split('·').map((t) => t.trim())

  return (
    <article className="group relative rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden border border-slate-200/70 dark:border-slate-800/70 hover:border-brand-500/50 dark:hover:border-brand-400/50 transition-all duration-300">
      
      {/* Top Ambient Glow Accent on Hover */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-all duration-500" />

      <div>
        {/* Category & Metric Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {category && (
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-0.5 rounded-full border border-brand-200 dark:border-brand-900">
              {category}
            </span>
          )}
          {metric && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-900">
              <Sparkles className="w-3 h-3" />
              {metric}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex items-center gap-2">
          <Layers className="w-5 h-5 text-brand-500 shrink-0" />
          <span>{title}</span>
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {techList.map((item, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / CTA Link */}
      {href && (
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group/link"
          >
            <span>Explore Project Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          {href !== '#' && (
            <Link href={href} aria-label={`View ${title}`} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </article>
  )
}
