import React from 'react'

const groups = [
  {title:'Cloud & Data Warehousing',items:['Snowflake','AWS S3','AWS RDS','AWS Lambda']},
  {title:'Data Engineering',items:['dbt','Informatica IDMC','ETL','ELT','Data Pipelines','Data Migration','Data Modeling']},
  {title:'Programming & Processing',items:['Python','SQL','PySpark','Pandas','NumPy']},
  {title:'Databases',items:['Snowflake','PostgreSQL','MySQL']},
  {title:'Analytics & Visualization',items:['Power BI','Tableau','Matplotlib','Plotly','Streamlit']},
  {title:'Developer Tools',items:['Git','GitHub','Postman','Vercel']}
]

export default function TechStack(){
  return (
    <div>
      <div className="section-label">03 — TOOLBOX</div>
      <h3 className="text-4xl font-extrabold mb-6">Technical Stack</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {groups.map(g => (
          <div key={g.title} className="glass-card p-6">
            <h5 className="font-semibold mb-3">{g.title}</h5>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i=> <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
