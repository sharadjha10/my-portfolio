import React from 'react'

export default function About() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
      <div>
        <div className="section-label">01 — INTRODUCTION</div>
        <h2 className="section-title">About Me</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted md:text-base">
          I am a Data Engineer passionate about building reliable, scalable, and high-performance data
          systems. I specialize in developing ETL pipelines, cloud data warehouses, and analytics
          workflows that transform raw data into meaningful insights.
        </p>
        <p className="mb-5 text-sm leading-relaxed text-muted md:text-base">
          My experience includes working with Snowflake, dbt, SQL, Python, AWS, Informatica IDMC, data
          modeling, data transformation, and modern data engineering practices.
        </p>

        <div className="mb-3 text-xs font-semibold tracking-wide text-accent">CORE FOCUS</div>
        <div className="flex flex-wrap gap-2">
          {['Snowflake', 'dbt', 'SQL', 'Python', 'AWS', 'ETL / ELT', 'Data Modeling', 'Data Quality'].map(
            (t) => (
              <span key={t} className="chip">
                {t}
              </span>
            )
          )}
        </div>
      </div>

      <aside className="glass-card p-5 md:p-6">
        <div className="mb-4 text-xs font-semibold tracking-wide text-accent">TECHNICAL PROFILE</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <div className="text-sm text-muted">Current Role</div>
          <div className="text-sm font-medium text-strong">Data Engineer</div>

          <div className="text-sm text-muted">Experience</div>
          <div className="text-sm font-medium text-strong">1+ Year</div>

          <div className="text-sm text-muted">Location</div>
          <div className="text-sm font-medium text-strong">Noida, India</div>

          <div className="text-sm text-muted">Education</div>
          <div className="text-sm font-medium text-strong">B.Tech CSE</div>

          <div className="text-sm text-muted">Focus</div>
          <div className="text-sm font-medium text-strong">Data Engineering & Analytics</div>
        </div>

        <div className="mt-5 rounded-lg border border-[color:var(--border)] bg-[color:var(--chip-bg)] p-4 font-mono text-xs leading-relaxed text-body sm:text-sm">
          // Building reliable data systems that turn raw
          <br />
          // data into scalable, trusted, and actionable information.
        </div>
      </aside>
    </div>
  )
}
