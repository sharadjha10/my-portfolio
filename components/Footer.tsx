import React from 'react'
import data from '../data/siteConfig'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-white/5 pt-10 pb-8">
      <div className="container grid md:grid-cols-3 gap-6">
        <div>
          <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center text-sm font-bold">SJ</div>
          <div className="mt-3 font-medium">Sharad Jha</div>
          <div className="text-sm text-muted mt-2">Data Engineer<br/>Building scalable data systems and turning data into insights.</div>
        </div>

        <div>
          <div className="text-sm text-muted mb-3">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm text-muted mb-3">Connect</div>
          <div className="flex gap-3">
            <a href={data.social.github || '#'} className="glass-card p-3 rounded">GitHub</a>
            <a href={data.social.linkedin || '#'} className="glass-card p-3 rounded">LinkedIn</a>
            <a href={`mailto:${data.social.email || ''}`} className="glass-card p-3 rounded">Email</a>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between mt-8 text-sm text-muted">
        <div>© 2026 Sharad Jha. All rights reserved.</div>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
