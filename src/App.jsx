import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'


const App = () => {
  return (
  <>
  
  <Navbar />
  <div className="max-w-7xl mx-auto pt-20 px-6">
  <HeroSection />
  <About />
  <Experience />
  <Skills />
  <Education />
  <Projects />
  </div>
  
  </>
  )
}

export default App
