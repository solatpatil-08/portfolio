import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <nav className="bg-white dark:bg-slate-800 border-b dark:border-slate-700">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="font-semibold text-lg text-brand-500">Your Name</a>
          </Link>
          <Link href="/projects"><a className="text-sm text-slate-600 dark:text-slate-300">Projects</a></Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/resume"><a className="px-3 py-1 border rounded text-sm">Resume</a></Link>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-3 py-1 rounded border text-sm"
          >
            {mounted && (theme === 'dark' ? 'Light' : 'Dark')}
          </button>
        </div>
      </div>
    </nav>
  )
}
