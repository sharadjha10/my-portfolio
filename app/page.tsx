import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatIDo from '../components/WhatIDo'
import TechStack from '../components/TechStack'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Background from '../components/Background'

export default function Page() {
  return (
    <>
      <section id="home" className="full-page-section">
        <div className="container section-inner">
          <Hero />
        </div>
      </section>

      <section id="about" className="full-page-section">
        <div className="container section-inner">
          <About />
        </div>
      </section>

      <section id="skills" className="full-page-section">
        <div className="container section-inner">
          <WhatIDo />
        </div>
      </section>

      <section id="tech-stack" className="full-page-section">
        <div className="container section-inner">
          <TechStack />
        </div>
      </section>

      <section id="background" className="full-page-section">
        <div className="container section-inner">
          <Background />
        </div>
      </section>

      <section id="experience" className="full-page-section">
        <div className="container section-inner">
          <Experience />
        </div>
      </section>

      <section id="projects" className="full-page-section">
        <div className="container section-inner">
          <Projects />
        </div>
      </section>

      <section id="contact" className="full-page-section">
        <div className="container section-inner">
          <Contact />
        </div>
      </section>

      <Footer />
    </>
  )
}
