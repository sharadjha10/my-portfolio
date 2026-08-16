import React from 'react'
import { BadgeCheck, Briefcase, CalendarDays, Check, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Data Engineer', company: 'LTIMindtree', range: 'Feb 2026 - Present', current: true,
    summary: 'Building reliable cloud data products across the analytics lifecycle.',
    skills: ['Snowflake', 'dbt', 'AWS S3', 'SQL'],
    bullets: [
      'Developing dbt models across raw, cleansed, and conformed data layers.',
      'Implementing data deduplication, date standardization, macros, and SCD-based transformations.',
      'Creating and managing Snowflake objects including tables, views, procedures, and tasks.',
      'Performing data validation, reconciliation, testing, and production deployments.',
      'Working with AWS S3 for data-ingestion workflows.',
    ],
  },
  {
    title: 'Graduate Engineer Trainee', company: 'LTIMindtree', range: 'Nov 2025 - Feb 2026', current: false,
    summary: 'Completed structured training in modern data engineering and cloud platforms.',
    skills: ['Snowflake', 'Informatica IDMC', 'ETL / ELT', 'Python'],
    bullets: ['Developed a foundation in Snowflake, Informatica IDMC, SQL, ETL / ELT workflows, and data engineering concepts.'],
  },
]

export default function Experience() {
  return <div className="w-full">
    <div className="section-label">04 — CAREER</div>
    <div className="flex flex-wrap items-end justify-between gap-4"><h3 className="section-title">Experience</h3><p className="max-w-sm text-sm text-muted">Designing dependable data systems from ingestion through insight.</p></div>
    <div className="mt-8 space-y-4">
      {experiences.map((exp, index) => <article key={exp.title} className={`group grid overflow-hidden rounded-2xl border transition-colors md:grid-cols-[190px_1fr] ${exp.current ? 'border-[color:var(--accent)] bg-[color:var(--surface)]' : 'border-[color:var(--border)] bg-[color:var(--surface)] hover:border-[color:var(--border-strong)]'}`}>
        <div className="border-b border-[color:var(--border)] bg-[color:var(--chip-bg)] p-5 md:border-b-0 md:border-r md:p-6">
          <div className="flex items-center gap-2 font-mono text-xs text-accent"><CalendarDays size={15}/>{index === 0 ? 'CURRENT ROLE' : 'EARLIER ROLE'}</div>
          <div className="mt-5 text-sm font-semibold text-strong">{exp.company}</div>
          <div className="mt-1 font-mono text-xs leading-relaxed text-muted">{exp.range}</div>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted"><span className={`h-2.5 w-2.5 rounded-full ${exp.current ? 'bg-[color:var(--success)] ring-4 ring-[color:var(--accent-soft)]' : 'bg-[color:var(--border-strong)]'}`}/>{exp.current ? 'Active' : 'Completed'}</div>
        </div>
        <div className="p-5 md:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><div className="flex flex-wrap items-center gap-3"><h4 className="text-xl font-bold tracking-tight text-strong">{exp.title}</h4>{exp.current && <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--accent-soft)] px-2.5 py-1 text-xs font-semibold text-accent"><BadgeCheck size={14}/> Current</span>}</div><p className="mt-2 text-sm text-muted">{exp.summary}</p></div><span className="hidden rounded-xl border border-[color:var(--border)] p-2 text-accent sm:block"><Briefcase size={19}/></span></div>
          <ul className="mt-5 grid gap-2 md:grid-cols-2">{exp.bullets.map((bullet) => <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-body"><Check className="mt-1 shrink-0 text-accent" size={15}/><span>{bullet}</span></li>)}</ul>
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[color:var(--border)] pt-4">{exp.skills.map((skill) => <span key={skill} className="chip">{skill}</span>)}<span className="ml-auto hidden items-center gap-1 text-xs font-semibold text-accent sm:inline-flex">Role details <ChevronRight size={15}/></span></div>
        </div>
      </article>)}
    </div>
  </div>
}
