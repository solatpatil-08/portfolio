import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import HeroCanvas from '../components/HeroCanvas'
import TechBadge from '../components/TechBadge'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { portfolioData, ProjectDetail } from '../data/portfolio'
import {
  Briefcase,
  Code2,
  Cpu,
  Database,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
  CheckCircle2,
  ArrowRight,
  Clock,
  ExternalLink,
  Workflow,
} from 'lucide-react'

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const kpis = [
    {
      label: 'Professional Experience',
      value: '6 Months',
      detail: 'SDE at NBK Software Solutions',
      icon: Briefcase,
      color: 'from-brand-500 to-indigo-600',
    },
    {
      label: 'Process Optimization',
      value: '~60% Cut',
      detail: 'Gatepass Check-In Latency',
      icon: Zap,
      color: 'from-accent-cyan to-brand-500',
    },
    {
      label: 'Academic Foundation',
      value: '7.8 / 10',
      detail: 'BCS Graduate (Class of 2025)',
      icon: GraduationCap,
      color: 'from-accent-violet to-brand-500',
    },
    {
      label: 'API Performance Target',
      value: '<200ms',
      detail: 'Avg. Response Latency',
      icon: Cpu,
      color: 'from-emerald-500 to-accent-cyan',
    },
  ]

  const capabilityIcons = [Code2, Terminal, Database, ShieldCheck]

  return (
    <Layout>
      {/* SECTION 1: HERO & DEVELOPER CARD */}
      <section id="home" data-nav-section="home" className="relative pt-2 pb-16 lg:pt-6">
        {/* Subtle Canvas Background */}
        <HeroCanvas />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Developer Intro */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{portfolioData.availability.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400 font-semibold">
                Pratap Solat — Full-Stack Developer
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                I build <span className="gradient-text">thoughtful, scalable</span> digital products.
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Software Developer specializing in{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                Java, Spring Boot, React, Next.js, TypeScript, and Flutter
              </strong>
              . Experienced in engineering end-to-end web applications and high-throughput REST APIs designed for real-world reliability.
            </p>

            {/* Location & Contact Quick Links */}
            <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 bg-white/80 dark:bg-[#0e1322]/80 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                <span>{portfolioData.contact.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 dark:bg-[#0e1322]/80 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5 text-brand-500" />
                <span>{portfolioData.contact.timezone}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 bg-white/80 dark:bg-[#0e1322]/80 hover:bg-brand-50 dark:hover:bg-brand-950/60 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-colors"
                title="Copy email to clipboard"
              >
                <Mail className="w-3.5 h-3.5 text-brand-500" />
                <span>{copiedEmail ? 'Email Copied!' : portfolioData.contact.email}</span>
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-brand-600 rounded-xl shadow-glow-sm hover:bg-brand-700 hover:shadow-glow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Rocket className="w-4 h-4" />
                <span>View My Work</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0e1322] border border-slate-200/80 dark:border-white/[0.08] rounded-xl hover:border-brand-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>Contact Me</span>
              </Link>
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-[#0e1322] text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200/80 dark:border-white/[0.08] transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-[#0e1322] text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200/80 dark:border-white/[0.08] transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-violet opacity-30 blur-xl animate-pulse-glow pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Card */}
              <div className="relative rounded-3xl glass-panel p-6 sm:p-7 space-y-5 text-center">
                {/* Avatar with Status Ring */}
                <div className="relative inline-block mx-auto">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-brand-500 via-indigo-500 to-accent-cyan shadow-glow-md">
                    <img
                      src="/profile-photo.png"
                      alt="Pratap Solat"
                      className="w-full h-full rounded-full object-cover bg-slate-800"
                    />
                  </div>
                  <span
                    className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm"
                    title="Active & Available"
                  />
                </div>

                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {portfolioData.profile.name}
                  </h2>
                  <p className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold">
                    {portfolioData.profile.role}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    NBK Software Solutions Alumni · Pune, India
                  </p>
                </div>

                {/* Core Badges */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  {['Java', 'Spring Boot', 'React.js', 'Next.js', 'Flutter', 'REST APIs', 'MySQL'].map(
                    (skill) => (
                      <TechBadge key={skill} name={skill} size="xs" />
                    ),
                  )}
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <Link
                    href="/resume"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-brand-50 dark:hover:bg-brand-900/50 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700/80 transition-all"
                  >
                    <FileText className="w-4 h-4 text-brand-500" />
                    <span>View Curriculum Vitae</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: METRICS & KPI COUNTERS */}
      <section className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon
            return (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between group hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    {kpi.label}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-gradient-to-tr ${kpi.color} text-white shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {kpi.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {kpi.detail}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 3: ABOUT & SKILLS MATRIX */}
      <section id="about" data-nav-section="about" className="py-12 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-kicker">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>About & Technical Mindset</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineering with <span className="gradient-text">Purpose & Precision</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
              Combining a solid Computer Science academic foundation with hands-on professional execution across frontend, backend, and mobile technologies.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.capabilities.map((cat, index) => {
            const Icon = capabilityIcons[index % capabilityIcons.length]
            return (
              <div
                key={cat.category}
                className="glass-card p-6 rounded-2xl space-y-4 hover:border-brand-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} size="xs" />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* HOW I WORK: 4-Step Engineering Framework */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex items-center gap-2 section-kicker">
            <Workflow className="w-4 h-4 text-brand-500" />
            <span>How I Work</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              End-to-End Engineering Methodology
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
              From requirement gathering to production deployment, every project follows a disciplined, iterative development process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            {portfolioData.workingProcess.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-white/60 dark:bg-[#070a13]/60 border border-slate-200/80 dark:border-white/[0.06] space-y-2.5"
              >
                <span className="text-xs font-mono font-extrabold text-brand-600 dark:text-brand-400">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WORK EXPERIENCE SPOTLIGHT */}
      <section className="py-8">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/[0.08] pb-6">
            <div>
              <div className="section-kicker">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Work Experience Spotlight</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Software Developer Engineer
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                NBK Software Solutions · Pune, India
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-900 text-xs font-mono font-semibold text-brand-600 dark:text-brand-300">
              Oct 2025 – Mar 2026 (6 Months)
            </div>
          </div>

          <div className="space-y-3">
            {[
              'Engineered a Digital Gatepass Application using Flutter and Spring Boot, replacing manual paper check-ins for 100+ daily transactions and reducing check-in processing time by ~60%.',
              'Designed and consumed 10+ RESTful APIs enabling real-time bi-directional data exchange between Flutter mobile clients and Spring Boot backend services.',
              'Implemented secure JWT-based authentication and role-based access control (RBAC) for administrative monitoring dashboards.',
              'Participated actively across full SDLC lifecycle: requirements analysis, database schema design, cross-browser/device testing, and production deployment.',
            ].map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>

          {/* Tech tags used in role */}
          <div className="pt-4 border-t border-slate-200/60 dark:border-white/[0.06] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Key Tech:</span>
            {['Flutter', 'Java', 'Spring Boot', 'REST API', 'MySQL', 'JWT', 'Agile'].map((t) => (
              <TechBadge key={t} name={t} size="xs" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PROJECTS WITH CASE STUDY MODAL */}
      <section id="projects" data-nav-section="projects" className="py-10 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="section-kicker">
              <Sparkles className="w-4 h-4" />
              <span>Production Work & Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Featured Engineering Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group"
          >
            <span>All Projects & Architecture</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.projects.map((p, idx) => (
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

      {/* SECTION 6: CALL TO ACTION BANNER */}
      <section className="py-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-cyan p-8 sm:p-12 text-white shadow-glow-md overflow-hidden">
          {/* Background Decorative Element */}
          <div
            className="pointer-events-none absolute right-0 bottom-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Open to Opportunities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Looking for a Skilled Software Engineer?
            </h2>
            <p className="text-white/90 text-xs sm:text-base leading-relaxed">
              I am actively seeking entry-level Software Engineer, Java Developer, or Full-Stack Developer opportunities in Pune or remote. Let&apos;s discuss how my technical skills can contribute to your engineering team.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 text-sm font-bold text-brand-700 bg-white rounded-xl shadow-md hover:bg-slate-100 hover:scale-[1.02] transition-all"
              >
                Get In Touch
              </Link>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="px-6 py-3 text-sm font-bold text-white bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl backdrop-blur-md transition-all"
              >
                {portfolioData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Layout>
  )
}
