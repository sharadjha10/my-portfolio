"use client"
import React, { useState } from 'react'
import data from '../data/siteConfig'

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<number | null>(null)

  return (
    <div>
      <div className="section-label">05 — SELECTED WORK</div>
      <h3 className="section-title">Selected Projects</h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {data.projects.map((p, idx) => (
          <div
            key={p.title}
            className={`glass-card flex flex-col p-4 transition-colors hover:border-[color:var(--accent)] md:p-5 ${
              idx === 0 ? 'ring-1 ring-[color:var(--accent)]' : ''
            }`}
          >
            <div className="mb-1.5 text-xs font-medium text-accent">{p.category}</div>
            <h4 className="mb-2 text-base font-semibold text-strong md:text-lg">{p.title}</h4>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span key={t} className="chip text-xs">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setActive(idx)
                  setOpen(true)
                }}
                className="text-sm font-medium text-accent transition-colors hover:text-strong"
              >
                View details
              </button>
              <a href="#" className="text-sm text-muted transition-colors hover:text-body">
                ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {open && active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="glass-card max-h-[85vh] w-full max-w-3xl overflow-y-auto p-5 md:p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h4 className="text-lg font-semibold text-strong md:text-xl">{data.projects[active].title}</h4>
              <button
                onClick={() => setOpen(false)}
                className="btn-secondary shrink-0 px-3 py-1.5 text-xs"
              >
                Close
              </button>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted">{data.projects[active].description}</p>
            <div className="mb-2 text-sm font-medium text-accent">Architecture</div>
            <pre className="overflow-x-auto rounded-lg border border-[color:var(--border)] bg-[color:var(--chip-bg)] p-4 font-mono text-xs text-body sm:text-sm">
              {data.projects[active].architecture}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
