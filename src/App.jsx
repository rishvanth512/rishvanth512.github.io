import React from 'react'
import Navbar from './Sections/Navbar'
import HeroSection from './Sections/HeroSection'
import About from './Sections/About'
import Experience from './Sections/Experience'
import Skills from './Sections/Skills'
import Education from './Sections/Education'
import Projects from './Sections/Projects'
import Particle from './Sections/Particle'
import Footer from './Sections/Footer'
import PageLoader from './Sections/PageLoader'

const App = () => {
  return (
    <>

      <Particle />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
       <PageLoader />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Projects />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
