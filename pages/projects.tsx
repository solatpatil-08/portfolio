import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { useState } from 'react'
import { Layers, Rocket, CheckCircle2, Cpu, Server, Smartphone } from 'lucide-react'

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'Full-Stack' | 'Web'>('All')

  const projects = [
    {
      title: 'Digital Gatepass Application',
      category: 'Full-Stack' as const,
      categoryLabel: 'Full-Stack & Mobile',
      description: 'Architected an end-to-end digital gatepass platform, digitizing entry/exit records and enabling role-based admin dashboards for real-time monitoring and analytics.',
      tech: 'Flutter · Java · Spring Boot · MySQL · JWT · REST API',
      metric: '~60% Check-In Time Cut',
      href: '#digital-gatepass',
      highlights: [
        'Replaced traditional paper-based gatepass workflows for 100+ daily visitors and employees.',
        'Engineered 10+ RESTful API endpoints delivering sub-200ms average response latency.',
        'Secured application state with JSON Web Tokens (JWT) and role-based permissions (RBAC).'
      ]
    },
    {
      title: 'Pre-School Management System',
      category: 'Web' as const,
      categoryLabel: 'Web Application',
      description: 'Built a full-featured portal for managing student enrollment, staff records, fee tracking, and daily class scheduling with modular React components.',
      tech: 'React.js · Node.js · MongoDB · Tailwind CSS · Express',
      metric: '15+ Reusable Components',
      href: '#preschool-management',
      highlights: [
        'Created 15+ custom reusable React components with responsive Tailwind CSS layout.',
        'Designed MongoDB schemas for efficient querying of student records and staff assignments.',
        'Implemented full CRUD capabilities via Node.js REST API endpoints.'
      ]
    },
    {
      title: 'Online Attendance Tracking System',
      category: 'Web' as const,
      categoryLabel: 'Web Application',
      description: 'Developed a web-based attendance system with Django backend and mobile-responsive UI for teachers to track student attendance in real time.',
      tech: 'Python · Django · SQLite · Bootstrap · HTML5',
      metric: '200+ Active Students Tracked',
      href: '#attendance-tracking',
      highlights: [
        'Engineered Django ORM data models to compute automated attendance percentages.',
        'Built a mobile-friendly Bootstrap interface for quick daily roll-call input.',
        'Generated downloadable summary reports for school administrators.'
      ]
    }
  ]

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <Layout>
      {/* Header */}
      <section className="py-6 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-900 text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">
          <Rocket className="w-3.5 h-3.5" />
          <span>Portfolio Showcase</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured <span className="gradient-text">Engineering Projects</span>
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
          A collection of production applications, full-stack web platforms, and mobile apps built with Java, Spring Boot, React, and Flutter.
        </p>

        {/* Filter Tabs */}
        <div className="pt-4 flex items-center gap-2">
          {(['All', 'Full-Stack', 'Web'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === tab
                  ? 'bg-brand-600 text-white shadow-glow-sm scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'All' ? 'All Projects' : tab === 'Full-Stack' ? 'Full-Stack & Mobile' : 'Web Applications'}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              tech={p.tech}
              metric={p.metric}
              category={p.categoryLabel}
              href={p.href}
            />
          ))}
        </div>
      </section>

      {/* Detailed Technical Breakdown Section */}
      <section className="py-12 space-y-10">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-brand-500" />
            <span>Architecture & Key Technical Details</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Deep dive into project execution, implementation details, and outcomes.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Project 1 Detail */}
          <article id="digital-gatepass" className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 scroll-mt-24 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-accent-cyan" />
                <span>Digital Gatepass Application</span>
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 font-semibold">
                Production-Grade Mobile & Backend
              </span>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Engineered a digital gatepass management system replacing physical paper entry logs for 100+ daily visitor check-ins. Built with Flutter cross-platform mobile frontend and Java Spring Boot REST backend with MySQL database.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                <span className="text-xs font-mono text-slate-400">Architecture</span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Flutter Client + Spring Boot REST</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                <span className="text-xs font-mono text-slate-400">Security</span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">JWT Token Auth & RBAC</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                <span className="text-xs font-mono text-slate-400">Key Outcome</span>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">60% Check-in Time Reduction</p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Key Technical Contributions</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Designed relational database schema in MySQL for logging visitor identity, host authorization, timestamp verification, and digital pass generation.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Created role-based security filters in Spring Boot securing endpoints for Gate Security, Admin Overseer, and Employees.</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Project 2 Detail */}
          <article id="preschool-management" className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 scroll-mt-24 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-brand-500" />
                <span>Pre-School Management System</span>
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-300 border border-brand-200 dark:border-brand-900 font-semibold">
                MERN Stack Portal
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Delivered a comprehensive web portal for preschool administrators, teachers, and parents. Features modular React dashboard layouts, MongoDB document storage, and Express.js REST services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                <span className="text-xs font-mono text-slate-400">Frontend</span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">React.js + Tailwind CSS</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                <span className="text-xs font-mono text-slate-400">Backend</span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Node.js + Express + MongoDB</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                <span className="text-xs font-mono text-slate-400">Key Outcome</span>
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">Centralized Enrollment & Staff Operations</p>
              </div>
            </div>
          </article>

          {/* Project 3 Detail */}
          <article id="attendance-tracking" className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 scroll-mt-24 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-accent-violet" />
                <span>Online Attendance Tracking System</span>
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900 font-semibold">
                Python / Django Web App
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Developed a Django web application supporting teachers in recording daily student attendance for 200+ students. Implemented responsive Bootstrap templates and automated summary statistical calculations.
            </p>
          </article>

        </div>
      </section>
    </Layout>
  )
}
