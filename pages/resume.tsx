import { useState } from 'react'
import Layout from '../components/Layout'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import TechBadge from '../components/TechBadge'
import TechIcon from '../components/TechIcon'
import { portfolioData } from '../data/portfolio'
import {
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  FileText,
  Printer,
  Sparkles,
  AlertCircle,
  Info,
  ExternalLink,
} from 'lucide-react'

export default function Resume() {
  const [showPlaceholderNotice, setShowPlaceholderNotice] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  return (
    <Layout
      title="Curriculum Vitae — Pratap Solat"
      description="Professional resume of Pratap Solat, Software Developer & Full-Stack Engineer. Experience at NBK Software Solutions, BCS Degree, and technical skills."
    >
      {/* Header Section */}
      <section className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/[0.08] pb-6">
        <div>
          <div className="section-kicker mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pratap Solat — <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Software Developer Engineer | Full-Stack Web & Mobile Developer · Pune, India
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0e1322] border border-slate-200/80 dark:border-white/[0.08] rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <Printer className="w-4 h-4 text-brand-500" />
            <span>Print Resume</span>
          </button>

          {/* Download button with placeholder indicator */}
          <div className="relative">
            <a
              href="/resume.pdf"
              download="Pratap_Solat_Resume.pdf"
              onClick={() => setShowPlaceholderNotice(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-brand-600 rounded-xl shadow-glow-sm hover:bg-brand-700 hover:scale-[1.02] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Notice about placeholder PDF */}
      <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-3">
        <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-semibold block">Resume PDF Notice</strong>
          <p>
            The downloadable resume file is currently linked to the repository placeholder (<code>public/resume.pdf</code>). Replace this file with your finalized personal PDF to make it immediately downloadable by recruiters. You can also click <strong>Print Resume</strong> to save this web page directly as a clean PDF.
          </p>
        </div>
      </div>

      {/* Main Resume Content */}
      <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Summary, Experience, Projects, Education, Certifications */}
        <div className="lg:col-span-8 space-y-8">
          {/* Executive Summary */}
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Results-driven Computer Science graduate (CGPA: 7.8/10) with 6 months of professional engineering experience as a Software Developer Engineer at NBK Software Solutions, Pune. Skilled in full-stack web application development, cross-platform mobile engineering with Flutter, and RESTful API architecture. Proven ability delivering production systems using Java, Spring Boot, React.js, Node.js, and Python/Django. Actively seeking an entry-level Software Engineer, Java Developer, or Full-Stack Developer position.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-500" />
              <span>Work Experience</span>
            </h2>

            <div className="relative pl-6 border-l-2 border-brand-500/30 space-y-6">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-white dark:border-[#070a13] group-hover:scale-125 transition-transform" />

                  <div className="glass-card p-6 rounded-2xl space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {exp.period} ({exp.duration})
                      </span>
                    </div>

                    <ul className="space-y-2 pt-2">
                      {exp.highlights.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <TechBadge key={t} name={t} size="xs" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-500" />
              <span>Education</span>
            </h2>

            <div className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {portfolioData.education.degree}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {portfolioData.education.institution} · {portfolioData.education.location}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-900">
                  CGPA: {portfolioData.education.cgpa}
                </span>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Graduation Year: {portfolioData.education.year}
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-500" />
              <span>Verified Certifications</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioData.certifications.map((cert, i) => (
                <div
                  key={i}
                  className="glass-card p-4 rounded-xl space-y-1 hover:border-brand-500/40"
                >
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">{cert.title}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Skill Overview Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Contact Details Card */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
              Contact Overview
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{portfolioData.contact.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{portfolioData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:underline">
                  {portfolioData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <LinkedinIcon className="w-4 h-4 text-brand-500 shrink-0" />
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline truncate"
                >
                  linkedin.com/in/pratap-solat
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <GithubIcon className="w-4 h-4 text-brand-500 shrink-0" />
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline truncate"
                >
                  github.com/solatpatil-08
                </a>
              </div>
            </div>
          </div>

          {/* Languages & Technologies with Logos */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
                Technical Stack
              </h3>
              <span className="text-[10px] font-mono font-semibold text-brand-600 dark:text-brand-400">
                Core Stack
              </span>
            </div>

            <div className="space-y-3.5">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">
                  Languages
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Java', 'Python', 'Dart', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((lang) => (
                    <TechBadge key={lang} name={lang} size="xs" />
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">
                  Frameworks & Mobile
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Spring Boot', 'React.js', 'Next.js', 'Flutter', 'Node.js', 'Express', 'Django', 'Tailwind CSS'].map((fw) => (
                    <TechBadge key={fw} name={fw} size="xs" />
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">
                  Databases & Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['MySQL', 'MongoDB', 'SQLite', 'Git', 'GitHub', 'Postman', 'JWT', 'REST APIs'].map((tool) => (
                    <TechBadge key={tool} name={tool} size="xs" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Proficiency Snapshot */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
              Technical Competencies
            </h3>

            <div className="space-y-3">
              {[
                { name: 'Java & Spring Boot', pct: '90%' },
                { name: 'React.js & Next.js', pct: '85%' },
                { name: 'Flutter & Dart', pct: '80%' },
                { name: 'REST APIs & JWT Auth', pct: '90%' },
                { name: 'MySQL & MongoDB', pct: '80%' },
                { name: 'Git & Agile SDLC', pct: '85%' },
              ].map((s) => (
                <div key={s.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span>{s.name}</span>
                    <span className="font-mono text-brand-500">{s.pct}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full"
                      style={{ width: s.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Practices */}
          <div className="glass-panel p-6 rounded-2xl space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
              Engineering Practices
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                'API Design',
                'Modular Architecture',
                'Code Reviews',
                'Agile / Scrum',
                'Clean Code',
                'Cross-Device QA',
                'Time Management',
                'Database Normalization',
              ].map((c) => (
                <span key={c} className="badge-tech">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
