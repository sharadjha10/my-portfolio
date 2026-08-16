"use client"
import React, {useState} from 'react'
import data from '../data/siteConfig'

export default function Projects(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<number | null>(null)

  return (
    <div>
      <div className="section-label">05 — SELECTED WORK</div>
      <h3 className="text-4xl font-extrabold mb-6">Selected Projects</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {data.projects.map((p,idx)=> (
          <div key={p.title} className={`glass-card p-6 ${idx===0? 'border-2 border-white/6':''}`}>
            <div className="text-xs text-[color:var(--accent)] mb-2">{p.category}</div>
            <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
            <p className="text-sm text-muted mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">{p.technologies.map(t=> <span key={t} className="px-2 py-1 bg-white/5 rounded-full text-xs">{t}</span>)}</div>
            <div className="flex items-center justify-between">
              <button onClick={()=>{ setActive(idx); setOpen(true)}} className="text-sm text-[color:var(--accent)]">View details</button>
              <a href="#" className="text-sm">🔗</a>
            </div>
          </div>
        ))}
      </div>

      {open && active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="bg-[color:var(--panel)] p-6 rounded-lg max-w-3xl w-full">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">{data.projects[active].title}</h4>
              <button onClick={()=>setOpen(false)}>Close</button>
            </div>
            <p className="text-sm text-muted mb-3">{data.projects[active].description}</p>
            <div className="text-sm text-[color:var(--accent)] mb-2">Architecture</div>
            <pre className="bg-black/20 p-4 font-mono text-sm rounded">{data.projects[active].architecture}</pre>
          </div>
        </div>
      )}
    </div>
  )
}
