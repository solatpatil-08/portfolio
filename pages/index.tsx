import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'
import { useState } from 'react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import {
  Briefcase,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('solatpratap@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const kpis = [
    { label: 'Professional Exp.', value: '6 Months', detail: 'SDE at NBK Software', icon: Briefcase, color: 'from-brand-500 to-indigo-600' },
    { label: 'Process Efficiency', value: '60% Cut', detail: 'Gatepass App Optimization', icon: Zap, color: 'from-accent-cyan to-brand-500' },
    { label: 'Academic CGPA', value: '7.8 / 10', detail: 'BCS Graduate (2025)', icon: GraduationCap, color: 'from-accent-violet to-brand-500' },
    { label: 'API Performance', value: '<200ms', detail: 'Avg. Response Latency', icon: Cpu, color: 'from-emerald-500 to-accent-cyan' },
  ]

  const techCategories = [
    {
      category: 'Backend & Core',
      icon: Terminal,
      skills: ['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs', 'Node.js', 'Python', 'Django', 'PHP']
    },
    {
      category: 'Frontend & UI',
      icon: Code2,
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'Mobile & Database',
      icon: Database,
      skills: ['Flutter', 'Dart', 'MySQL', 'MongoDB', 'SQLite', 'JSON API Integration']
    },
    {
      category: 'Tools & Security',
      icon: ShieldCheck,
      skills: ['Git & GitHub', 'JWT Auth', 'Postman', 'Agile Workflows', 'SDLC', 'Vercel']
    }
  ]

  return (
    <Layout>
      {/* SECTION 1: HERO & DEVELOPER CARD */}
      <section className="relative pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Developer Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Available for Software Engineer / Java Developer Roles
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm <span className="gradient-text">Pratap Solat</span>
              <br />
              <span className="text-2xl sm:text-4xl text-slate-700 dark:text-slate-300 font-semibold">
                Full-Stack & Mobile Engineer
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Results-driven Computer Science graduate with hands-on professional experience building production-grade web and mobile applications using <strong className="text-slate-900 dark:text-white">Java, Spring Boot, React, and Flutter</strong>.
            </p>

            {/* Contact quick links */}
            <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                <span>Pune, India</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 hover:bg-brand-50 dark:hover:bg-brand-950/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-500" />
                <span>{copiedEmail ? 'Email Copied!' : 'solatpratap@gmail.com'}</span>
              </button>
              <a
                href="tel:+919022961780"
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 hover:bg-brand-50 dark:hover:bg-brand-950/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-500" />
                <span>+91-9022961780</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-cyan rounded-xl shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] transition-all duration-200"
              >
                <Rocket className="w-4 h-4" />
                <span>View Projects</span>
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-brand-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-brand-500" />
                <span>View Resume</span>
              </Link>
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/solatpatil-08"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/pratap-solat/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-105"
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
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-violet opacity-50 blur-lg animate-pulse-glow" />

              {/* Main Card */}
              <div className="relative rounded-3xl glass-panel p-6 space-y-6 text-center">
                
                {/* Avatar with Status Ring */}
                <div className="relative inline-block mx-auto">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-brand-500 via-indigo-500 to-accent-cyan shadow-glow-md">
                    <img
                      src="/avatar-placeholder.svg"
                      alt="Pratap Solat"
                      className="w-full h-full rounded-full object-cover bg-slate-800"
                    />
                  </div>
                  <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm" title="Active"></span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Pratap Solat</h2>
                  <p className="text-xs font-mono text-brand-600 dark:text-brand-400 mt-1">Software Engineer (SDE)</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">NBK Software Solutions Alumni</p>
                </div>

                {/* Floating Skill Badges */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                  {['Java', 'Spring Boot', 'React.js', 'Flutter', 'REST APIs', 'MySQL'].map((skill) => (
                    <span key={skill} className="badge-tech">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href="mailto:solatpratap@gmail.com"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-brand-50 dark:hover:bg-brand-900/50 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700/80 transition-all"
                  >
                    <Mail className="w-4 h-4 text-brand-500" />
                    <span>Send Direct Message</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: KPI & HIGHLIGHT COUNTERS */}
      <section className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon
            return (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 flex flex-col justify-between group hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">{kpi.label}</span>
                  <div className={`p-2 rounded-xl bg-gradient-to-tr ${kpi.color} text-white shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{kpi.value}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{kpi.detail}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 3: TECH MATRIX GRID */}
      <section className="py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Skill Set & Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Tech Stack Matrix
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mt-2 md:mt-0">
            Engineered modern applications across backend services, mobile frameworks, web UIs, and relational databases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, index) => {
            const Icon = cat.icon
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 space-y-4 hover:border-brand-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-900">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 4: WORK EXPERIENCE SPOTLIGHT */}
      <section className="py-10">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/70 dark:border-slate-800/70 pb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Work Experience Spotlight
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Software Developer Engineer
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                NBK Software Solutions · Pune, India
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-900 text-xs font-mono font-semibold text-brand-600 dark:text-brand-300">
              Oct 2025 – Mar 2026 (6 Mos)
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {[
              'Engineered a Digital Gatepass Application using Flutter and Spring Boot, replacing manual paper check-ins for 100+ daily transactions and reducing check-in processing time by ~60%.',
              'Designed and consumed 10+ RESTful APIs enabling real-time bi-directional data exchange between Flutter mobile clients and Spring Boot backend services.',
              'Implemented secure JWT-based authentication and role-based access control (RBAC) for administrative monitoring dashboards.',
              'Participated actively across full SDLC lifecycle: requirements analysis, database schema design, cross-browser/device testing, and production deployment.'
            ].map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>

          {/* Tech tags used in role */}
          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Key Tech:</span>
            {['Flutter', 'Java', 'Spring Boot', 'REST API', 'MySQL', 'JWT', 'Agile'].map((t) => (
              <span key={t} className="badge-tech">
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: FEATURED PROJECTS */}
      <section className="py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Production Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group"
          >
            <span>See All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title="Digital Gatepass Platform"
            description="End-to-end digital gatepass platform (mobile + backend) digitizing entry/exit records with role-based admin monitoring."
            tech="Flutter · Java · Spring Boot · MySQL · JWT"
            href="/projects"
            metric="~60% Process Time Cut"
            category="Full-Stack & Mobile"
          />
          <ProjectCard
            title="Pre-School Management"
            description="Full-featured web portal managing student enrollment, staff records, and interactive scheduling with reusable React components."
            tech="React.js · Node.js · MongoDB · Tailwind CSS"
            href="/projects"
            metric="15+ React Components"
            category="Web Application"
          />
          <ProjectCard
            title="Attendance Tracking System"
            description="Web-based attendance tracking platform enabling teachers to manage real-time attendance for 200+ students effortlessly."
            tech="Python · Django · SQLite · Bootstrap"
            href="/projects"
            metric="200+ Active Students"
            category="Web Application"
          />
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION BANNER */}
      <section className="py-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-cyan p-8 sm:p-12 text-white shadow-glow-md overflow-hidden">
          
          {/* Background Decorative Blob */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Great Together</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Looking for a Skilled Software Engineer?
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              I am actively seeking entry-level Software Engineer, Java Developer, or Full-Stack Developer opportunities. Let's discuss how I can contribute to your engineering team.
            </p>
            
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 text-sm font-bold text-brand-700 bg-white rounded-xl shadow-md hover:bg-slate-100 hover:scale-[1.02] transition-all"
              >
                Get In Touch
              </Link>
              <a
                href="mailto:solatpratap@gmail.com"
                className="px-6 py-3 text-sm font-bold text-white bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl backdrop-blur-md transition-all"
              >
                solatpratap@gmail.com
              </a>
            </div>
          </div>

        </div>
      </section>

    </Layout>
  )
}
