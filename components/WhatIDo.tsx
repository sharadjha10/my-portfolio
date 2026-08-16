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
  return <div className="flex min-h-full w-full flex-col justify-center"><div className="section-label">02 — CAPABILITIES</div><h3 className="section-title">What I Do</h3><div className="mt-8 grid overflow-hidden rounded-2xl border border-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">{items.map(({ title, description, Icon }, i) => <article key={title} className={`min-h-[195px] border-[color:var(--border)] p-5 lg:min-h-[210px] lg:p-6 ${i % 3 !== 2 ? 'lg:border-r' : ''} ${i < 3 ? 'lg:border-b' : ''} ${i % 2 === 0 ? 'sm:border-r lg:border-r' : ''} ${i < 4 ? 'sm:border-b lg:border-b' : ''}`}><span className="mb-5 inline-flex rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-accent"><Icon size={20}/></span><h4 className="mb-2 text-lg font-semibold tracking-tight text-strong">{title}</h4><p className="text-sm leading-relaxed text-muted">{description}</p></article>)}</div></div>
}
