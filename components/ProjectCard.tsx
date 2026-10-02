import Link from 'next/link'
import { ArrowRight, Code2, ExternalLink, Sparkles } from 'lucide-react'
import TechBadge from './TechBadge'

type PreviewTone = 'violet' | 'cyan' | 'emerald'

interface ProjectCardProps {
  title: string
  description: string
  tech: string | string[]
  href?: string
  metric?: string
  category?: string
  image?: string
  previewTone?: PreviewTone
  placeholder?: boolean
  onViewDetails?: () => void
}

const previewStyles: Record<PreviewTone, string> = {
  violet: 'from-brand-600/90 via-indigo-600/80 to-[#070a13]',
  cyan: 'from-cyan-600/85 via-brand-700/90 to-[#070a13]',
  emerald: 'from-emerald-600/80 via-teal-700/90 to-[#070a13]',
}

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  metric,
  category,
  image,
  previewTone = 'violet',
  placeholder = false,
  onViewDetails,
}: ProjectCardProps) {
  const techList = Array.isArray(tech)
    ? tech
    : tech.split(/[·•|]/).map((item) => item.trim()).filter(Boolean)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow-sm dark:border-white/[0.08] dark:bg-[#0e1322]/80 dark:hover:border-brand-400/50">
      {/* Visual Header */}
      <div
        className={`relative h-44 sm:h-48 overflow-hidden p-4 flex flex-col justify-between ${
          !image ? `bg-gradient-to-br ${previewStyles[previewTone]}` : 'bg-slate-950'
        }`}
      >
        {image ? (
          <>
            <img
              src={image}
              alt={`${title} project preview`}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Ambient gradients for high contrast on badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/60 pointer-events-none transition-opacity duration-300 group-hover:via-slate-950/20" />
          </>
        ) : (
          <>
            <div className="pointer-events-none absolute -right-6 -top-8 h-32 w-32 rounded-full border border-white/15 bg-white/5 blur-sm" />
            <div className="pointer-events-none absolute bottom-4 right-5 grid grid-cols-3 gap-1.5 opacity-60" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-sm bg-white/70" />
              ))}
            </div>
          </>
        )}

        <div className="relative z-10 flex items-start justify-between gap-3">
          {category && (
            <span className="rounded-lg border border-white/20 bg-slate-950/75 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
              {category}
            </span>
          )}
          {placeholder && (
            <span className="rounded-lg border border-amber-300/30 bg-amber-400/20 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-amber-200 shadow-sm">
              Details to verify
            </span>
          )}
        </div>

        <div className="relative z-10 flex items-center justify-between pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 px-2 py-1 text-[11px] font-mono text-white/90 shadow-sm">
            <Code2 className="h-3.5 w-3.5 text-accent-cyan" aria-hidden="true" />
            <span className="hidden xs:inline">Preview</span>
          </span>
          {metric && (
            <span className="rounded-full bg-emerald-500/25 backdrop-blur-md border border-emerald-400/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 shadow-sm">
              {metric}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-slate-950 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
            {title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {techList.map((item) => (
              <TechBadge key={item} name={item} size="xs" />
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/[0.06] flex items-center justify-between">
          {onViewDetails ? (
            <button
              type="button"
              onClick={onViewDetails}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Explore Case Study</span>
            </button>
          ) : href ? (
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
            >
              <span>View Case Study</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ) : null}

          {href && (
            <Link
              href={href}
              className="p-1 text-slate-400 hover:text-brand-500 transition-colors"
              aria-label={`External link for ${title}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
