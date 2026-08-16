import React from 'react'

const items = [
  {title:'Data Pipeline Development',desc:'Designing reliable data pipelines for ingestion, transformation, and downstream analytics.'},
  {title:'ETL / ELT Workflows',desc:'Building structured transformation workflows using modern ELT and data engineering practices.'},
  {title:'Cloud Data Warehousing',desc:'Working with cloud-based analytical platforms, particularly Snowflake.'},
  {title:'Data Modeling',desc:'Designing structured models, dimensions, facts, and transformation layers for analytics.'},
  {title:'Data Quality & Reconciliation',desc:'Validating data accuracy, identifying inconsistencies, deduplicating records, and reconciling source and target datasets.'},
  {title:'Analytics Engineering',desc:'Building maintainable transformation models using dbt and creating trusted datasets for analytics.'}
]

export default function WhatIDo(){
  return (
    <div>
      <div className="section-label">02 — CAPABILITIES</div>
      <h3 className="text-4xl font-extrabold mb-6">What I Do</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it)=> (
          <div key={it.title} className="glass-card p-6 hover:border-[color:var(--accent)] transition-colors">
            <div className="mb-4 w-10 h-10 bg-white/5 rounded-md flex items-center justify-center"> </div>
            <h4 className="font-semibold mb-2">{it.title}</h4>
            <p className="text-muted text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
