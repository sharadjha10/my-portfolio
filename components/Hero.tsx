import React from 'react'
import { ExternalLink } from 'lucide-react'
import data from '../data/siteConfig'

export default function Hero(){
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <div className="inline-flex items-center gap-3 mb-6 glass-card px-4 py-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
          <span>Open to Data Engineering Opportunities</span>
        </div>

        <div className="text-sm text-[color:var(--accent)] font-mono mb-2">DATA ENGINEER</div>

        <h1 className="text-6xl font-extrabold leading-tight mb-4">Sharad Jha</h1>

        <p className="text-xl text-slate-300 max-w-xl mb-6">Building scalable data pipelines and cloud analytics solutions.</p>

        <p className="text-muted max-w-xl mb-6">Data Engineer with 1+ year of experience building and optimizing data pipelines, cloud data warehouses, and analytics solutions. Currently working at LTIMindtree, with hands-on expertise in Snowflake, dbt, SQL, Python, AWS, and modern data engineering practices.</p>

        <div className="flex items-center gap-3 mt-6">
          <a href="#projects" className="px-5 py-3 bg-[color:var(--accent)] rounded-md text-white">View Projects →</a>
          <a href={data.personal.resume || '/Sharad-Jha-Resume.pdf'} className="px-4 py-3 border border-white/10 rounded-md text-sm">Download Resume</a>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <a href={data.social.github || '#'} className="glass-card px-3 py-2 rounded-md">GitHub</a>
          <a href={data.social.linkedin || '#'} className="glass-card px-3 py-2 rounded-md">LinkedIn</a>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {['Snowflake','dbt','SQL','Python','AWS'].map(t=> (
            <span key={t} className="text-xs px-3 py-1 bg-white/5 rounded-full">{t}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="glass-card p-6 w-full max-w-md relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <pre className="font-mono text-sm text-green-400 bg-transparent">$ pipeline.run()</pre>
          <div className="mt-3 text-sm font-mono text-slate-300">
            <div><span className="text-[color:var(--accent)]">source:</span> AWS S3</div>
            <div><span className="text-[color:var(--accent)]">warehouse:</span> Snowflake</div>
            <div><span className="text-[color:var(--accent)]">transform:</span> dbt</div>
            <div><span className="text-[color:var(--accent)]">language:</span> Python</div>
            <div><span className="text-[color:var(--accent)]">status:</span> <span className="text-green-400">production_ready</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
