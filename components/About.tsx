import React from 'react'
import data from '../data/siteConfig'

export default function About(){
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <div className="section-label">01 — INTRODUCTION</div>
        <h2 className="text-5xl font-extrabold mb-6">About Me</h2>
        <p className="text-muted mb-4">I am a Data Engineer passionate about building reliable, scalable, and high-performance data systems. I specialize in developing ETL pipelines, cloud data warehouses, and analytics workflows that transform raw data into meaningful insights.</p>
        <p className="text-muted mb-4">My experience includes working with Snowflake, dbt, SQL, Python, AWS, Informatica IDMC, data modeling, data transformation, and modern data engineering practices.</p>

        <div className="mt-6 text-xs font-medium text-[color:var(--accent)] mb-3">CORE FOCUS</div>
        <div className="flex flex-wrap gap-2">
          {['Snowflake','dbt','SQL','Python','AWS','ETL / ELT','Data Modeling','Data Quality'].map(t=> (
            <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-sm">{t}</span>
          ))}
        </div>
      </div>

      <aside className="glass-card p-6">
        <div className="text-xs text-[color:var(--accent)] mb-4">TECHNICAL PROFILE</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm text-muted">Current Role</div>
          <div className="text-sm font-medium">Data Engineer</div>

          <div className="text-sm text-muted">Experience</div>
          <div className="text-sm font-medium">1+ Year</div>

          <div className="text-sm text-muted">Location</div>
          <div className="text-sm font-medium">Noida, India</div>

          <div className="text-sm text-muted">Education</div>
          <div className="text-sm font-medium">B.Tech CSE</div>

          <div className="text-sm text-muted">Focus</div>
          <div className="text-sm font-medium">Data Engineering & Analytics</div>
        </div>

        <div className="mt-6 p-4 bg-black/20 font-mono text-sm rounded-md">
          // Building reliable data systems that turn raw
          <br />// data into scalable, trusted, and actionable information.
        </div>
      </aside>
    </div>
  )
}
