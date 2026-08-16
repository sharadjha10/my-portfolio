import React from 'react'

export default function About() {
  return (
    <div className="min-h-full">
      <div className="section-label">01 — INTRODUCTION</div>
      <h2 className="section-title">About Me</h2>
      <p className="mb-3 mt-5 text-sm leading-relaxed text-muted md:text-base">
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
  )
}
