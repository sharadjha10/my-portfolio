import React from 'react'
import data from '../data/siteConfig'

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-8 md:py-10">
      <div className="container grid gap-8 md:grid-cols-3 md:gap-6">
        <div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-sm font-bold text-strong ring-1 ring-[color:var(--border)]">
            SJ
          </div>
          <div className="mt-3 font-semibold text-strong">Sharad Jha</div>
          <div className="mt-2 text-sm leading-relaxed text-muted">
            Data Engineer
            <br />
            Building scalable data systems and turning data into insights.
          </div>
        </div>

        <div>
          <div className="mb-3 text-sm font-medium text-strong">Navigate</div>
          <ul className="space-y-2 text-sm text-body">
            <li>
              <a href="#home" className="transition-colors hover:text-strong">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-strong">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="transition-colors hover:text-strong">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="transition-colors hover:text-strong">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="transition-colors hover:text-strong">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-strong">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-medium text-strong">Connect</div>
          <div className="flex flex-wrap gap-2">
            <a
              href={data.social.github || '#'}
              className="glass-card rounded-lg px-3 py-2 text-sm text-body transition-colors hover:border-[color:var(--accent)]"
            >
              GitHub
            </a>
            <a
              href={data.social.linkedin || '#'}
              className="glass-card rounded-lg px-3 py-2 text-sm text-body transition-colors hover:border-[color:var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${data.social.email || ''}`}
              className="glass-card rounded-lg px-3 py-2 text-sm text-body transition-colors hover:border-[color:var(--accent)]"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-8 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>© 2026 Sharad Jha. All rights reserved.</div>
        <a href="#home" className="transition-colors hover:text-body">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
