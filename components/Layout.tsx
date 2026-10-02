import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import PortfolioChat from './PortfolioChat'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pratap Solat',
  jobTitle: 'Software Developer / Full-Stack Engineer',
  description: 'Software developer specializing in Java, Spring Boot, React, Next.js, Flutter, and RESTful APIs.',
  email: 'mailto:solatpratap@gmail.com',
  telephone: '+91-9022961780',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  sameAs: ['https://github.com/solatpatil-08', 'https://linkedin.com/in/pratap-solat/'],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'React',
    'Next.js',
    'TypeScript',
    'Flutter',
    'RESTful APIs',
    'MySQL',
    'MongoDB',
    'Responsive Web Applications',
  ],
}

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({
  children,
  title = 'Pratap Solat — Software Developer / Full-Stack Engineer',
  description = 'Pratap Solat is a full-stack software developer building thoughtful, scalable digital products with Java, Spring Boot, React, Next.js, and Flutter.',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Pratap Solat" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#070a13" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Pratap Solat Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <div className="relative isolate flex min-h-screen flex-col overflow-x-clip bg-slate-50 text-slate-900 dark:bg-[#070a13] dark:text-slate-100 transition-colors">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {/* Ambient background glows */}
        <div
          className="pointer-events-none absolute left-1/4 top-0 h-[28rem] w-[28rem] ambient-glow-1 opacity-50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-1/3 h-[24rem] w-[24rem] ambient-glow-2 opacity-35 blur-3xl"
          style={{ animationDelay: '2.5s' }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 grid-surface" aria-hidden="true" />

        <Navbar />

        <main
          id="main-content"
          className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-8 focus:outline-none sm:px-6 sm:py-12 lg:px-8"
          tabIndex={-1}
        >
          {children}
        </main>

        <Footer />
        <PortfolioChat />
      </div>
    </>
  )
}
