import React from 'react'
import { Boxes, Cloud, GitBranch, ShieldCheck, TableProperties, Workflow } from 'lucide-react'

const items = [
  ['Data Pipeline Development', 'Designing reliable data pipelines for ingestion, transformation, and downstream analytics.', GitBranch],
  ['ETL / ELT Workflows', 'Building structured transformation workflows using modern ELT and data engineering practices.', Workflow],
  ['Cloud Data Warehousing', 'Working with cloud-based analytical platforms, particularly Snowflake.', Cloud],
  ['Data Modeling', 'Designing structured models, dimensions, facts, and transformation layers for analytics.', Boxes],
  ['Data Quality & Reconciliation', 'Validating data accuracy, identifying inconsistencies, deduplicating records, and reconciling source and target datasets.', ShieldCheck],
  ['Analytics Engineering', 'Building maintainable transformation models using dbt and creating trusted datasets for analytics.', TableProperties],
]

export default function WhatIDo() { return <div className="w-full"><div className="section-label">02 — CAPABILITIES</div><h3 className="section-title">What I Do</h3><div className="mt-12 grid overflow-hidden rounded-2xl border border-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">{items.map(([title, desc, Icon], i) => <article key={title as string} className={`min-h-[205px] border-[color:var(--border)] p-6 ${i % 3 !== 2 ? 'lg:border-r' : ''} ${i < 3 ? 'lg:border-b' : ''} ${i % 2 === 0 ? 'sm:border-r lg:border-r' : ''} ${i < 4 ? 'sm:border-b lg:border-b' : ''}`}><span className="mb-7 inline-flex rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-accent"><Icon size={20}/></span><h4 className="mb-3 text-lg font-semibold tracking-tight text-strong">{title as string}</h4><p className="text-sm leading-relaxed text-muted">{desc as string}</p></article>)}</div></div> }
