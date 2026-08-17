import Link from 'next/link'

export default function ProjectCard({ title, description, tech, href }:{
  title: string, description: string, tech: string, href?: string
}) {
  return (
    <article className="border rounded p-4 hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-3 text-xs text-slate-500">{tech}</div>
      {href && (
        <div className="mt-4">
          <Link href={href}><a className="text-sm text-brand-500 underline">View project</a></Link>
        </div>
      )}
    </article>
  )
}
