/**
 * The single source of truth for portfolio facts used by the site, project showcases, and chatbot.
 *
 * Update this file when Pratap's profile, work, availability, or contact details change.
 * The chatbot and project views are strictly grounded in the information defined here.
 */

export interface ProjectDetail {
  id: string
  name: string
  category: 'Full-Stack' | 'Web'
  categoryLabel: string
  summary: string
  description: string
  challenge: string
  solution: string
  stack: string[]
  keyFeatures: string[]
  highlights: string[]
  metric: string
  image: string
  links: {
    github?: string
    demo?: string
    statusNote: string
    isProprietary?: boolean
  }
}

export const portfolioData = {
  profile: {
    name: 'Pratap Solat',
    role: 'Software Developer / Full-Stack Engineer',
    headline: 'I build thoughtful, scalable digital products.',
    bio: 'Computer Science graduate with professional experience developing production-grade web and mobile applications using Java, Spring Boot, React, and Flutter. Focused on building responsive, high-performance systems with clean architectures.',
    summary:
      'Computer Science graduate with hands-on experience building web and mobile applications using Java, Spring Boot, React, and Flutter.',
  },
  availability: {
    badge: 'Available for Software Engineer & Full-Stack Roles',
    status: 'Open to Software Engineer and Java Developer opportunities.',
    details:
      'Pratap is actively seeking an entry-level Software Engineer, Java Developer, or Full-Stack Engineer role in Pune, India or remote.',
  },
  contact: {
    email: 'solatpratap@gmail.com',
    phone: '+91-9022961780',
    location: 'Pune, Maharashtra, India',
    timezone: 'IST (UTC+5:30)',
    github: 'https://github.com/solatpatil-08',
    linkedin: 'https://linkedin.com/in/pratap-solat/',
    mapsUrl: 'https://maps.google.com/?q=Pune,India',
  },
  capabilities: [
    {
      category: 'Frontend & Web UIs',
      description: 'Building accessible, fluid, and component-driven web interfaces.',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
    },
    {
      category: 'Backend & Core APIs',
      description: 'Designing robust services, RESTful endpoints, and enterprise business logic.',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs', 'Node.js', 'Express', 'Python', 'Django'],
    },
    {
      category: 'Mobile & Data Systems',
      description: 'Cross-platform mobile apps and relational/document databases.',
      skills: ['Flutter', 'Dart', 'MySQL', 'MongoDB', 'SQLite', 'JSON API Integration'],
    },
    {
      category: 'Tools, Security & DevOps',
      description: 'Version control, secure authentication, and delivery pipelines.',
      skills: ['Git', 'GitHub', 'JWT Authentication', 'Postman', 'Vercel', 'Agile / Scrum', 'SDLC'],
    },
  ],
  workingProcess: [
    {
      step: '01',
      title: 'Discovery & Architecture',
      description: 'Analyzing requirements, defining database schemas, establishing RESTful API contracts, and planning modular architecture before writing code.',
    },
    {
      step: '02',
      title: 'Clean-Code Build',
      description: 'Developing type-safe frontend components and decoupled backend services adhering to SOLID principles and separation of concerns.',
    },
    {
      step: '03',
      title: 'Testing & QA Optimization',
      description: 'Rigorous cross-device testing, API latency validation (sub-200ms targets), authentication state security, and accessibility compliance.',
    },
    {
      step: '04',
      title: 'Delivery & Maintenance',
      description: 'Deploying to cloud platforms, configuring build pipelines, monitoring runtime performance, and refining based on user feedback.',
    },
  ],
  experience: [
    {
      role: 'Software Developer Engineer (SDE)',
      company: 'NBK Software Solutions',
      location: 'Pune, India',
      period: 'October 2025 to March 2026',
      duration: '6 Months',
      highlights: [
        'Built a Digital Gatepass Application with Flutter and Spring Boot, replacing manual paper check-ins for more than 100 daily transactions and reducing processing time by about 60%.',
        'Designed and consumed more than 10 RESTful APIs for real-time bi-directional data exchange between Flutter clients and Spring Boot services.',
        'Implemented secure JWT-based authentication and role-based access control (RBAC) for administrative monitoring dashboards.',
        'Participated actively across the full SDLC: requirements analysis, database schema design, cross-browser/device testing, and production deployment.',
      ],
      technologies: ['Flutter', 'Java', 'Spring Boot', 'MySQL', 'JWT', 'REST APIs', 'Agile'],
    },
  ],
  education: {
    degree: 'Bachelor of Computer Science (BCS)',
    institution: 'Dr. Babasaheb Ambedkar Marathwada University',
    location: 'Pune, India',
    year: '2025',
    cgpa: '7.8 / 10',
  },
  certifications: [
    { title: 'Full Stack Java with Angular', provider: 'Symbiosis Skill & Professional University' },
    { title: 'Generative AI Literacy', provider: 'NASSCOM, FutureSkills Prime' },
    { title: 'Enterprise Design Thinking Practitioner', provider: 'IBM SkillsBuild' },
    { title: 'LLM for Young Developers', provider: 'NASSCOM & Meta' },
    { title: 'AI Skills Passport', provider: 'EY & Microsoft' },
  ],
  projects: [
    {
      id: 'digital-gatepass',
      name: 'Digital Gatepass Application',
      category: 'Full-Stack',
      categoryLabel: 'Full-Stack & Mobile',
      summary:
        'A digital entry and exit management platform with role-based administrative monitoring and real-time pass generation.',
      description:
        'Engineered an end-to-end digital gatepass platform replacing physical paper visitor logs. Built with a Flutter cross-platform mobile frontend and Java Spring Boot REST backend connected to a MySQL relational database with JWT role-based security.',
      challenge:
        'Physical paper gatepasses at facilities caused severe reception congestion during peak hours, frequent record discrepancies, and zero real-time visibility into who was on premises.',
      solution:
        'Developed a responsive Flutter client with instant digital pass issuance, coupled with Spring Boot REST micro-services, indexed MySQL storage, and an admin dashboard with role-based access control.',
      stack: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'MySQL', 'JWT', 'REST APIs'],
      keyFeatures: [
        'Instant digital pass generation with unique verification identifiers.',
        'Real-time administrative monitoring dashboard for active visitors.',
        'Role-based access control (RBAC) ensuring data protection across tiers.',
        'Sub-200ms average REST API latency under concurrent check-in loads.',
      ],
      highlights: [
        'Digitized paper-based entry workflows for more than 100 daily visitors and employees.',
        'Cut gate check-in processing duration by approximately 60%.',
        'Delivered 10+ secure RESTful API endpoints with sub-200ms average response time.',
      ],
      metric: '~60% Check-In Time Reduction',
      image: '/projects/digital-gatepass.jpg',
      links: {
        statusNote: 'Enterprise Production System (Built at NBK Software Solutions — Code proprietary, architecture available upon request).',
        isProprietary: true,
      },
    },
    {
      id: 'preschool-management',
      name: 'Pre-School Management System',
      category: 'Web',
      categoryLabel: 'Web Application',
      summary:
        'A web portal for student enrollment, staff records, fee tracking, and daily class scheduling.',
      description:
        'Full-featured administrative portal designed to streamline early childhood education management. Features modular React components, custom responsive Tailwind layouts, and Node.js/Express REST APIs backed by MongoDB.',
      challenge:
        'Pre-school administrative staff relied on scattered spreadsheets for child enrollments, parent contacts, tuition fee tracking, and teacher class schedules, leading to duplicate records.',
      solution:
        'Designed a centralized single-page dashboard in React with modular form components, intuitive tabular summaries, and robust backend CRUD endpoints connected to MongoDB collections.',
      stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
      keyFeatures: [
        'Student enrollment and parent emergency contact management.',
        'Fee status tracking with pending balance alerts and date filters.',
        'Staff and teacher daily class assignment scheduling.',
        'Responsive dashboard optimized for desktop and tablet screens.',
      ],
      highlights: [
        'Engineered 15+ custom reusable React components with clean state management.',
        'Provided comprehensive CRUD capabilities via Node.js/Express endpoints.',
        'Structured flexible MongoDB document models for student academic records.',
      ],
      metric: '15+ Reusable Components',
      image: '/projects/preschool-management.jpg',
      links: {
        github: 'https://github.com/solatpatil-08',
        statusNote: 'Project code on GitHub (Replace with direct repository URL if published).',
        isProprietary: false,
      },
    },
    {
      id: 'attendance-tracking',
      name: 'Online Attendance Tracking System',
      category: 'Web',
      categoryLabel: 'Web Application',
      summary:
        'A Django-based attendance system that helps teachers record and review attendance in real time.',
      description:
        'Web application providing instructors an intuitive interface to record daily student presence, automatically calculate cumulative attendance percentages, and generate administrative summary reports.',
      challenge:
        'Manual roll-call registers required extensive tallying at month-end to determine attendance shortages, leading to reporting delays and potential grading errors.',
      solution:
        'Created a Django web application utilizing SQLite and Django ORM models with automated percentage calculations, instant warning flags for low attendance, and downloadable reports.',
      stack: ['Python', 'Django', 'SQLite', 'Bootstrap', 'HTML5'],
      keyFeatures: [
        'Fast one-click roll-call interface for classroom instructors.',
        'Automated attendance percentage calculator with low-attendance warnings.',
        'Administrative dashboard with date range filters and class filtering.',
        'Exportable summary reports for faculty and department heads.',
      ],
      highlights: [
        'Engineered Django ORM data models to compute automated attendance percentages.',
        'Tracked records for 200+ students across multiple class batches.',
        'Mobile-friendly responsive UI for quick in-classroom attendance entry.',
      ],
      metric: '200+ Active Students Tracked',
      image: '/projects/attendance-tracking.jpg',
      links: {
        github: 'https://github.com/solatpatil-08',
        statusNote: 'Academic Project (Available on GitHub repository).',
        isProprietary: false,
      },
    },
  ] as ProjectDetail[],
  services: [
    'Full-stack web application development (React, Next.js, Java, Spring Boot)',
    'Responsive, accessible frontend engineering with TypeScript & Tailwind CSS',
    'RESTful API architecture, design, and integration',
    'Cross-platform mobile application development with Flutter',
    'Database schema design, indexing, and optimization (MySQL, MongoDB)',
  ],
  faqs: [
    {
      id: 'technologies',
      keywords: [
        'what technologies does pratap use',
        'technology',
        'technologies',
        'tech',
        'stack',
        'skills',
        'react',
        'next',
        'java',
        'spring',
        'flutter',
        'typescript',
      ],
      answer:
        'Pratap works across frontend, backend, mobile, and data. His primary technologies include React, Next.js, TypeScript, Java, Spring Boot, Node.js, RESTful APIs, Flutter, MySQL, and MongoDB.',
    },
    {
      id: 'projects',
      keywords: [
        'show me relevant projects',
        'project',
        'projects',
        'portfolio projects',
        'built',
        'build',
        'gatepass',
        'preschool',
        'attendance',
      ],
      answer:
        'Pratap has built 3 key engineering projects: (1) Digital Gatepass Application (Flutter, Spring Boot, MySQL), (2) Pre-School Management System (React, Node.js, MongoDB), and (3) Online Attendance Tracking System (Python, Django). You can explore deep technical breakdowns on the Projects page.',
    },
    {
      id: 'gatepass',
      keywords: ['gatepass', 'gate pass', 'digital gatepass', 'digital pass'],
      answer:
        'The Digital Gatepass Application is a production platform built at NBK Software Solutions using Flutter and Spring Boot. It digitized paper logs for 100+ daily visitors, cut processing time by ~60%, and delivered 10+ REST APIs with sub-200ms latency.',
    },
    {
      id: 'experience',
      keywords: ['experience', 'nbk', 'job', 'worked', 'career', 'background', 'role'],
      answer:
        'Pratap worked as a Software Developer Engineer (SDE) at NBK Software Solutions in Pune from October 2025 to March 2026. His work included developing the Flutter and Spring Boot digital gatepass platform, REST APIs, JWT authentication, and administrative dashboards.',
    },
    {
      id: 'availability',
      keywords: [
        'is pratap available for work',
        'available for work',
        'available to work',
        'available',
        'availability',
        'hire',
        'hiring',
        'open to work',
        'opportunity',
        'freelance',
        'joining',
      ],
      answer:
        'Pratap is actively available for Software Engineer, Java Developer, and Full-Stack Developer roles in Pune, India or remote. You can reach him directly at solatpratap@gmail.com or via LinkedIn.',
    },
    {
      id: 'contact',
      keywords: [
        'how can i get in touch',
        'get in touch',
        'in touch',
        'touch',
        'contact',
        'email',
        'phone',
        'reach',
        'linkedin',
        'github',
        'talk',
        'message',
        'whatsapp',
      ],
      answer:
        'You can reach Pratap via email at solatpratap@gmail.com or phone/WhatsApp at +91-9022961780. Connect on LinkedIn at linkedin.com/in/pratap-solat and explore his GitHub at github.com/solatpatil-08.',
    },
    {
      id: 'services',
      keywords: ['service', 'services', 'help', 'offer', 'capability', 'capabilities'],
      answer:
        'Pratap provides full-stack web development, responsive frontend engineering with React and Next.js, backend REST API design with Java and Spring Boot, and cross-platform mobile development with Flutter.',
    },
    {
      id: 'location',
      keywords: ['location', 'based', 'timezone', 'time zone', 'pune', 'india', 'city'],
      answer:
        'Pratap is based in Pune, Maharashtra, India, and works in the IST (UTC+5:30) timezone. He is open to on-site roles in Pune, hybrid positions, and remote work worldwide.',
    },
    {
      id: 'resume',
      keywords: ['resume', 'cv', 'download', 'pdf'],
      answer:
        'You can view Pratap’s full resume on the Resume page (/resume) and print or download the PDF directly from there.',
    },
  ],
  fallbackAnswer:
    'I can answer questions about Pratap’s skills, projects, experience, availability, services, and contact details. Please ask about one of those topics.',
} as const

type PortfolioFaq = (typeof portfolioData.faqs)[number]

/**
 * A concise, data-derived context block for the server-side OpenAI request.
 * It deliberately contains no facts outside portfolioData.
 */
export function getPortfolioChatContext(): string {
  const { availability, contact, experience, profile, projects, services, capabilities } = portfolioData

  const skillSummary = capabilities
    .map((cap) => `${cap.category}: ${cap.skills.join(', ')}`)
    .join('\n')

  const projectSummary = projects
    .map(
      (project) =>
        `- ${project.name} (${project.categoryLabel}): ${project.summary} Stack: ${project.stack.join(', ')}. Metric: ${project.metric}. Highlights: ${project.highlights.join(' ')}`,
    )
    .join('\n')

  const experienceSummary = experience
    .map(
      (role) =>
        `- ${role.role} at ${role.company}, ${role.location} (${role.period}). ${role.highlights.join(' ')}`,
    )
    .join('\n')

  return [
    `Name: ${profile.name}`,
    `Role: ${profile.role}`,
    `Summary: ${profile.summary}`,
    `Availability: ${availability.status} ${availability.details}`,
    `Location & Timezone: ${contact.location}; ${contact.timezone}`,
    `Contact: Email ${contact.email}; Phone ${contact.phone}; GitHub ${contact.github}; LinkedIn ${contact.linkedin}`,
    `Services: ${services.join(', ')}`,
    `Technical Capabilities:\n${skillSummary}`,
    `Experience:\n${experienceSummary}`,
    `Key Projects:\n${projectSummary}`,
  ].join('\n\n')
}

/**
 * Provides a deterministic, accurate response when no API key is available or
 * the hosted model cannot answer. Matching is based on the editable FAQ
 * keywords above.
 */
export function getPortfolioFallbackResponse(question: string): string {
  const normalizedQuestion = question.toLowerCase().replace(/\s+/g, ' ').trim()

  const bestMatch = portfolioData.faqs.reduce<{ faq: PortfolioFaq | null; score: number }>(
    (best, faq) => {
      const score = faq.keywords.reduce((total, keyword) => {
        if (normalizedQuestion.includes(keyword)) {
          return total + (keyword.includes(' ') ? 15 : keyword.length)
        }
        return total
      }, 0)

      return score > best.score ? { faq, score } : best
    },
    { faq: null, score: 0 },
  )

  return bestMatch.faq ? bestMatch.faq.answer : portfolioData.fallbackAnswer
}
