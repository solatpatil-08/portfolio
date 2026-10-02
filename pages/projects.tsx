import { useState } from 'react'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import TechBadge from '../components/TechBadge'
import { portfolioData, ProjectDetail } from '../data/portfolio'
import {
  Layers,
  Rocket,
  CheckCircle2,
  Cpu,
  Server,
  Smartphone,
  ShieldAlert,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'Full-Stack' | 'Web'>('All')
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)

  const filteredProjects =
    activeTab === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeTab)

  return (
    <Layout
      title="Engineering Projects — Pratap Solat"
      description="Detailed case studies, architectural blueprints, and production metrics for systems built by Pratap Solat."
    >
      {/* Header Section */}
      <section className="py-6 space-y-4">
        <div className="section-kicker">
          <Rocket className="w-3.5 h-3.5" />
          <span>Production Portfolio</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured <span className="gradient-text">Engineering Projects</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Production systems, full-stack platforms, and mobile applications engineered with Java, Spring Boot, React, Next.js, and Flutter.
        </p>

        {/* Filter Tabs */}
        <div className="pt-3 flex flex-wrap items-center gap-2">
          {(['All', 'Full-Stack', 'Web'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === tab
                  ? 'bg-brand-600 text-white shadow-glow-sm scale-105'
                  : 'bg-white dark:bg-[#0e1322] text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'All'
                ? 'All Projects'
                : tab === 'Full-Stack'
                  ? 'Full-Stack & Mobile'
                  : 'Web Applications'}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, idx) => (
            <ProjectCard
              key={p.id}
              title={p.name}
              description={p.summary}
              tech={p.stack}
              metric={p.metric}
              category={p.categoryLabel}
              image={p.image}
              previewTone={idx === 0 ? 'violet' : idx === 1 ? 'cyan' : 'emerald'}
              onViewDetails={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* Detailed Technical Breakdown Section */}
      <section className="py-12 space-y-10">
        <div className="border-b border-slate-200/80 dark:border-white/[0.08] pb-4 space-y-1">
          <div className="section-kicker">
            <Layers className="w-4 h-4 text-brand-500" />
            <span>Architectural Deep Dive</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            System Design & Execution Breakdown
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            A granular examination of problem spaces, engineering decisions, and measurable outcomes.
          </p>
        </div>

        <div className="space-y-8">
          {portfolioData.projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] scroll-mt-24 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 dark:border-white/[0.06] pb-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-semibold">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {project.category === 'Full-Stack' ? (
                      <Smartphone className="w-5 h-5 text-accent-cyan" />
                    ) : (
                      <Server className="w-5 h-5 text-accent-cyan" />
                    )}
                    <span>{project.name}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 font-semibold">
                    {project.metric}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-1 text-xs font-bold rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-glow-sm"
                  >
                    Open Case Study
                  </button>
                </div>
              </div>

              {/* Interface Screenshot / Visual Preview */}
              {project.image && (
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-md bg-slate-950/40 group">
                  <img
                    src={project.image}
                    alt={`${project.name} Production Interface Preview`}
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                    <span className="text-xs text-white/90 font-mono font-medium bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      Production UI & Workflow Architecture Preview
                    </span>
                  </div>
                </div>
              )}

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Challenge Addressed</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Engineering Solution</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Key Milestones & Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-100/70 dark:bg-[#070a13]/70 border border-slate-200/80 dark:border-white/[0.06] text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack & Status */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-400 font-mono mr-1">Stack:</span>
                  {project.stack.map((t) => (
                    <TechBadge key={t} name={t} size="xs" />
                  ))}
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  {project.links.statusNote}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Layout>
  )
}
