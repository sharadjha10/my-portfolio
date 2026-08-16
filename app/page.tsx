import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatIDo from '../components/WhatIDo'
import TechStack from '../components/TechStack'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Page(){
  return (
    <div>
      <section id="home" className="py-20">
        <div className="container">
          <Hero />
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container">
          <About />
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container">
          <WhatIDo />
          <div className="mt-12">
            <TechStack />
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="container">
          <Experience />
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container">
          <Projects />
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container">
          <Contact />
        </div>
      </section>

      <Footer />
    </div>
  )
}
