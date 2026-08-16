import React from 'react'
import { Award, BadgeCheck, CalendarDays, ExternalLink, GraduationCap, MapPin, Sparkles } from 'lucide-react'

export default function Background() {
  return <div className="w-full">
    <div className="section-label">06 — BACKGROUND</div>
    <div className="flex flex-wrap items-end justify-between gap-4"><h3 className="section-title">Credentials &amp; Education</h3><p className="max-w-xs text-sm text-muted">A foundation in cloud technology and computer science.</p></div>
    <div className="mt-8 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
      <article className="relative overflow-hidden rounded-2xl border border-[color:var(--accent)] bg-[color:var(--surface)] p-6 md:p-7">
        <div className="absolute -right-9 -top-10 h-40 w-40 rounded-full bg-[color:var(--accent-soft)] blur-2xl"/>
        <div className="relative flex h-full flex-col"><div className="flex items-start justify-between"><div className="inline-flex items-center gap-2 font-mono text-xs tracking-[.18em] text-accent"><Sparkles size={15}/> CERTIFICATION</div><span className="rounded-xl border border-[color:var(--border)] p-2 text-accent"><Award size={20}/></span></div>
          <div className="mt-9"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff9900] text-lg font-extrabold text-white shadow-lg shadow-orange-500/20">aws</div><h4 className="mt-5 text-2xl font-bold tracking-tight text-strong">AWS Certified<br/>Cloud Practitioner</h4><p className="mt-2 text-sm text-body">Amazon Web Services</p></div>
          <div className="mt-7 flex items-center justify-between border-t border-[color:var(--border)] pt-4"><span className="flex items-center gap-2 font-mono text-xs text-muted"><CalendarDays size={14}/> Issued June 2024</span><span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">Verified <BadgeCheck size={15}/></span></div>
        </div>
      </article>
      <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-7">
        <div className="flex items-start justify-between"><div className="inline-flex items-center gap-2 font-mono text-xs tracking-[.18em] text-accent"><GraduationCap size={15}/> EDUCATION</div><span className="rounded-xl border border-[color:var(--border)] p-2 text-accent"><ExternalLink size={18}/></span></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-[auto_1fr]"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-accent"><GraduationCap size={31}/></div><div><h4 className="text-xl font-bold tracking-tight text-strong">Vellore Institute of Technology, Bhopal</h4><p className="mt-2 font-semibold text-body">Bachelor of Technology</p><p className="text-sm text-muted">Computer Science and Engineering</p><div className="mt-5 flex flex-wrap gap-3 font-mono text-xs"><span className="flex items-center gap-1.5 text-muted"><CalendarDays size={14}/> 2021 - 2025</span><span className="flex items-center gap-1.5 text-muted"><MapPin size={14}/> Bhopal, India</span></div></div></div>
        <div className="mt-7 grid grid-cols-2 overflow-hidden rounded-xl border border-[color:var(--border)]"><div className="p-4"><div className="font-mono text-[.65rem] tracking-[.15em] text-muted">ACADEMIC SCORE</div><div className="mt-1 text-2xl font-bold text-strong">8.77<span className="text-base text-muted"> / 10</span></div></div><div className="border-l border-[color:var(--border)] p-4"><div className="font-mono text-[.65rem] tracking-[.15em] text-muted">SPECIALIZATION</div><div className="mt-2 text-sm font-semibold text-accent">Computer Science</div></div></div>
      </article>
    </div>
  </div>
}
