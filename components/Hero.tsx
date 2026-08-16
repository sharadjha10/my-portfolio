import React from 'react'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import data from '../data/siteConfig'

export default function Hero() {
  return <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
    <div>
      <div className="glass-card inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-strong"><span className="h-2 w-2 rounded-full bg-[color:var(--success)]"/>Open to Opportunities</div>
      <div className="mb-4 mt-5 font-mono text-xs font-medium tracking-[.35em] text-accent">DATA ENGINEER</div>
      <h1 className="mb-4 text-5xl font-extrabold leading-[.9] tracking-[-.08em] text-strong sm:text-6xl lg:text-7xl">Sharad Jha</h1>
      <p className="mb-5 max-w-sm text-xl leading-snug text-body lg:text-2xl">Building scalable data pipelines and cloud analytics solutions.</p>
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">Data Engineer with 1+ year of experience building and optimizing data pipelines, cloud data warehouses, and analytics solutions. Currently working at LTIMindtree, with hands-on expertise in Snowflake, dbt, SQL, Python, AWS, and modern data engineering practices.</p>
      <div className="flex flex-wrap items-center gap-3"><a href="#projects" className="btn-primary gap-2">View Projects <ArrowRight size={16}/></a><a href={data.personal.resume || '/Sharad-Jha-Resume.pdf'} className="btn-secondary gap-2"><Download size={16}/> Download Resume</a><a aria-label="GitHub" href={data.social.github || '#'} className="btn-secondary px-3"><Github size={17}/></a><a aria-label="LinkedIn" href={data.social.linkedin || '#'} className="btn-secondary px-3"><Linkedin size={17}/></a></div>
      <div className="mt-5 flex flex-wrap gap-2">{['Snowflake', 'dbt', 'SQL', 'Python', 'AWS'].map((t) => <span key={t} className="chip">{t}</span>)}</div>
    </div>
    <div className="flex h-full items-center justify-center md:justify-end"><div className="glass-card w-full max-w-2xl overflow-hidden"><div className="flex items-center gap-2 border-b border-[color:var(--border)] px-6 py-5"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-amber-400"/><span className="h-3 w-3 rounded-full bg-[color:var(--success)]"/><span className="ml-3 font-mono text-xs text-muted">sharad@data-engineer: ~/pipeline</span></div><div className="p-7 sm:p-8"><pre className="font-mono text-base font-medium text-[color:var(--code)] sm:text-lg">$ pipeline.run()</pre><div className="mt-4 space-y-2 font-mono text-sm text-body"><div><span className="text-accent">source:</span> AWS S3</div><div><span className="text-accent">warehouse:</span> Snowflake</div><div><span className="text-accent">transform:</span> dbt</div><div><span className="text-accent">language:</span> Python</div><div><span className="text-accent">status:</span> <span className="text-[color:var(--success)]">production_ready</span></div></div></div></div></div>
  </div>
}
