import React from 'react'
import { Boxes, Cloud, GitBranch, ShieldCheck, TableProperties, Workflow } from 'lucide-react'

const items = [
  { title: 'Data Pipeline Development', description: 'Designing reliable data pipelines for ingestion, transformation, and downstream analytics.', Icon: GitBranch },
  { title: 'ETL / ELT Workflows', description: 'Building structured transformation workflows using modern ELT and data engineering practices.', Icon: Workflow },
  { title: 'Cloud Data Warehousing', description: 'Working with cloud-based analytical platforms, particularly Snowflake.', Icon: Cloud },
  { title: 'Data Modeling', description: 'Designing structured models, dimensions, facts, and transformation layers for analytics.', Icon: Boxes },
  { title: 'Data Quality & Reconciliation', description: 'Validating data accuracy, identifying inconsistencies, deduplicating records, and reconciling source and target datasets.', Icon: ShieldCheck },
  { title: 'Analytics Engineering', description: 'Building maintainable transformation models using dbt and creating trusted datasets for analytics.', Icon: TableProperties },
]

export default function WhatIDo() {
  return (
    <div className="flex min-h-full w-full flex-col justify-center">
      <div className="section-label">02 — CAPABILITIES</div>
      <h3 className="section-title">What I Do</h3>

      <div className="mt-6 grid overflow-hidden rounded-2xl border border-[color:var(--border)] sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, description, Icon }, i) => (
          <article
            key={title}
            className={`min-h-[150px] border-[color:var(--border)] p-4 sm:min-h-[170px] sm:p-5 lg:min-h-[210px] lg:p-6 ${i % 3 !== 2 ? 'lg:border-r' : ''} ${i < 3 ? 'lg:border-b' : ''} ${i % 2 === 0 ? 'sm:border-r lg:border-r' : ''} ${i < 4 ? 'sm:border-b lg:border-b' : ''}`}
          >
            <span className="mb-3 inline-flex rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-2.5 text-accent sm:mb-5 sm:p-3">
              <Icon size={18} className="sm:h-5 sm:w-5" />
            </span>
            <h4 className="mb-1.5 text-base font-semibold tracking-tight text-strong sm:mb-2 sm:text-lg">{title}</h4>
            <p className="text-xs leading-relaxed text-muted sm:text-sm">{description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
