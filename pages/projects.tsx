import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    { title: 'Project One', description: 'Enterprise web app with SSO and audits', tech: 'Next.js • TypeScript', href: '#' },
    { title: 'Project Two', description: 'ETL pipeline and data warehouse', tech: 'Node • Airflow • BigQuery', href: '#' },
    { title: 'Project Three', description: 'Internal dashboard with role-based access', tech: 'React • GraphQL', href: '#' }
  ]

  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Layout>
  )
}
