"use client"
import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(5,6,8,0.6)] backdrop-blur-sm border-b border-white/5">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center text-sm font-bold">SJ</div>
          <div className="text-sm font-medium">Sharad Jha</div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-slate-200 hover:text-white relative pb-4">
              <span>{n.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[color:var(--accent)] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="theme" onClick={()=>setDark(!dark)} className="p-2 rounded-md bg-white/5">
            {dark ? <Sun size={16}/> : <Moon size={16}/>}          
          </button>
          <a href="#contact" className="px-4 py-2 bg-[color:var(--accent)] text-white rounded-full text-sm">Let's Connect ↗</a>

          <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </div>

      {/* mobile */}
      {open && (
        <div className="md:hidden bg-[color:var(--panel)] border-t border-white/5">
          <div className="flex flex-col p-4 gap-3">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} onClick={()=>setOpen(false)} className="py-2">{n.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
