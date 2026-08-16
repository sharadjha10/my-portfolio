import React from 'react'
import { Braces, Cloud, Database, LineChart, Settings2, Workflow } from 'lucide-react'

const groups = [
  { title: 'Cloud & Data Warehousing', items: ['Snowflake', 'AWS S3', 'AWS RDS', 'AWS Lambda'], Icon: Cloud },
  { title: 'Data Engineering', items: ['dbt', 'Informatica IDMC', 'ETL', 'ELT', 'Data Pipelines', 'Data Migration', 'Data Modeling'], Icon: Workflow },
  { title: 'Programming & Processing', items: ['Python', 'SQL', 'PySpark', 'Pandas', 'NumPy'], Icon: Braces },
  { title: 'Databases', items: ['Snowflake', 'PostgreSQL', 'MySQL'], Icon: Database },
  { title: 'Analytics & Visualization', items: ['Power BI', 'Tableau', 'Matplotlib', 'Plotly', 'Streamlit'], Icon: LineChart },
  { title: 'Developer Tools', items: ['Git', 'GitHub', 'Postman', 'Vercel'], Icon: Settings2 },
]

export default function TechStack() { return <div className="w-full"><div className="section-label">03 — TOOLBOX</div><h3 className="section-title">Technical Stack</h3><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{groups.map(({ title, items, Icon }) => <article key={title} className="glass-card min-h-[174px] p-6"><div className="mb-5 flex items-center gap-3 text-accent"><Icon size={19}/><h4 className="text-base font-semibold text-strong">{title}</h4></div><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="chip">{item}</span>)}</div></article>)}</div></div> }
