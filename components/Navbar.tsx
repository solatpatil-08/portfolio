import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {
  Sun,
  Moon,
  Terminal,
  Briefcase,
  FileText,
  Mail,
  Menu,
  X,
  Sparkles,
  LayoutDashboard,
  User,
} from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/', icon: LayoutDashboard, section: 'home' },
  { name: 'About', href: '/#about', icon: User, section: 'about' },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Resume', href: '/resume', icon: FileText },
  { name: 'Contact', href: '/contact', icon: Mail },
]

export default function Navbar() {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeHomeSection, setActiveHomeSection] = useState('home')

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router.asPath])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    if (router.pathname !== '/') {
      return
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-section]'))
    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveHomeSection(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [router.pathname])

  const isActive = (link: (typeof navLinks)[number]) => {
    if (link.section) {
      return router.pathname === '/' && activeHomeSection === link.section
    }

    return router.pathname === link.href
  }

  const linkClasses = (active: boolean) =>
    `flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
      active
        ? 'bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300 ring-1 ring-brand-500/30'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#070a13]/80 transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-glow-sm transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="flex items-center gap-1.5 text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">
              PRATAP SOLAT
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-label="Available for work" />
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Full-Stack Developer
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-xl border border-slate-200/80 bg-slate-100/80 p-1 dark:border-white/[0.08] dark:bg-[#0e1322]/80 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link)

            return (
              <Link
                key={link.name}
                href={link.href}
                className={linkClasses(active)}
                aria-current={active ? 'page' : undefined}
                onClick={() => link.section && setActiveHomeSection(link.section)}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA and Controls */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              type="button"
              aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg border border-slate-200 bg-slate-100 p-2 text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/[0.08] dark:bg-[#0e1322] dark:text-slate-300 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 text-brand-600" aria-hidden="true" />
              )}
            </button>
          )}

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-xs font-bold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-slate-100 p-2 text-slate-700 dark:border-white/[0.08] dark:bg-[#0e1322] dark:text-slate-200 md:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#070a13]/95 md:hidden animate-fadeIn"
        >
          <div className="mx-auto grid max-w-6xl gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon
              const active = isActive(link)

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${linkClasses(active)} px-3.5 py-2.5 text-sm`}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    if (link.section) setActiveHomeSection(link.section)
                  }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-glow-sm"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Let&apos;s Talk
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
