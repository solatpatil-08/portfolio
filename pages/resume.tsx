import Layout from '../components/Layout'

export default function Resume() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">PRATAP SOLAT — Resume</h1>

      <section className="mt-4 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold">Professional Summary</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-200">
            Results-driven Computer Science graduate (CGPA: 7.8/10) with 6 months of professional experience as a Software
            Developer Engineer at NBK Software Solutions, Pune. Skilled in full-stack web development, cross-platform mobile
            engineering (Flutter), and RESTful API design. Delivered production-grade applications using Java, Spring Boot,
            React.js, Node.js, and Python/Django. Actively seeking an entry-level Software Engineer, Java Developer, or Web
            Developer role to build impactful technology products.
          </p>

          <h2 className="mt-6 text-lg font-semibold">Work Experience</h2>
          <div className="mt-2">
            <h3 className="font-semibold">Software Developer Engineer — NBK Software Solutions — Pune, India</h3>
            <p className="text-sm text-slate-600">Oct 2025 – Mar 2026</p>
            <ul className="mt-2 list-disc list-inside text-slate-700 dark:text-slate-300">
              <li>Engineered a Digital Gatepass Application using Flutter and Spring Boot, replacing a paper-based entry system and reducing check-in processing time by ~60%.</li>
              <li>Designed and consumed 10+ RESTful APIs enabling real-time data exchange between mobile clients and the backend.</li>
              <li>Implemented secure JWT-based authentication and a role-based admin dashboard.</li>
              <li>Participated in the full SDLC — requirements analysis, system design, development, QA, and production deployment.</li>
              <li>Conducted browser and device testing across multiple configurations to ensure cross-platform compatibility.</li>
            </ul>
          </div>

          <h2 className="mt-6 text-lg font-semibold">Projects</h2>
          <div className="mt-2 space-y-4 text-slate-700 dark:text-slate-300">
            <div>
              <h4 className="font-semibold">Digital Gatepass Application</h4>
              <p className="text-sm">Flutter · Java · Spring Boot · REST API · MySQL · JWT</p>
              <p className="text-sm mt-1">Architected an end-to-end digital gatepass platform, implementing JWT-based authentication, real-time gatepass generation, and role-based admin dashboard. Designed RESTful APIs connecting Flutter frontend and Java backend with sub-200ms average response times.</p>
            </div>

            <div>
              <h4 className="font-semibold">Pre-School Management System</h4>
              <p className="text-sm">React.js · Node.js · MongoDB · Tailwind CSS · REST API</p>
              <p className="text-sm mt-1">Built a portal managing student enrollment, staff records, and scheduling; developed 15+ reusable responsive React components and RESTful backend APIs for multiple user roles.</p>
            </div>

            <div>
              <h4 className="font-semibold">Online Attendance Tracking System</h4>
              <p className="text-sm">Python · Django · SQLite · Bootstrap</p>
              <p className="text-sm mt-1">Developed a web-based attendance management system enabling real-time attendance tracking for 200+ students; implemented Django models, views and responsive UI with Bootstrap.</p>
            </div>
          </div>

          <h2 className="mt-6 text-lg font-semibold">Education</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Bachelor of Computer Science (BCS) — Dr. Babasaheb Ambedkar Marathwada University, Pune, India — Graduated: 2025 — CGPA: 7.8/10</p>

          <h2 className="mt-6 text-lg font-semibold">Certifications</h2>
          <ul className="mt-2 list-disc list-inside text-slate-700 dark:text-slate-300">
            <li>Full Stack Java with Angular — Symbiosis Skill and Professional University</li>
            <li>Generative AI Literacy — NASSCOM, FutureSkills Prime</li>
            <li>Enterprise Design Thinking Practitioner — IBM SkillsBuild</li>
            <li>LLM for Young Developers — NASSCOM & Meta</li>
            <li>AI Skills Passport — EY & Microsoft</li>
          </ul>

          <h2 className="mt-6 text-lg font-semibold">Technical Skills</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Java, Python, JavaScript, PHP, Dart, HTML5, CSS3; Spring Boot, Hibernate, Django, Node.js, React.js, Vue.js, AngularJS, Flutter; MySQL, MongoDB, SQLite; RESTful API design, JWT authentication; Git, Postman, Agile workflows.</p>

          <h2 className="mt-6 text-lg font-semibold">Core Competencies</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Problem Solving · Quick Learner · Team Collaboration · Attention to Detail · Time Management · Effective Communication · Adaptability · Agile Workflows</p>
        </div>

        <aside className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
          <div className="text-sm">
            <p><strong>Contact</strong></p>
            <p className="mt-2">PRATAP SOLAT</p>
            <p>+91-9022961780</p>
            <p><a href="mailto:solatpratap@gmail.com" className="underline">solatpratap@gmail.com</a></p>
            <p className="mt-2"><a href="https://linkedin.com/in/pratap-solat/" className="underline">linkedin.com/in/pratap-solat/</a></p>
            <p><a href="https://github.com/solatpatil-08" className="underline">github.com/solatpatil-08</a></p>

            <div className="mt-4">
              <a href="/resume.pdf" className="px-3 py-2 border rounded text-sm block text-center">Download PDF</a>
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  )
}
