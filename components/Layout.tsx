import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Background Animated Gradient Mesh Glows */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 ambient-glow-1 opacity-70 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 ambient-glow-2 opacity-60 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-[500px] h-[500px] ambient-glow-1 opacity-40 blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Grid Pattern Background Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
