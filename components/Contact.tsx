import React from 'react'
import data from '../data/siteConfig'

export default function Contact(){
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="section-label">07 — CONTACT</div>
        <h3 className="text-4xl font-extrabold mb-6">Let's Build Something With Data</h3>
        <p className="text-muted mb-6">Have a data engineering project, analytics challenge, or opportunity in mind? Let's connect.</p>

        <div className="space-y-4">
          <a className="glass-card p-4 block">Email <div className="text-sm text-muted">{data.social.email || '—'}</div></a>
          <a className="glass-card p-4 block">GitHub <div className="text-sm text-muted">View repositories</div></a>
          <a className="glass-card p-4 block">LinkedIn <div className="text-sm text-muted">Connect professionally</div></a>
        </div>
      </div>

      <form className="glass-card p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input aria-label="name" placeholder="Your name" className="p-3 bg-transparent border border-white/5 rounded" />
          <input aria-label="email" placeholder="you@company.com" className="p-3 bg-transparent border border-white/5 rounded" />
        </div>
        <textarea aria-label="message" placeholder="Tell me about the project or opportunity..." className="w-full p-3 bg-transparent border border-white/5 rounded h-32 mb-4" />
        <button type="submit" className="px-4 py-2 bg-[color:var(--accent)] rounded text-white">Send Message</button>
      </form>
    </div>
  )
}
