import { useEffect, useRef } from 'react'
import { X, ExternalLink, CheckCircle2, ShieldAlert, Cpu, Sparkles } from 'lucide-react'
import { GithubIcon } from './Icons'
import TechBadge from './TechBadge'
import type { ProjectDetail } from '../data/portfolio'

interface ProjectModalProps {
  project: ProjectDetail | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-2xl border border-slate-200/80 dark:border-white/[0.1] bg-white dark:bg-[#0c111f] shadow-2xl overflow-hidden transition-all my-8 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-6 bg-slate-50/50 dark:bg-slate-900/40">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                {project.categoryLabel}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {project.metric}
              </span>
            </div>
            <h2 id="project-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Close project modal"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-sm text-slate-600 dark:text-slate-300">
          {/* Visual Showcase Banner */}
          {project.image && (
            <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-md bg-slate-950">
              <img
                src={project.image}
                alt={`${project.name} system preview`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none flex items-end p-3">
                <span className="text-[11px] font-mono font-medium text-white/90 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  Production Interface & Architecture Preview
                </span>
              </div>
            </div>
          )}

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Overview
            </h3>
            <p className="leading-relaxed text-slate-700 dark:text-slate-200">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2">
              <h4 className="text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                <span>The Challenge</span>
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
              <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Key Engineering Features
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <TechBadge key={t} name={t} size="sm" />
              ))}
            </div>
          </div>

          {/* Project Source / Status Note */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <strong className="block text-slate-800 dark:text-slate-200 font-semibold mb-1">
              Project Availability & Status:
            </strong>
            {project.links.statusNote}
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/40">
          <div className="flex items-center gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-slate-900 text-white dark:bg-slate-800 hover:bg-brand-600 dark:hover:bg-brand-600 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
