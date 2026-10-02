import Link from 'next/link'
import { Terminal, Mail, Phone, ArrowUp, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { portfolioData } from '../data/portfolio'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-slate-200/80 dark:border-white/[0.08] bg-white/60 dark:bg-[#070a13]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold shadow-glow-sm">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                PRATAP SOLAT
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Software Developer & Full-Stack Engineer based in Pune, India. Focused on building thoughtful, scalable web and mobile applications using Java, Spring Boot, React, and Flutter.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0e1322] text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-white/[0.08] transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0e1322] text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-white/[0.08] transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                aria-label="Email Pratap"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0e1322] text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-white/[0.08] transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${portfolioData.contact.phone.replace(/[^0-9+]/g, '')}`}
                aria-label="Call Pratap"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0e1322] text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-white/[0.08] transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  About & Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Curriculum Vitae
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Status & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
                Availability
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Open for Full-Time Roles</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                Pune, India · IST (UTC+5:30)
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#0e1322] border border-slate-200 dark:border-white/[0.08] rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/60 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Pratap Solat. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Engineered with precision in Pune, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
