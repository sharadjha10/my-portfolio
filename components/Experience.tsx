import React from 'react'

const experiences = [
  {
    title: 'Data Engineer',
    company: 'LTIMindtree',
    range: 'Feb 2026 – Present',
    current: true,
    bullets: [
      'Developing dbt models across raw, cleansed, and conformed data layers.',
      'Implementing data deduplication, date standardization, macros, and SCD-based transformations.',
      'Creating and managing Snowflake objects including tables, views, procedures, and tasks.',
      'Performing data validation, reconciliation, unit testing, bug fixes, feature development, and production deployments.',
      'Working with AWS S3 for data ingestion workflows.',
    ],
  },
  {
    title: 'Graduate Engineer Trainee',
    company: 'LTIMindtree',
    range: 'Nov 2025 – Feb 2026',
    current: false,
    bullets: [
      'Completed structured training in Snowflake, Informatica IDMC, SQL, ETL/ELT workflows, data engineering concepts, and cloud data platforms.',
    ],
  },
]

export default function Experience() {
  return (
    <div>
      <div className="section-label">04 — CAREER</div>
      <h3 className="section-title">Experience</h3>

      <div className="space-y-5">
        {experiences.map((exp, idx) => (
          <div key={`${exp.title}-${exp.range}`} className="flex items-start gap-4">
            <div className="flex w-5 shrink-0 flex-col items-center pt-1.5">
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  exp.current ? 'bg-[color:var(--accent)] ring-4 ring-[color:var(--accent-soft)]' : 'bg-[color:var(--border-strong)]'
                }`}
              />
              {idx < experiences.length - 1 && <div className="mt-2 h-full min-h-[3rem] w-px bg-[color:var(--border)]" />}
            </div>

            <div className="glass-card w-full p-4 md:p-5">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h4 className="text-base font-semibold text-strong md:text-lg">
                  {exp.title}
                  {exp.current && (
                    <span className="ml-2 inline-flex rounded-full bg-[color:var(--accent-soft)] px-2 py-0.5 text-xs font-medium text-accent">
                      Current
                    </span>
                  )}
                </h4>
                <div className="shrink-0 text-xs text-muted md:text-sm">
                  {exp.company} • {exp.range}
                </div>
              </div>

              <ul className="ml-4 list-disc space-y-1.5 text-sm leading-relaxed text-muted">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
