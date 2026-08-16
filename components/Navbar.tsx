"use client"
import React, { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState<boolean | null>(null)
  useEffect(() => { const saved = localStorage.getItem('theme'); setDark(saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches) }, [])
  useEffect(() => { if (dark === null) return; document.documentElement.dataset.theme = dark ? 'dark' : 'light'; document.body.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('theme', dark ? 'dark' : 'light') }, [dark])
  const toggleTheme = () => {
    const nextDark = document.documentElement.dataset.theme === 'light'
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light'
    document.body.dataset.theme = nextDark ? 'dark' : 'light'
    localStorage.setItem('theme', nextDark ? 'dark' : 'light')
    setDark(nextDark)
  }
  return <header className="site-header fixed inset-x-0 top-0 z-50">
    <div className="container grid h-full grid-cols-[auto_1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
      <a href="#home" className="flex shrink-0 items-center gap-3 md:justify-self-start"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--text-strong)] text-sm font-bold text-[color:var(--bg)]">SJ</span><span className="hidden text-sm font-semibold text-strong sm:block">Sharad Jha</span></a>
      <nav aria-label="Main navigation" className="hidden items-center justify-center gap-7 md:flex lg:gap-9">
        {navItems.map((n) => <a key={n.id} href={`#${n.id}`} className="group relative py-1 text-sm font-semibold text-body transition-colors hover:text-strong"><span>{n.label}</span><span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-full" /></a>)}
      </nav>
      <div className="flex items-center justify-self-end gap-2 md:gap-3">
        <button type="button" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={dark === false} onClick={toggleTheme} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] text-body hover:bg-[color:var(--surface-hover)]">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <a href="#contact" className="btn-primary hidden gap-2 rounded-xl px-4 py-2 sm:inline-flex">Let&apos;s Connect <ArrowUpRight size={15}/></a>
        <button type="button" className="p-2 text-body md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={21}/> : <Menu size={21}/>}</button>
      </div>
    </div>
    {open && <div className="border-t border-[color:var(--border)] bg-[color:var(--panel-strong)] md:hidden"><nav className="container flex flex-col py-3">{navItems.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-sm font-medium text-body hover:bg-[color:var(--chip-bg)] hover:text-strong">{n.label}</a>)}</nav></div>}
  </header>
}
