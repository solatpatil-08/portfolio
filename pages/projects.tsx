import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Digital Gatepass Application',
      description: 'Architected an end-to-end digital gatepass platform, digitizing entry/exit records and enabling role-based admin dashboards for monitoring and reporting.',
      tech: 'Flutter · Java · Spring Boot · MySQL · JWT',
      href: '#'
    },
    {
      title: 'Pre-School Management System',
      description: 'Built a portal for managing student enrollment, staff records and daily scheduling, with reusable React components and RESTful APIs.',
      tech: 'React.js · Node.js · MongoDB · Tailwind CSS',
      href: '#'
    },
    {
      title: 'Online Attendance Tracking System',
      description: 'Developed a web-based attendance system with Django backend and mobile-responsive UI using Bootstrap.',
      tech: 'Python · Django · SQLite · Bootstrap',
      href: '#'
    }
  ]

  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Project details</h2>
        <div className="mt-4 space-y-6">
          <article>
            <h3 className="font-semibold">Digital Gatepass Application</h3>
            <p className="text-sm text-slate-600">Engineered a digital gatepass system replacing paper workflows for 100+ daily transactions. Implemented JWT authentication, REST APIs, and a role-based admin dashboard; achieved sub-200ms average API response time.</p>
          </article>

          <article>
            <h3 className="font-semibold">Pre-School Management System</h3>
            <p className="text-sm text-slate-600">Delivered a MERN-based portal with 15+ reusable React components and RESTful backend APIs to manage enrollment, staff records, and scheduling.</p>
          </article>

          <article>
            <h3 className="font-semibold">Online Attendance Tracking System</h3>
            <p className="text-sm text-slate-600">Built a Django-based attendance system used to record and track attendance for 200+ students in real time with a mobile-responsive UI.</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}
