import React from 'react'
import {
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiDart,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiHibernate,
  SiJsonwebtokens,
  SiAngular,
} from 'react-icons/si'
import { FaJava, FaCss3Alt } from 'react-icons/fa6'
import { Code2, Server, Database, Workflow, ShieldCheck, Cpu } from 'lucide-react'

export interface TechMeta {
  label: string
  color: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  category?: 'language' | 'framework' | 'database' | 'tool' | 'concept'
}

export const techRegistry: Record<string, TechMeta> = {
  // Programming Languages
  java: { label: 'Java', color: '#ED8B00', icon: FaJava, category: 'language' },
  javascript: { label: 'JavaScript', color: '#F7DF1E', icon: SiJavascript, category: 'language' },
  js: { label: 'JavaScript', color: '#F7DF1E', icon: SiJavascript, category: 'language' },
  typescript: { label: 'TypeScript', color: '#3178C6', icon: SiTypescript, category: 'language' },
  ts: { label: 'TypeScript', color: '#3178C6', icon: SiTypescript, category: 'language' },
  python: { label: 'Python', color: '#3776AB', icon: SiPython, category: 'language' },
  dart: { label: 'Dart', color: '#0175C2', icon: SiDart, category: 'language' },
  html5: { label: 'HTML5', color: '#E34F26', icon: SiHtml5, category: 'language' },
  html: { label: 'HTML5', color: '#E34F26', icon: SiHtml5, category: 'language' },
  css3: { label: 'CSS3', color: '#1572B6', icon: FaCss3Alt, category: 'language' },
  css: { label: 'CSS3', color: '#1572B6', icon: FaCss3Alt, category: 'language' },

  // Frameworks & Libraries
  'spring boot': { label: 'Spring Boot', color: '#6DB33F', icon: SiSpringboot, category: 'framework' },
  springboot: { label: 'Spring Boot', color: '#6DB33F', icon: SiSpringboot, category: 'framework' },
  spring: { label: 'Spring Boot', color: '#6DB33F', icon: SiSpringboot, category: 'framework' },
  'react.js': { label: 'React.js', color: '#61DAFB', icon: SiReact, category: 'framework' },
  react: { label: 'React.js', color: '#61DAFB', icon: SiReact, category: 'framework' },
  'next.js': { label: 'Next.js', color: '#000000', icon: SiNextdotjs, category: 'framework' },
  nextjs: { label: 'Next.js', color: '#000000', icon: SiNextdotjs, category: 'framework' },
  flutter: { label: 'Flutter', color: '#02569B', icon: SiFlutter, category: 'framework' },
  django: { label: 'Django', color: '#44B78B', icon: SiDjango, category: 'framework' },
  'node.js': { label: 'Node.js', color: '#5FA04E', icon: SiNodedotjs, category: 'framework' },
  nodejs: { label: 'Node.js', color: '#5FA04E', icon: SiNodedotjs, category: 'framework' },
  node: { label: 'Node.js', color: '#5FA04E', icon: SiNodedotjs, category: 'framework' },
  express: { label: 'Express', color: '#737373', icon: SiExpress, category: 'framework' },
  hibernate: { label: 'Hibernate', color: '#59666C', icon: SiHibernate, category: 'framework' },
  'tailwind css': { label: 'Tailwind CSS', color: '#06B6D4', icon: SiTailwindcss, category: 'framework' },
  tailwind: { label: 'Tailwind CSS', color: '#06B6D4', icon: SiTailwindcss, category: 'framework' },
  bootstrap: { label: 'Bootstrap', color: '#7952B3', icon: SiBootstrap, category: 'framework' },
  angular: { label: 'Angular', color: '#DD0031', icon: SiAngular, category: 'framework' },

  // Databases & Storage
  mysql: { label: 'MySQL', color: '#4479A1', icon: SiMysql, category: 'database' },
  mongodb: { label: 'MongoDB', color: '#47A248', icon: SiMongodb, category: 'database' },
  sqlite: { label: 'SQLite', color: '#003B57', icon: SiSqlite, category: 'database' },

  // Tools & Security
  git: { label: 'Git', color: '#F05032', icon: SiGit, category: 'tool' },
  github: { label: 'GitHub', color: '#6e5494', icon: SiGithub, category: 'tool' },
  postman: { label: 'Postman', color: '#FF6C37', icon: SiPostman, category: 'tool' },
  vercel: { label: 'Vercel', color: '#000000', icon: SiVercel, category: 'tool' },
  jwt: { label: 'JWT', color: '#D63AFF', icon: SiJsonwebtokens, category: 'tool' },
  'jwt authentication': { label: 'JWT Authentication', color: '#D63AFF', icon: SiJsonwebtokens, category: 'tool' },

  // Concepts / Architectural Protocols
  'restful apis': { label: 'RESTful APIs', color: '#38BDF8', icon: Server, category: 'concept' },
  'rest apis': { label: 'REST APIs', color: '#38BDF8', icon: Server, category: 'concept' },
  'rest api': { label: 'REST API', color: '#38BDF8', icon: Server, category: 'concept' },
  'json api integration': { label: 'JSON APIs', color: '#F59E0B', icon: Cpu, category: 'concept' },
  'agile / scrum': { label: 'Agile / Scrum', color: '#10B981', icon: Workflow, category: 'concept' },
  agile: { label: 'Agile', color: '#10B981', icon: Workflow, category: 'concept' },
  sdlc: { label: 'SDLC', color: '#6366F1', icon: ShieldCheck, category: 'concept' },
}

export function getTechMeta(name: string): TechMeta {
  const normalized = name.toLowerCase().trim()
  if (techRegistry[normalized]) {
    return techRegistry[normalized]
  }

  // Partial matching fallbacks
  for (const [key, meta] of Object.entries(techRegistry)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return meta
    }
  }

  return {
    label: name,
    color: '#6366f1',
    icon: Code2,
    category: 'concept',
  }
}

interface TechIconProps {
  name: string
  className?: string
  colored?: boolean
  style?: React.CSSProperties
}

export default function TechIcon({
  name,
  className = 'w-3.5 h-3.5',
  colored = true,
  style = {},
}: TechIconProps) {
  const meta = getTechMeta(name)
  const IconComponent = meta.icon

  // Next.js and Vercel dark mode color adaptation
  const isMonochrome = meta.color === '#000000'
  const customStyle: React.CSSProperties = {
    ...style,
    color: colored ? (isMonochrome ? undefined : meta.color) : undefined,
  }

  return (
    <IconComponent
      className={`${className} shrink-0 transition-transform ${isMonochrome ? 'text-slate-900 dark:text-white' : ''}`}
      style={customStyle}
    />
  )
}
