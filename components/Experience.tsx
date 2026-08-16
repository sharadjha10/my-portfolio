import React from 'react'

const experiences = [
  {
    title:'Data Engineer',
    company:'LTIMindtree',
    range:'Feb 2026 – Present',
    current:true,
    bullets:[
      'Developing dbt models across raw, cleansed, and conformed data layers.',
      'Implementing data deduplication, date standardization, macros, and SCD-based transformations.',
      'Creating and managing Snowflake objects including tables, views, procedures, and tasks.',
      'Performing data validation, reconciliation, unit testing, bug fixes, feature development, and production deployments.',
      'Working with AWS S3 for data ingestion workflows.'
    ]
  },
  {
    title:'Graduate Engineer Trainee',
    company:'LTIMindtree',
    range:'Nov 2025 – Feb 2026',
    current:false,
    bullets:[
      'Completed structured training in Snowflake, Informatica IDMC, SQL, ETL/ELT workflows, data engineering concepts, and cloud data platforms.'
    ]
  }
]

export default function Experience(){
  return (
    <div>
      <div className="section-label">04 — CAREER</div>
      <h3 className="text-4xl font-extrabold mb-6">Experience</h3>

      <div className="space-y-8">
        {experiences.map((exp,idx)=> (
          <div key={exp.title} className="flex gap-6 items-start">
            <div className="w-6 flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full ${exp.current? 'bg-[color:var(--accent)]':'bg-white/30'}`} />
              {idx < experiences.length-1 && <div className="w-px bg-white/5 h-full mt-2" />}
            </div>

            <div className="glass-card p-6 w-full">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold">{exp.title} <span className="ml-3 text-xs bg-[color:var(--accent)] text-black px-2 py-1 rounded-full">{exp.current? 'Current':''}</span></h4>
                <div className="text-sm text-muted">{exp.company} • {exp.range}</div>
              </div>

              <p className="text-sm text-muted mb-3">{exp.bullets[0]}</p>
              <ul className="list-disc ml-5 text-sm text-muted space-y-1">
                {exp.bullets.slice(1).map(b=> <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
