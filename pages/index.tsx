import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold">Your Name</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-3">
            Professional tagline — e.g., "Frontend engineer building enterprise-grade web applications."
          </p>
          <p className="mt-6 text-slate-700 dark:text-slate-200">
            Short bio (2–3 sentences). Replace this with a concise, impact-focused summary: your role, experience, and what you deliver.
          </p>
          <div className="mt-6 flex space-x-3">
            <a href="/resume" className="px-4 py-2 border rounded">Download Resume</a>
            <Link href="/contact"><a className="px-4 py-2 bg-brand-500 text-white rounded">Contact</a></Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/avatar-placeholder.svg" alt="Your photo" className="w-48 h-48 rounded-full object-cover border" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <ProjectCard title="Project One" description="Short description of project one and its impact." tech="Next.js • TypeScript • Tailwind" href="#" />
          <ProjectCard title="Project Two" description="Short description of project two and its impact." tech="React • Node • Postgres" href="#" />
          <ProjectCard title="Project Three" description="Short description of project three and its impact." tech="Python • ML • AWS" href="#" />
        </div>
        <div className="mt-6">
          <Link href="/projects"><a className="text-sm underline">See all projects</a></Link>
        </div>
      </section>
    </Layout>
  )
}
