import React from 'react'
import { Award, BadgeCheck, CalendarDays, GraduationCap, Landmark, School } from 'lucide-react'

const education = [
  {
    school: 'Vellore Institute of Technology',
    schoolUrl: 'https://www.linkedin.com/in/sharadjha10/details/education/edit/forms/740804974/',
    degree: 'Bachelor of Technology - BTech, Computer Science Engineering',
    degreeUrl: 'https://www.linkedin.com/in/sharadjha10/details/education/edit/forms/740804974/',
    period: 'Aug 2021 – Aug 2025',
    grade: 'Grade: CGPA - 8.77/10',
    note: 'Activities and societies: Founder and President @ iOS Club',
    skills: 'Skills: Graphic Design, Operating Systems, +4 skills',
    Icon: GraduationCap,
  },
  {
    school: 'Christ The King College',
    schoolUrl: 'https://www.linkedin.com/in/sharadjha10/details/education/edit/forms/735683545/',
    degree: 'Intermediate, PCM with Computer Science',
    degreeUrl: 'https://www.linkedin.com/in/sharadjha10/details/education/edit/forms/735683545/',
    period: '2019 – 2021',
    grade: 'Grade: 86.17%',
    note: '',
    skills: '',
    Icon: School,
  },
  {
    school: 'Christ The King College',
    schoolUrl: 'https://www.linkedin.com/in/sharadjha10/details/education/edit/forms/1015982841/',
    degree: 'High School',
    degreeUrl: 'https://www.linkedin.com/in/sharadjha10/details/education/edit/forms/1015982841/',
    period: '2017 – 2019',
    grade: 'Grade: 81.83%',
    note: '',
    skills: '',
    Icon: Landmark,
  },
]

const certifications = [
  {
    brand: 'Microsoft',
    title: 'Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    date: 'Issued Jun 2026 · Expires Jun 2027',
    credential: '6410974E73E0E484',
    mark: 'M',
    brandClass: 'bg-[#0f6cbd]',
  },
  {
    brand: 'Snowflake',
    title: 'SnowPro Core',
    issuer: 'Snowflake',
    date: 'Issued Jan 2026 · Expires Jan 2028',
    credential: 'S125301-260127-COF',
    mark: '❄',
    brandClass: 'bg-[#29b5e8]',
  },
  {
    brand: 'AWS',
    title: 'Amazon Web Services Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Issued Jun 2024 · Expires Jun 2027',
    credential: '44f85e2c13af43968acb8fd7e1d6b5e9',
    mark: 'AWS',
    brandClass: 'bg-[#ff9900]',
  },
]

export default function Background() {
  return (
    <div className="w-full">
      <div className="section-label">06 — BACKGROUND</div>
      <h3 className="section-title">Credentials &amp; Education</h3>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <section>
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[.2em] text-muted">
            <GraduationCap size={16} className="text-accent" /> EDUCATION
          </div>

          <div className="space-y-3">
            {education.map(({ school, schoolUrl, degree, degreeUrl, period, grade, note, skills, Icon }, index) => (
              <article
                key={`${school}-${degree}`}
                className="glass-card group flex gap-4 p-4 transition-colors hover:border-[color:var(--accent)] md:gap-5 md:p-5"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-accent">
                    <Icon size={21} />
                  </span>
                  {index < education.length - 1 && <span className="mt-2 h-full min-h-4 w-px bg-[color:var(--border)]" />}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div className="min-w-0">
                      <a href={schoolUrl} target="_blank" rel="noreferrer" className="block font-semibold text-strong hover:text-accent">
                        {school}
                      </a>
                      <a href={degreeUrl} target="_blank" rel="noreferrer" className="mt-1 block text-sm leading-relaxed text-body hover:text-accent">
                        {degree}
                      </a>
                    </div>
                    <span className="shrink-0 rounded-lg bg-[color:var(--accent-soft)] px-2 py-1 font-mono text-[10px] font-medium text-accent">
                      {grade}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-muted">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={13} />
                      {period}
                    </span>
                  </div>

                  {note && <p className="mt-3 text-sm leading-relaxed text-muted">{note}</p>}
                  {skills && <p className="mt-2 text-sm leading-relaxed text-muted">{skills}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[.2em] text-muted">
            <Award size={16} className="text-accent" /> CERTIFICATIONS
          </div>

          <div className="space-y-3">
            {certifications.map(({ brand, title, issuer, date, credential, mark, brandClass }) => (
              <article
                key={title}
                className="glass-card group p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] md:p-5"
              >
                <div className="flex gap-4">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold text-white ${brandClass}`}>
                    {mark}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-mono text-[.65rem] tracking-[.16em] text-accent">{brand}</div>
                        <h4 className="mt-1 font-semibold leading-snug text-strong">{title}</h4>
                      </div>
                      <BadgeCheck size={18} className="shrink-0 text-accent" />
                    </div>
                    <p className="mt-1 text-sm text-body">{issuer}</p>
                  </div>
                </div>

                <div className="mt-4 border-t border-[color:var(--border)] pt-3 font-mono text-[.7rem] leading-relaxed text-muted">
                  <div>{date}</div>
                  <div className="mt-1 break-all">Credential ID {credential}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
