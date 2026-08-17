import Layout from '../components/Layout'
export default function Resume() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Resume</h1>
      <p className="mt-4">Download a PDF resume or view highlights below.</p>
      <div className="mt-6">
        <a className="px-4 py-2 border rounded" href="/resume.pdf" download>Download Resume (PDF)</a>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="mt-4 list-disc list-inside">
          <li><strong>Senior Frontend Engineer</strong> — Company ABC (2022–Present) — Built customer-facing web platform used by X enterprise clients.</li>
          <li><strong>Frontend Engineer</strong> — Company XYZ (2019–2022) — Led migration to TypeScript and component library.</li>
        </ul>
      </section>
    </Layout>
  )
}
