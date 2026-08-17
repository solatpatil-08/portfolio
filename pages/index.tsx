import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold">PRATAP SOLAT</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-3">
            Software Developer — Full-stack web & mobile engineer (Java | Spring Boot | React | Flutter)
          </p>
          <p className="mt-6 text-slate-700 dark:text-slate-200">
            Results-driven Computer Science graduate with professional experience building production-grade
            web and mobile applications. Skilled in full-stack development, RESTful API design, and cross-platform
            mobile engineering. Seeking entry-level Software Engineer / Java Developer / Web Developer roles where I
            can contribute to building impactful technology products.
          </p>

          <ul className="mt-4 text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>📍 Pune, India</li>
            <li>✉️ <a href="mailto:solatpratap@gmail.com" className="underline">solatpratap@gmail.com</a></li>
            <li>📞 +91-9022961780</li>
            <li>LinkedIn: <a href="https://linkedin.com/in/pratap-solat/" className="underline">pratap-solat</a></li>
            <li>GitHub: <a href="https://github.com/solatpatil-08" className="underline">solatpatil-08</a></li>
          </ul>

          <div className="mt-6 flex space-x-3">
            <a href="/resume" className="px-4 py-2 border rounded">View Resume</a>
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
          <ProjectCard title="Digital Gatepass Application" description="End-to-end digital gatepass platform (mobile + backend) reducing manual workflows and processing time." tech="Flutter · Java · Spring Boot · MySQL · JWT" href="#projects" />
          <ProjectCard title="Pre-School Management System" description="Full-featured web portal for managing student enrollment, staff records and scheduling." tech="React.js · Node.js · MongoDB · Tailwind CSS" href="#projects" />
          <ProjectCard title="Online Attendance Tracking System" description="Web-based attendance system for teachers to track and manage student attendance." tech="Python · Django · SQLite · Bootstrap" href="#projects" />
        </div>
        <div className="mt-6">
          <Link href="/projects"><a className="text-sm underline">See all projects</a></Link>
        </div>
      </section>
    </Layout>
  )
}
