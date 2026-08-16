import React from 'react'
import { Award, GraduationCap } from 'lucide-react'

export default function Background() {
  return <div className="w-full">
    <div className="section-label">06 — BACKGROUND</div>
    <h3 className="section-title">Certifications &amp; Education</h3>
    <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-14">
      <div><div className="mb-6 text-xs font-semibold tracking-[.2em] text-muted">CERTIFICATIONS</div>
        <article className="glass-card flex items-start gap-5 p-6"><div className="rounded-xl bg-[color:var(--accent-soft)] p-3 text-accent"><Award size={23}/></div><div><h4 className="font-semibold text-strong">AWS Certified Cloud Practitioner</h4><p className="text-sm text-body">Amazon Web Services</p><p className="mt-1 font-mono text-xs text-muted">June 2024</p></div></article>
      </div>
      <div><div className="mb-6 text-xs font-semibold tracking-[.2em] text-muted">EDUCATION</div>
        <article className="glass-card flex items-start gap-5 p-6"><div className="rounded-xl bg-[color:var(--accent-soft)] p-3 text-accent"><GraduationCap size={23}/></div><div><h4 className="font-semibold text-strong">Vellore Institute of Technology, Bhopal</h4><p className="text-sm font-medium text-body">Bachelor of Technology</p><p className="text-sm text-muted">Computer Science and Engineering</p><div className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-muted"><span>2021 – 2025</span><span className="rounded bg-[color:var(--accent-soft)] px-2 py-1 text-accent">CGPA: 8.77 / 10</span></div></div></article>
      </div>
    </div>
  </div>
}
