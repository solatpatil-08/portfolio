import Layout from '../components/Layout'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
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
  Sparkles
} from 'lucide-react'

export default function Resume() {
  const handlePrint = () => {
    window.print()
  }

  const certifications = [
    { title: 'Full Stack Java with Angular', provider: 'Symbiosis Skill & Professional University' },
    { title: 'Generative AI Literacy', provider: 'NASSCOM, FutureSkills Prime' },
    { title: 'Enterprise Design Thinking Practitioner', provider: 'IBM SkillsBuild' },
    { title: 'LLM for Young Developers', provider: 'NASSCOM & Meta' },
    { title: 'AI Skills Passport', provider: 'EY & Microsoft' },
  ]

  return (
    <Layout>
      {/* Header */}
      <section className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-900 text-xs font-mono font-semibold text-brand-600 dark:text-brand-400 mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pratap Solat — <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Software Developer Engineer | Full-Stack Web & Mobile Engineer (Pune, India)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <Printer className="w-4 h-4 text-brand-500" />
            <span>Print Resume</span>
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 rounded-xl shadow-glow-sm hover:scale-[1.02] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </section>

      {/* Main Resume Grid */}
      <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Experience, Projects, Education, Certifications */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Executive Summary */}
          <div className="glass-card p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Results-driven Computer Science graduate (CGPA: 7.8/10) with 6 months of professional experience as a Software Developer Engineer at NBK Software Solutions, Pune. Skilled in full-stack web development, cross-platform mobile engineering (Flutter), and RESTful API design. Delivered production-grade applications using Java, Spring Boot, React.js, Node.js, and Python/Django. Actively seeking an entry-level Software Engineer or Java Developer role to build impactful technology products.
            </p>
          </div>

          {/* Work Experience Timeline */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-500" />
              <span>Work Experience</span>
            </h2>

            <div className="relative pl-6 border-l-2 border-brand-500/30 space-y-6">
              
              {/* Timeline Item 1 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />
                
                <div className="glass-card p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        Software Developer Engineer
                      </h3>
                      <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                        NBK Software Solutions · Pune, India
                      </p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Oct 2025 – Mar 2026
                    </span>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {[
                      'Engineered a Digital Gatepass Application using Flutter and Spring Boot, replacing a paper-based entry system and reducing check-in processing time by ~60%.',
                      'Designed and consumed 10+ RESTful APIs enabling real-time data exchange between mobile clients and the Spring Boot backend.',
                      'Implemented secure JWT-based authentication and a role-based admin dashboard.',
                      'Participated in the full SDLC — requirements analysis, system design, development, QA, and production deployment.',
                      'Conducted browser and device testing across multiple configurations to ensure cross-platform compatibility.'
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Key Projects Summary */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-500" />
              <span>Project Summary</span>
            </h2>

            <div className="grid grid-cols-1 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Digital Gatepass Application</h3>
                <p className="text-xs font-mono text-brand-600 dark:text-brand-400">Flutter · Java · Spring Boot · REST API · MySQL · JWT</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">Architected end-to-end digital gatepass platform with real-time pass generation and sub-200ms average API response time.</p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Pre-School Management System</h3>
                <p className="text-xs font-mono text-brand-600 dark:text-brand-400">React.js · Node.js · MongoDB · Tailwind CSS · REST API</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">Built portal managing student enrollment and staff scheduling with 15+ reusable responsive React components.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-500" />
              <span>Education</span>
            </h2>

            <div className="glass-card p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Bachelor of Computer Science (BCS)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Dr. Babasaheb Ambedkar Marathwada University, Pune, India
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-900">
                  CGPA: 7.8 / 10
                </span>
                <p className="text-xs font-mono text-slate-400 mt-1">Graduated: 2025</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-500" />
              <span>Certifications</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <div key={i} className="glass-card p-4 rounded-xl border border-slate-200/70 dark:border-slate-800/70 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sidebar Contact & Skills Overview */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Contact Details Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
              Contact Overview
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>+91-9022961780</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="mailto:solatpratap@gmail.com" className="hover:underline">solatpratap@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <LinkedinIcon className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="https://linkedin.com/in/pratap-solat/" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/pratap-solat</a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <GithubIcon className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="https://github.com/solatpatil-08" target="_blank" rel="noreferrer" className="hover:underline">github.com/solatpatil-08</a>
              </div>
            </div>
          </div>

          {/* Technical Skills & Proficiency */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
              Technical Skillset
            </h3>

            <div className="space-y-3">
              {[
                { name: 'Java & Spring Boot', pct: '90%' },
                { name: 'React.js & Next.js', pct: '85%' },
                { name: 'Flutter & Dart', pct: '80%' },
                { name: 'REST APIs & JWT', pct: '90%' },
                { name: 'MySQL & MongoDB', pct: '80%' },
                { name: 'Git & Agile SDLC', pct: '85%' },
              ].map((s) => (
                <div key={s.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span>{s.name}</span>
                    <span className="font-mono text-brand-500">{s.pct}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full" style={{ width: s.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {['Problem Solving', 'Quick Learner', 'Team Collaboration', 'Attention to Detail', 'Time Management', 'Agile Workflows', 'REST Architecture'].map((c) => (
                <span key={c} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
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
