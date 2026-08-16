"use client"
import React, { useState } from 'react'
import { ArrowUpRight, Code2, Layers, X } from 'lucide-react'
import data from '../data/siteConfig'

export default function Projects() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="w-full">
      <div className="section-label">05 — SELECTED WORK</div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="section-title">Selected Projects</h3>
        <p className="max-w-sm text-sm text-muted">Data products designed to turn complex information into practical decisions.</p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {data.projects.map((project, index) => {
          const flowSteps = project.architecture.split('→').map((step) => step.trim()).filter(Boolean)

          return (
            <article
              key={project.title}
              className="glass-card group flex min-h-[390px] flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="flex items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--chip-bg)] px-5 py-4">
                <span className="font-mono text-xs font-medium tracking-[.16em] text-accent">0{index + 1}</span>
                <span className="rounded-lg border border-[color:var(--border)] p-2 text-muted transition-colors group-hover:text-accent">
                  <Layers size={17} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="font-mono text-[.65rem] tracking-[.18em] text-accent">{project.category}</div>
                <h4 className="mt-4 text-xl font-bold leading-tight tracking-tight text-strong">{project.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--chip-bg)] p-3">
                  <div className="font-mono text-[.6rem] tracking-[.2em] text-muted">WORKFLOW</div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {flowSteps.map((step, stepIndex) => (
                      <React.Fragment key={`${project.title}-${step}`}>
                        <span className="chip whitespace-normal break-words text-left leading-tight">{step}</span>
                        {stepIndex < flowSteps.length - 1 && <ArrowUpRight size={12} className="shrink-0 text-muted" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span key={technology} className="chip">{technology}</span>
                  ))}
                  {project.technologies.length > 4 && <span className="chip">+{project.technologies.length - 4}</span>}
                </div>

                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="mt-5 flex items-center justify-between border-t border-[color:var(--border)] pt-4 text-sm font-semibold text-strong transition-colors hover:text-accent"
                >
                  <span className="flex items-center gap-2">
                    <Code2 size={16} /> Explore project
                  </span>
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </article>
          )
        })}
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Project details"
            className="glass-card max-h-[88vh] w-full max-w-2xl overflow-y-auto p-5 md:p-7"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="font-mono text-xs tracking-[.16em] text-accent">{data.projects[active].category}</div>
                <h4 className="mt-2 text-2xl font-bold tracking-tight text-strong">{data.projects[active].title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-xl border border-[color:var(--border)] p-2 text-muted hover:text-strong"
                aria-label="Close project details"
              >
                <X size={19} />
              </button>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-body">{data.projects[active].description}</p>

            <div className="mt-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--chip-bg)] p-4">
              <div className="mb-3 font-mono text-xs tracking-[.16em] text-accent">DATA FLOW</div>
              <pre className="overflow-x-auto font-mono text-sm leading-7 text-body">{data.projects[active].architecture}</pre>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {data.projects[active].technologies.map((technology) => (
                <span key={technology} className="chip">{technology}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
